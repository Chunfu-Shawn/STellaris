import {Breadcrumb, Button, Space, Typography, Image} from "antd";
import Link from "next/link";
import React from "react";
import {contentStyle} from "../Help/SiderStaticMenu";

export default function Overview(){
    return(
        <div className="modal-body-stw" style={contentStyle}>
            <Breadcrumb>
                <Breadcrumb.Item>Help</Breadcrumb.Item>
                <Breadcrumb.Item>Tutorial</Breadcrumb.Item>
                <Breadcrumb.Item>Overview</Breadcrumb.Item>
            </Breadcrumb>
            <a id={"Overview"} style={{position: 'relative', top: "-150px"}}></a>
            <Typography style={{marginTop:50,fontSize:16}}>
                <h2>Overview</h2>
                <p>
                    The original intent of STellaris was to provide a platform for rapid spatial mapping for the
                    ever-going single-cell RNA sequencing (scRNA-seq) data based on the emerging spatial transcriptomics (ST)
                    methodology, thus helping researchers make full use of the increasing volume of single-cell genomic data
                    in the spatial context. We provides tutorials on the three major tools implemented in STellaris, including
                    <b> spatial mapping</b>, <b>dataset browser</b> and <b>gene search</b> tools.
                </p>
                <p>
                    Spatial Mapping is the key function of STellaris. We will guide users to get started using STellaris to
                    map their own annotated scRNA-seq data to spatial positions in tissue sections curated in our local
                    database.(See
                    <Link href={"/tutorial/mapping/getStarted"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> Get started </b>
                        </a>
                    </Link>
                    ). We also include a tutorial on how to systematically interpret the spatial mapping results and downstream
                    intercellular communication results. (See
                    <Link href={"/tutorial/mapping/mouseBrain"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> Result interpretation </b>
                        </a>
                    </Link>
                    ). To demonstrate the usefulness of STellaris in real-world data, we
                    provide tutorials on the application of (i) dissecting the spatial organization of the developing
                    mouse cerebral cortex (
                    <Link href={"/tutorial/mapping/mouseBrain"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> Mouse fetal brain </b>
                        </a>
                    </Link>
                    ), (ii) mapping intercellular crosstalk at tumor leading edges of human squamous
                    cell carcinoma (
                    <Link href={"/tutorial/mapping/humanSCC"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> Human squamous cell carcinoma </b>
                        </a>
                    </Link>
                    ) and (iii) deciphering the spatial patterning of H3K4me3 histone modification in the mouse brain (
                    <Link href={"/tutorial/mapping/multiomics"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> H3K4me3 modification in mouse brain </b>
                        </a>
                    </Link>
                    ). brain). In
                    addition. we also offer tutorials on how to browser and search our curated ST datasets (
                    <Link href={"/tutorial/datasets"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> Dataset browser </b>
                        </a>
                    </Link>
                    ) and retrieve tissue-wide expression signatures of candidate genes (
                    <Link href={"/tutorial/gene"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> Gene search </b>
                        </a>
                    </Link>
                    ) from the spatial perspective.
                </p>
                <p style={{marginBottom:0}}>Note that we include three examples of spatial mapping that have already
                    been completed:</p>
                <Button type={"link"}>
                    <a href={"/mapping/resultPage/52fa0100-909b-11ed-9249-979b422f6c75"}>
                        <span>
                            Mouse fetal brain <b><i>(FINISHED)</i></b>
                        </span>
                    </a>
                </Button>
                <Button type={"link"}>
                    <a href={"/mapping/resultPage/b3ae1730-90b3-11ed-9695-b54d6690f34b"}>
                        <span>
                            Human squamous cell carcinoma <b><i>(FINISHED)</i></b>
                        </span>
                    </a>
                </Button>
                <Button type={"link"}>
                    <a href={"/mapping/resultPage/5a1a39a0-923a-11ed-bff4-0302d4a3355f"}>
                        <span>
                            H3K4me3 modification in mouse brain <b><i>(FINISHED)</i></b>
                        </span>
                    </a>
                </Button>
                <p style={{marginBottom:0}}>and three corresponding examples to be executed leading to these results:</p>
                <Button type={"link"}>
                    <a href={"/"}>
                        <span>
                            Mouse fetal brain <b><i>(FROM SCRATCH)</i></b>
                        </span>
                    </a>
                </Button>
                <Button type={"link"}>
                    <a href={"/"}>
                        <span>
                            Human squamous cell carcinoma <b><i>(FROM SCRATCH)</i></b>
                        </span>
                    </a>
                </Button>
                <Button type={"link"}>
                    <a href={"/"}>
                        <span>
                            H3K4me3 modification in mouse brain <b><i>(FROM SCRATCH)</i></b>
                        </span>
                    </a>
                </Button>
                <p>You can get started using these demo cases from <b>Home page</b> or <b>Mapping page</b> in the navigation bar.</p>
                <div style={{textAlign:"center"}} >
                    <Space>
                        <Image src={"/images/tutorial/example1.png"} width={500} height={300}
                           alt={"example1"} style={{borderStyle:"dashed"}}/>
                        <Image src={"/images/tutorial/example2.png"} width={500} height={300}
                           alt={"example2"} style={{borderStyle:"dashed"}}/>
                    </Space>
                </div>
                <div style={{textAlign:"center",marginTop:10}} >
                    <Image src={"/images/tutorial/example3.png"} width={500} height={300}
                           alt={"example3"}/>
                </div>
                <br/><br/>
            </Typography>
        </div>
    )
}