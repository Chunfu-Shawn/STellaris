import React from "react";
import {Breadcrumb, Space, Typography, Image} from "antd";
import {contentStyle} from "../Help/SiderStaticMenu";
import Link from "next/link.js";
import {downloadFile} from "../util";


export default function GetStarted(){

    const handleClick = () => {
        downloadFile(`/api/submitted-files/counts/52fa0100-909b-11ed-9249-979b422f6c75`)
        downloadFile(`/api/submitted-files/labels/52fa0100-909b-11ed-9249-979b422f6c75`)
    }

    return(
        <div className="modal-body-stw" style={contentStyle}>
            <Breadcrumb>
                <Breadcrumb.Item>Tutorial</Breadcrumb.Item>
                <Breadcrumb.Item>Spatial Mapping</Breadcrumb.Item>
                <Breadcrumb.Item>Get started</Breadcrumb.Item>
            </Breadcrumb>
            <a id={"Get started"} style={{position: 'relative', top: "-150px"}}></a>
            <Typography style={{marginTop:50,fontSize:16}}>
                <h2>Get started (step by step)</h2>
                <p>In this tutorial, we use the
                    <a onClick={handleClick}>
                        <b> scRNA-seq data </b>
                    </a>
                    of <b>fetal mouse cerebral cortex (E14.5)</b> (
                    <Link href={"https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE123335"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b>GSE123335</b>
                        </a>
                    </Link>) to show you how to get started with the<b> spatial mapping </b>
                    tool, the key module implemented in STellaris. Prior to performing spatial mapping analysis, we have
                    some preparatory work to do, including preparing input files, submitting a job and selecting a properly
                    matched ST section and appropriate parameters.
                </p>
                <h3>1. Prepare input files</h3>
                <a id={"data_preparation"} style={{position: 'relative', top: "-150px"}}></a>
                <p>The spatial mapping analysis requires two files uploaded by users:
                    <ul>
                        <li>
                            1) cell-by-gene count matrix file measured by raw counts where column name are gene symbols and
                            row name are unique cell ids;
                        </li>
                        <li>
                            2) meta information of cells requiring cell ids in the first column that are in same
                            order as count matrix and cell type (or cluster) labels in one of the latter columns titled
                            with “cell_type”.
                        </li>
                    </ul>
                    Note that the identifiers of genes should only be gene symbols currently. These two files should be
                    tab- or comma-delimited (.tsv, .txt or .csv)  in gzip or zip compression (.gz or .zip).
                </p>
                <p>A desirable count matrix file looks like:</p>
                <div style={{textAlign:"center"}}>
                    <Image src={"/images/tutorial/start/counts_matrix_example.png"} width={600} height={350}
                           alt={"counts_matrix_example"} style={{borderStyle:"dashed"}}/>
                </div>
                <p>A desirable label file looks like:</p>
                <div style={{textAlign:"center"}}>
                    <Image src={"/images/tutorial/start/labels_example.png"} width={600} height={200}
                           alt={"labels_example"} style={{borderStyle:"dashed"}}/>
                </div>
                <h3>2. Submit a job</h3>
                <p>Go to the home page or Mapping page (from the navigator bar), submit a job following the next steps:</p>
                <h4>Basic information</h4>
                <ul>
                    <li>Enter a title of your job in &quot;Job Title&quot; box (no more than 80 characters).</li>
                    <li>Enter an email address to receive the notification of project progress (optional).</li>
                    <li>Select candidate ST sections matching your scRNA-seq by specifying &quot;Species&quot;,
                        &quot;Organ&quot; and &quot;Tissue&quot;. This step is crucial that only the ST sections meeting
                        these conditions will be considered in the following analyses. Here we choose species &quot;Mus
                        musculus,&quot; organ &quot;Brain&quot; and tissue &quot;Brain&quot;.</li>
                </ul>
                <h4>Data upload</h4>
                <ul>
                    <li>Click on “Select a count matrix file” button and select a prepared count matrix file.</li>
                    <li>Click on “Select a label file” to select a metadata file with cell type annotation.</li>
                    <li>Click on “Upload” and wait for a second.</li>
                </ul>
                <div style={{textAlign:"center"}}>
                    <Image src={"/images/tutorial/start/get_started.png"} width={800} height={450}
                           alt={"get_started"} style={{borderStyle:"dashed"}}/>
                </div>
                <h3>3. Section blast</h3>
                <p>After your scRNA-seq data were successfully uploaded, you will receive a confidential URL for your requested job and
                    be redirected to a running page. The next step we call as &quot;section blast&quot; will automatically start. In brief,
                    this analysis aims to help researcher rapidly screen out the ST section that properly matches your
                    scRNA-seq data in samples of interest. See
                    <Link href={"/help/manual/mapping#section_blast"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> here </b>
                        </a>
                    </Link>for further description. This step is generally fast and will take about 2~3 min.
                </p>
                <div style={{textAlign:"center"}} >
                    <Space>
                        <Image src={"/images/tutorial/start/email.png"} width={400} height={230}
                               alt={"email"} style={{borderStyle:"dashed"}}/>
                        <Image src={"/images/tutorial/start/section_blast.png"} width={600} height={330}
                               alt={"section_blast"}/>
                    </Space>
                </div>
                <p>
                    When section blast is finished, matching scores of ST sections will be returned in descending order.
                    A table with additional attributes of examined ST sections (104 sections in this example) will also
                    be reported. To choose the section to which you want to map, you can manipulate this table by reordering
                    by a certain feature or filtering some sections in the table header. You can also click the &quot;ST ID&quot;
                    and navigate to<b> dataset browser </b>of ST dataset that you are interested in for further information. Once
                    you have decide which ST section to choose for spatial mapping, you can click the &quot;select&quot; button on
                    the right to proceed.
                </p>
                <div style={{textAlign:"center"}}>
                    <Space>
                        <Image src={"/images/tutorial/start/section_bar.png"} width={550} height={310}
                               alt={"section_bar"}/>
                        <Image src={"/images/tutorial/start/section_table.png"} width={550} height={310}
                               alt={"section_table"}/>
                    </Space>
                </div>
                <p>
                    Here we select the top-ranked ST section, a ST data derived from the coronal plane of the fetal mouse
                    brain at E14.5 generated using Stereo-seq by our own lab (
                    <Link href={"/datasets/dataPage/STW-M-Brain-Stereo-seq-1"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b>STW-M-Brain-Stereo-seq-1 coronal_1</b>
                        </a>
                    </Link>
                    ).
                    Notably, it coincided exactly with the developmental stage of our uploaded scRNA-seq data, underling
                    the feasibility of section blast.
                </p>
                <div style={{textAlign:"center"}}>
                    <Space>
                        <Image src={"/images/tutorial/start/select_section.png"} width={550} height={310}
                               alt={"select_section"}/>
                        <Image src={"/images/tutorial/start/select_section2.png"} width={550} height={310}
                               alt={"select_section2"}/>
                    </Space>
                </div>
                <h3>4. Spatial mapping</h3>
                <p>
                    A confirming dialog will pop up when you click the &quot;select&quot; button where you can set the advanced
                    parameters for spatial mapping. As the scRNA-seq data is sufficient in number (10,932 cells),
                    we restrict the &quot;redundancy&quot; parameter to 1. We keep other parameters as default. See
                    <Link href={"/help/manual/mapping#advanced_parameters"}>
                       <a target={"_blank"} rel={"noreferrer"}>
                            <b> here </b>
                        </a>
                    </Link>for description of the advanced parameters. We then click &quot;Continue&quot; to start the
                    process of spatial mapping. This will redirect us to another running page.
                </p>
                <div style={{textAlign:"center",marginTop:10}} >
                    <Image src={"/images/tutorial/start/select_section3.png"} width={550} height={320}
                           alt={"select_section3"}/>
                </div>
                <p>
                    If the server is busy, your job will be put in the queue and start automatically when the server is
                    no longer occupied. Note that spatial mapping will generally take about 30 min for around 20,000
                    single cells, please be patient, you can leave aside the running page and remember to come back later.
                </p>
                <div style={{textAlign:"center",margin:10}}>
                    <Space>
                        <Image src={"/images/tutorial/start/select_section4.png"} width={550} height={320}
                               alt={"select_section4"}/>
                        <Image src={"/images/tutorial/start/select_section5.png"} width={550} height={320}
                               alt={"select_section5"}/>
                    </Space>
                </div>
                <p>
                    You will be automatically redirected to the result page of spatial mapping when the job is completed.
                    The interpretation of spatial mapping results will be discussed using several typical case studies
                    in the next tutorial &quot;
                    <Link href={"/tutorial/mapping/mouseBrain"}>
                        <a>
                            <b>Result interpretation</b>
                        </a>
                    </Link>&quot;.
                </p>
            </Typography>
        </div>
    )
}