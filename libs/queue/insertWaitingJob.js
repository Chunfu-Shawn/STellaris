import mysql from "mysql";
import {annotationLogger} from "../logSave.js";

const options = {
    host: 'localhost',//主机名
    user: 'readwrite',//用户
    password: 'mysql_update',//密码
    port: 3306,//端口号
    database: 'spatial_trans_web'//要操作的数据库
}

export function insertWaitingJob(rid) {
    return new Promise( (resolve, reject)=>{
        let connection = mysql.createConnection(options)
        // 连接数据库
        connection.connect()
        // 使用 ? 做为查询参数占位符，在其内部自动调用 connection.escape() 方法对传入参数进行编码，防止sql注入
        let insertSql = `insert into job_mapping_queue(rid) values(?)`;
        // 根据rid更新任务状态
        connection.query(insertSql, [rid], (err) => {
            if (err) {
                annotationLogger.log(`[${new Date().toLocaleString()} ${rid}] Error: there is error happened in MySQL: ${err.message}`)
                reject(err)
            } else {
                annotationLogger.log(`[${new Date().toLocaleString()} ${rid}]: Insert a mapping job into queue in MySQL.`)
                resolve()
            }

        });
        connection.end()
    })
}
