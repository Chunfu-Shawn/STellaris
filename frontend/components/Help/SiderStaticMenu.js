import Link from "next/link.js";
import {Layout, Menu} from 'antd';
import {ProjectOutlined, PushpinOutlined, QuestionCircleOutlined, SettingOutlined, CompassOutlined} from "@ant-design/icons";
import React from "react";
const { Sider } = Layout;

const items = [
    {
        label: 'Manual', key: 'manual', icon: <CompassOutlined />,
        children: [
            { label: <a href={'/help/manual/mapping'}>Spatial Mapping</a>, key: 'manual_mapping'},
            { label: <a href={'/help/manual/datasets'}>Dataset Browser</a>, key: 'manual_datasets' },
            { label: <a href={'/help/manual/search'}>Gene Search</a>, key: 'manual_search'}
        ],
    },
    {
        label: <a href={'/help/api'}>API</a>, key: 'api', icon: <SettingOutlined />
    }
]

export const contentStyle = {
    width:"1100px",
    padding: '10% 2%',
    textAlign: 'left'
}

export function SiderStaticMenu(props){
    return(
        <Sider  style={{backgroundColor:"transparent"}}>
            <Menu
                mode="inline"
                defaultSelectedKeys={[props.selected]}
                defaultOpenKeys={props.opened}
                style={{ marginTop:84 }}
                items={ items }
            />
        </Sider>
    )
}