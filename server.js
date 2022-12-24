import Koa from 'koa'
import nextjs from 'next'
import { parse } from 'url'
import bodyParser from 'koa-bodyparser'
// 导入koa router对象
import {Router} from './libs/koaRouters.js'
import {RouterAPI} from './libs/API-v1.0.0.js'
// session 有关模块
import session from 'koa-session'
import {accessLogger} from "./libs/logSave.js"
//set a crontab
import schedule from 'node-schedule'
// remove files
import rmFiles from './libs/one-week-files-delete.js'
import {getRunningJobNumber} from "./libs/queue/getRunningJobNumber.js";
import {getPriorWaitingJob} from "./libs/queue/getPriorWaitingJob.js";
import {updateJob2Running} from "./libs/queue/updateJob2Running.js";
import {execSpatialMapping} from "./libs/execSpatialMapping.js";

// Determine whether it is a production environment
const dev = process.env.NODE_ENV !== 'production'
// initialize nextjs instance and expose request handler
const app = nextjs(
    {
        dev,
        dir: "./frontend",
    }
)

export const handler = app.getRequestHandler()

app.prepare().then(() => {
    // create an object to present web server
    const server = new Koa()

    // set session
    // server.keys = ['spatial-trans-web'];
    const CONFIG = {
        key: 'spatial-trans-web:sess',   //cookie key (default is koa:sess)
        maxAge: 24 * 60 * 60 * 1000,  // cookie的过期时间 maxAge in ms (default is 1 days)
        overwrite: true,  //是否可以overwrite    (默认default true)
        httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
        signed: true,   //签名默认true
        rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
        renew: false,  //(boolean) renew session when session is nearly expired,
        autoCommit:false,
    };
    //server.use(session(CONFIG, server));

    //设置koa日志访问记录
    //注意，需要放在nextjs路由前面，避免http请求被nextjs接受导致不能在后端进行记录
    server.use(accessLogger);
    // add post body parser
    server.use(bodyParser());

    // use Koa router
    server.use(Router.routes()).use(Router.allowedMethods())
    server.use(RouterAPI.routes()).use(RouterAPI.allowedMethods())

    // for NextJs router 在koa路由中未定义的，将交给nextjs路由继续处理
    server.use(async (ctx) => {
        try{
            const parsedUrl = parse(ctx.req.url, true)
            const { pathname, query } = parsedUrl
            // 传入Node原生的req对象，和res对象，因为Nextjs框架需要兼容许多基于Node封装的web框架
            // 让nextjs全局处理其他页面的http访问
            await handler(ctx.req, ctx.res, parsedUrl)
            // 屏蔽koa中对response的内置处理，让nextjs来接手
            //ctx.response = false
        } catch (err) {
            console.error('Error occurred handling', ctx.req.url, err)
            ctx.res.statusCode = 500
            ctx.res.end('internal server error')
        }
    })

    // crontab for remove decrepit files
    // define regular schedule
    let rule = new schedule.RecurrenceRule();
    // 0 clock per day
    rule.hour =0;
    rule.minute =0;
    rule.second =0;
    // run every day
    let rmFileJob = schedule.scheduleJob(rule, () => {
        // define the directory paths
        const DIR_PATH_RESULTS = './public/results/';
        const DIR_PATH_UPLOADS = './public/uploads/';
        // run
        rmFiles(DIR_PATH_RESULTS,DIR_PATH_UPLOADS)
    });
    // run every 2 second
    let jobQueueJob = schedule.scheduleJob("*/2 * * * * ?", async () => {
        let { running_job_number: runningJobNumber } = await getRunningJobNumber()
        // if there are 2 running jobs
        if( runningJobNumber < 2 ){
            // get first waiting job
            let waitingJob = await getPriorWaitingJob()
            if( waitingJob ){
                // if there is a waiting job
                console.log("Run this job: " + waitingJob.rid)
                await updateJob2Running(waitingJob.rid)
                await execSpatialMapping(waitingJob.rid);
            }else {
                // if there is not a waiting job
            }
        }else {
            // if there are 2 running jobs
        }
    });

    server.listen(3000, () => {
        console.log('server is running at http://localhost:3000')
    })
})

