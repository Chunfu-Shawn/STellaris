import mysql from "mysql";

const options = {
    host: 'localhost',//主机名
    user: 'readwrite',//用户
    password: 'mysql_update',//密码
    port: 3306,//端口号
    database: 'spatial_trans_web'//要操作的数据库
}

export function getPriorWaitingJob() {
    return new Promise( (resolve, reject)=>{
        let connection = mysql.createConnection(options)
        // 连接数据库
        connection.connect()
        let selectSql = `select rid from job_mapping_queue where status="waiting" limit 1`;
        connection.query(selectSql,  (err,result) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(JSON.stringify(result))[0])
            }

        });
        connection.end()
    })
}
