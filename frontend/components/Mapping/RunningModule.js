import ReqStatus from "./ReqStatus.js";
import MappingSteps from "./MappingSteps";
import React,{useContext, useEffect, useState} from "react";
import {Card, Col, Divider, Row} from "antd";
import AttributeLayout from "../GenePage/AttributeLayout";
import {SyncOutlined} from "@ant-design/icons";
import {AnnContext} from "../../pages/mapping/resultPage/[rid]";


export default function RunningModule(){
    const annContext = useContext(AnnContext);
    const [nowTime, setNowTime] = useState(Date.parse(annContext.serverTime));
    //refresh server time
    const fetchTime = async () => {
        fetch("/api/server-time")
            .then(res => res.json())
            .then(json => setNowTime(Date.parse(json.serverTime)))
    }
    useEffect(()=>{
        fetchTime()
    },[])
    return(
        <div className="modal-body-stw" >
            <MappingSteps current={3}/>
            <Divider/>
            <Row justify="center" align="top" style={{marginTop:20,textAlign:"left"}}>
                <Col span={8} style={{marginLeft: "40px"}}>
                    <div style={{margin: "40px 0 30px 10px"}}>
                        <h2>Spatial Mapping Starts</h2>
                        <AttributeLayout attribute={"Dataset"}>{annContext.reqInfo.dataset_id}</AttributeLayout>
                        <AttributeLayout attribute={"Section"}>{annContext.reqInfo.section_id}</AttributeLayout>
                    </div>
                    <Card
                        title= {<b><SyncOutlined spin /> Program Log ... </b>}
                        style={{
                            textAlign:"left",
                            height: 240,
                            width: 350,
                            borderColor:"#dcdcdc"
                        }}
                        headStyle={{background:"#f5f5f5",borderColor:"#dcdcdc"}}
                        bodyStyle={{color:"gray"}}
                        size={"small"}
                    >
                        <div style={{overflow: "scroll",height: 180,width: 330}}>
                            {annContext.nLog.map(item => <p key={item} style={{margin:"5px 0px"}}>{item}</p>)}
                        </div>
                    </Card>
                </Col>
                <Col span={12}>
                    <ReqStatus style={{width: 600, margin:"50px auto"}}
                               type={"annotating"}
                               nowTime={nowTime}
                    />
                </Col>
            </Row>
        </div>
    )
}