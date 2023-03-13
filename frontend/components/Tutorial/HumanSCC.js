import React from "react";
import {Breadcrumb, Space, Typography, Image} from "antd";
import {contentStyle} from "../Help/SiderStaticMenu";
import {downloadFile} from "../util";
import Link from "next/link";

export default function HumanSCC(){

    const handleClick = () => {
        downloadFile(`/api/submitted-files/counts/b3ae1730-90b3-11ed-9695-b54d6690f34b`)
        downloadFile(`/api/submitted-files/labels/b3ae1730-90b3-11ed-9695-b54d6690f34b`)
    }

    return (
        <div className="modal-body-stw" style={contentStyle}>
            <Breadcrumb>
                <Breadcrumb.Item>Tutorial</Breadcrumb.Item>
                <Breadcrumb.Item>Spatial Mapping</Breadcrumb.Item>
                <Breadcrumb.Item>Result interpretation</Breadcrumb.Item>
                <Breadcrumb.Item>Human squamous cell carcinoma</Breadcrumb.Item>
            </Breadcrumb>
            <a id={"Result interpretation"} style={{position: 'relative', top: "-150px"}}></a>
            <Typography style={{marginTop:50,fontSize:16}}>
                <h2>Result interpretation - Human squamous cell carcinoma</h2>
                <p>
                    The tumor microenvironment (TME) is a complex ecosystem involving various interactions between cancer
                    cells and their microenvironment, ultimately contributing to tumor progression, metastasis and drug
                    resistance. Understanding the cell interplay that occurs within the TME can facilitate the development
                    of new therapeutic strategies.
                </p>
                <p>
                    Here, we used the
                    <a onClick={handleClick}>
                        <b> scRNA-seq data </b>
                    </a>data from diseased skin tissue collected from a patient with cutaneous squamous cell carcinoma
                    (cSCC) (
                    <Link href={"https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSM4284326"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b>Patient 10, GSM4284326</b>
                        </a>
                    </Link>) and mapped individual cells to their tissue of origin derived from the same patient
                    (
                    <Link href={"/datasets/dataPage/STW-H-Skin-ST-1"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b>STW-H-Skin-ST-1</b>
                        </a>
                    </Link>).
                </p>
                <p>
                    The result page of this case study (Human squamous cell carcinoma) is available at
                    <Link href={"/mapping/resultPage/b3ae1730-90b3-11ed-9695-b54d6690f34b"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> b3ae1730-90b3-11ed-9695-b54d6690f34b </b>
                        </a>
                    </Link>. You can also access it from the
                    <Link href={"/"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> home page</b>
                        </a>
                    </Link>.
                </p>
                <div style={{textAlign:"center"}}>
                    <Image src={"/images/tutorial/hSCC/spatial_cellular_map.png"} width={800} height={550}
                           alt={"spatial_cellular_map"} />
                </div>
                <p>
                    Notably, before starting spatial mapping, we set the &quot;redundancy&quot; parameter to 10 to avoid
                    sparse cell mapping, as the cell number was insufficient (2366 cells), and the &quot;KNN Number&quot;
                    to 0 to skip filtering cells in latent space, as these two modalities were collected from the same
                    patient and were well matched.
                </p>
                <div style={{textAlign:"center"}}>
                    <Image src={"/images/tutorial/hSCC/advanced_paramters.png"} width={600} height={330}
                           alt={"advanced_paramters"} style={{borderStyle:"dashed"}}/>
                </div>
                <p>
                    It has been reported that the tumor-specific keratinocyte (TSK) population is enriched in the leading
                    edges of cSCC and functions as a hub for intercellular communications within a fibrovascular niche.
                    Consistently, we observed a significant enrichment of TSKs in the tumor leading edges where they
                    colocalize with distinct cell types, such as fibroblasts, macrophages, myeloid-derived suppressor
                    cells (MDSCs) and B cells, to constitute the TME. This was further validated by the spatial distance
                    between each cell type pair (heatmap), where TSK-fibroblasts were determined to be in the &quot;near&quot; range,
                    and TSK-macrophages, TSK-MDSCs and TSK-B cells were determined to be in the &quot;medium&quot; range
                    (box graph).
                </p>
                <div style={{textAlign:"center"}} >
                    <Space>
                        <Image src={"/images/tutorial/hSCC/colocalization1.png"} width={740} height={400}
                               alt={"colocalization1"} style={{borderStyle:"dashed"}}/>
                        <Image src={"/images/tutorial/hSCC/colocalization2.png"} width={350} height={360}
                               alt={"colocalization2"}/>
                    </Space>
                </div>
                <p>
                    Next, we examined the LRIs within the TSK-fibrovascular TME. We found that TSKs are engaged in
                    extensive interactions with distinct stromal cells in the TME.
                </p>
                <div style={{textAlign:"center"}}>
                    <Image src={"/images/tutorial/hSCC/cell_cell_interations.png"} width={800} height={420}
                           alt={"cell_cell_interations"} style={{borderStyle:"dashed"}}/>
                </div>
                <p>
                    For example, TSKs may modulate cancer-associated fibroblasts (CAFs) through several ligand-receptor
                    pairs in the leading edges, including MDK-LRP1, CCL5-ACKR4, VEGFA-NRP2 and CXCL11-ACKR3. Moreover,
                    we observed that TGFB1, a known CAF activator gene that is mainly expressed in TSKs in the leading
                    edges, may participate in the induction of CAFs. These results are consistent with previous findings.
                </p>
                <div style={{textAlign:"center"}} >
                    <Space>
                        <Image src={"/images/tutorial/hSCC/chord1.png"} width={350} height={350}
                               alt={"chord1"} style={{borderStyle:"dashed"}}/>
                        <Image src={"/images/tutorial/hSCC/chord2.png"} width={360} height={360}
                               alt={"chord2"}/>
                        <Image src={"/images/tutorial/hSCC/chord3.png"} width={350} height={360}
                               alt={"chord3"}/>
                    </Space>
                </div>
                <p>
                    Conversely, we identified LRIs through which TSKs may be regulated by other TME cells. For example,
                    we identified SPP1-CD44 signalling, which mediates crosstalk between TSKs and tumor-associated
                    macrophages (TAMs) as well as MDSCs. This TAM-mediated SPP1-CD44 signalling has been shown to be
                    associated with infiltration of TAMs and poor prognosis.
                </p>
                <div style={{textAlign:"center"}} >
                    <Space>
                        <Image src={"/images/tutorial/hSCC/chord4.png"} width={460} height={460}
                               alt={"chord4"} style={{borderStyle:"dashed"}}/>
                        <Image src={"/images/tutorial/hSCC/chord5.png"} width={460} height={460}
                               alt={"chord5"}/>
                    </Space>
                </div>
            </Typography>
        </div>
    )
}