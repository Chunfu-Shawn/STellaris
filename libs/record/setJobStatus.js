import mysql from "mysql";
import {annotationLogger} from "../logSave.js";

const options = {
    host: 'localhost',//主机名
    user: 'readwrite',//用户
    password: 'mysql_update',//密码
    port: 3306,//端口号
    database: 'spatial_trans_web'//要操作的数据库
}

export function setJobStatus(rid, status) {
    return new Promise( (resolve, reject)=>{
        if(status !== "screening" && status !== "selecting" && status !== "waiting" && status !=="running"
            && status !=="finished" && status !=="error") {
            reject("incorrect status when set job status in MySQL")
        }
        let connection = mysql.createConnection(options)
        // 连接数据库
        connection.connect()
        // 使用 ? 做为查询参数占位符，在其内部自动调用 connection.escape() 方法对传入参数进行编码，防止sql注入
        let updateSql = `UPDATE users_annotation_records SET status=? WHERE rid=?;`;
        // 根据rid更新任务状态
        connection.query(updateSql, [status, rid], (err) => {
            if (err) {
                annotationLogger.log(`[${new Date().toLocaleString()}] Error: there is error happened in MySQL: ${err.message}`)
                reject(err)
            } else {
                annotationLogger.log(`[${new Date().toLocaleString()}]: Set the status of ${rid} to "${status}" in MySQL.`)
                //resolve 放在query回调函数里面
                resolve()
            }
        });
        connection.end()
    })
}