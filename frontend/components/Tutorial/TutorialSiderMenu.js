import React from "react";
import {Layout, Menu} from "antd";
import Link from "next/link.js";
const { Sider } = Layout;

const items = [
    {
        label: <a href={'/tutorial'}>Overview</a>, key: 'Overview',
    },{
        label: "Spatial Mapping", key: 'Spatial Mapping',
        children:
            [
                {
                    label: <a href={'/tutorial/mapping/getStarted'}>Get started</a>, key: 'Get started',
                },
                {
                    label: <a href={'/tutorial/mapping/result'}>Result interpretation</a>, key: 'Result interpretation',
                },
                {
                    label: <a href={'/tutorial/mapping/exApp'}>Expanded application</a>, key: 'MutiOmics',
                }
            ],
    },
    {
        label: <a href={'/tutorial/datasets'}>Dataset Browser</a>, key: 'Dataset Browser'
    },
    {
        label: <a href={'/tutorial/gene'}>Gene Search</a>, key: 'Gene Search',
    },

]

export default function TutorialSiderMenu(props){

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