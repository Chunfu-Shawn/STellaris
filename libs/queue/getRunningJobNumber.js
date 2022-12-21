import mysql from "mysql";
import {annotationLogger} from "../logSave.js";

const options = {
    host: 'localhost',//主机名
    user: 'readwrite',//用户
    password: 'mysql_update',//密码
    port: 3306,//端口号
    database: 'spatial_trans_web'//要操作的数据库
}

export function getRunningJobNumber() {
    return new Promise( (resolve, reject)=>{
        let connection = mysql.createConnection(options)
        // 连接数据库
        connection.connect()
        // 使用 ? 做为查询参数占位符，在其内部自动调用 connection.escape() 方法对传入参数进行编码，防止sql注入
        let countSql = `select COUNT(rid) as running_job_number from job_mapping_queue where status="running"`;
        // 根据rid更新任务状态
        connection.query(countSql,  (err,result) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(JSON.stringify(result))[0])
            }

        });
        connection.end()
    })
}
