import React from "react";
import {Breadcrumb, Space, Typography, Image} from "antd";
import {contentStyle} from "../Help/SiderStaticMenu";
import Link from "next/link";

export default function MouseFetalBrain(){
    return (
        <div className="modal-body-stw" style={contentStyle}>
            <Breadcrumb>
                <Breadcrumb.Item>Tutorial</Breadcrumb.Item>
                <Breadcrumb.Item>Spatial Mapping</Breadcrumb.Item>
                <Breadcrumb.Item>Result interpretation</Breadcrumb.Item>
                <Breadcrumb.Item>Mouse fetal brain</Breadcrumb.Item>
            </Breadcrumb>
            <a id={"Result interpretation"} style={{position: 'relative', top: "-150px"}}></a>
            <Typography style={{marginTop:50,fontSize:16}}>
                <h2>Result interpretation - Mouse fetal brain</h2>
                <p>
                    Here we continue from
                    <Link href={"/tutorial/mapping/getStarted"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> Get started </b>
                        </a>
                    </Link>to parse the spatial mapping results. The result page of this case
                    study (mouse fetal brain) is available at
                    <Link href={"/mapping/resultPage/52fa0100-909b-11ed-9249-979b422f6c75"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> 52fa0100-909b-11ed-9249-979b422f6c75 </b>
                        </a>
                    </Link>. You can also access it from the
                    <Link href={"/"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> home page</b>
                        </a>
                    </Link>.
                </p>
                <p>
                    Before interpreting the results, we will take some time to explain the computational method used for
                    spatial mapping. We adopted a metric learning approach using a multivariate random forest (RF) model,
                    which was previously described in CellTrek (
                    <a target={"_blank"} href={"https://doi.org/10.1038/s41587-022-01233-1"} rel={"noreferrer"}>
                        https://doi.org/10.1038/s41587-022-01233-1
                    </a>). Briefly, this method trains a multivariate RF model on ST data in the shared latent space and
                    then applies the model to the coembedding data of the scRNA-seq and ST data, thereby enabling the
                    prediction of spatial coordinates of single cells by assigning them to the reciprocal nearest ST
                    spots where the similarity is measured by the RF distance metric. See
                    <Link href={"/help/manual/mapping#spatial"}>
                        <a target={"_blank"} rel={"noreferrer"}>
                            <b> here </b>
                        </a>
                    </Link> for further description.
                </p>
                <p>
                    We also introduced a filtering method, coembedding filtering, to attenuate the confounding effects
                    caused by the incompatibility between the two modalities.
                </p>
                <p>
                    A result page will be available after the job is finished. This page gives users a systematical summary
                    of mapping results regarding filtering, evaluation of mapping quality and the consequent landscape of
                    intercellular communications in the spatial context. It consists of 5 sections including preprocessing,
                    coembedding filtering, spatial cellular map, cell type colocalization and cell-cell ligand-receptor
                    interactions (LRIs). Now, we will go through this page for result interpretation.
                </p>
                <h3>1. Preprocessing</h3>
                <p>
                    Prior to spatial mapping, low-quality cells (genes detected &lt;200 or mitochondrial proportion &gt;20%)
                    were excluded. This section displays the elapsed time for the execution of spatial mapping (left)
                    and the basic information of query scRNA-seq and selected ST section (right). The stacked bar plot
                    visualizes the number of cells that are filtered off and retained, and the summary of the retained cells
                    and genes was shown on the top.
                </p>
                <div style={{textAlign:"center"}}>
                    <Image src={"/images/tutorial/result/preprocessing.png"} width={800} height={370}
                           alt={"preprocessing"} style={{borderStyle:"dashed"}}/>
                </div>
                <h3>2. Coembedding filtering</h3>
                <p>
                    As mentioned earlier, the scRNA-seq and ST data was first projected into a joint latent space. Intuitively,
                    a cell is safely assigned to a ST spot and thereby acquires a coordinate if they are close to each
                    other and vice versa. However, based on the assumption that the query scRNA-seq and selected ST section
                    are properly matched, Celltrek greedily assigns cells to ST spots even if they are derived from completely
                    different tissues. In our tests, over 80% of cells from the mouse liver can be successfully mapped to
                    a ST section of mouse brain that we are currently using although they are not well integrated. We
                    introduce a compromised approach by filtering cells that are not well mixed with ST spots in shared
                    latent space, thus attenuating the confounding effects caused by the incompatibility between these
                    two modalities.
                </p>
                <p>
                    The joint embeddings of single cells and ST spots can be visualized by Uniform Manifold Approximation
                    and Projection (UMAP) plots where the original embedding result is shown on the upper left and the
                    filtered one on the upper right. In this case, the scRNA-seq and ST data are properly aligned because
                    the scRNA-seq data was derived from the mouse cerebral cortex at E14.5 while the ST data was derived
                    from the coronal plane of the mouse brain at exactly the same developmental stage. So it’s reasonable
                    that only a few cells are filtered off in this step (e.g., Endothelial [18-E]). Only the retained cells
                    will be considered in the subsequent mapping analysis.
                </p>
                <div style={{textAlign:"center"}}>
                    <Image src={"/images/tutorial/result/coembedding.png"} width={800} height={420}
                           alt={"coembedding"} style={{borderStyle:"dashed"}}/>
                </div>
                <h3>3. Spatial cellular map</h3>
                <p>
                    Here comes the key results of the spatial mapping. The original spatial transcriptomic map of the
                    selected ST section (upper left)  is displayed accompanying the spatial mapping result of individual
                    cells at a single-cell resolution (upper right). This interactive panel allows you to click to view
                    the spatial distribution of your desired cell type in the right tab. You can also search for the
                    spatial expression landscapes of genes of interest.
                </p>
                <p>
                    The bar plot (lower left) summarizes the mapping results for each cell type. The histogram (lower right)
                    gives you an intuitive assessment of mapping quality where a summit of RF distance around 0.5 or even
                    lower indicates an acceptable result.
                </p>
                <div style={{textAlign:"center"}}>
                    <Image src={"/images/tutorial/result/spatial_cellular_map.png"} width={800} height={750}
                           alt={"spatial_cellular_map"} style={{borderStyle:"dashed"}}/>
                </div>
                <p>
                    For example, radial glial cells in the cerebral cortex line the ventricles. Ganglionic eminence cells,
                    the progenitor cells of the ventral telencephalon, are located precisely in the ventral part of the
                    brain. Thalamic cells are also positioned in the right place, although they are rarely captured in
                    the scRNA-seq data.
                </p>
                <div style={{textAlign:"center"}} >
                    <Space>
                        <Image src={"/images/tutorial/result/map1.png"} width={500} height={350}
                               alt={"map1"} style={{borderStyle:"dashed"}}/>
                        <Image src={"/images/tutorial/result/map2.png"} width={500} height={350}
                               alt={"map2"}/>
                    </Space>
                </div>
                <div style={{textAlign:"center"}} >
                    <Image src={"/images/tutorial/result/map3.png"} width={500} height={350}
                           alt={"map3"} style={{borderStyle:"dashed"}}/>
                </div><br/>
                <p>
                    In addition to precise patterning of diverse cell types, the expression profiles of their respective
                    marker genes (e.g., Hes5, Dlx2, and Syt13) successfully recapitulated those observed in the
                    reference ST section.
                </p>
                <div style={{textAlign:"center"}} >
                    <Space>
                        <Image src={"/images/tutorial/result/cell1.png"} width={500} height={330}
                               alt={"cell1"} style={{borderStyle:"dashed"}}/>
                        <Image src={"/images/tutorial/result/cell2.png"} width={500} height={330}
                               alt={"cell2"}/>
                    </Space>
                </div>
                <div style={{textAlign:"center"}} >
                    <Image src={"/images/tutorial/result/cell3.png"} width={500} height={330}
                           alt={"cell3"} style={{borderStyle:"dashed"}}/>
                </div>
                <h3>4. Cell type colocalization</h3>
                <p>
                    Once we get the spatial cellular map where single cells are registered with spatial coordinates, we
                    can assess the spatial proximity of cell type pairs which is visualized by cell-cell contact map (left).
                    The closeness of a pair of cell types is measured by Euclidean distance. The distance heatmap has been
                    clustered using hierarchical clustering. In this case, the colocalized cell type clusters reveal the
                    anatomy of the developing mouse brain. We then performed k-means clustering with k=3 to further divide
                    the cell type pairs into three groups: &quot;near,&quot; &quot;medium,&quot; and &quot;far,&quot; (right).
                </p>
                <div style={{textAlign:"center"}} >
                    <Image src={"/images/tutorial/result/colocalization.png"} width={800} height={440}
                           alt={"colocalization"} style={{borderStyle:"dashed"}}/>
                </div>
                <h3>5. Cell-cell ligand-receptor Interactions</h3>
                <p>
                    STellaris then identifies LRIs for each cell type pair in different distance groups previously
                    defined. With the spatial proximity between diverse cell types, you can dissect the intercellular
                    interactions in the spatial context given that intercellular communications are more likely to occur
                    in cells that are adjacent to each other. The heatmap (upper left) visualizes the number of LRIs
                    detected between each pair of cell types. To focus on a specific cell type, you can select it from
                    the drop-down box and visualize its associated LRIs in a dot plot on the right. (right). For a
                    detailed presentation of LRIs between two cell types, STellaris provides a chord graph (lower left)
                    where the dot colors distinguish gene types and line colors refer to the expression level of interactions.
                    Note that the former cell type represents sender cells and the latter cell type represents receiver cells.
                </p>
                <div style={{textAlign:"center"}} >
                    <Image src={"/images/tutorial/result/interactions.png"} width={800} height={770}
                           alt={"interactions"} style={{borderStyle:"dashed"}}/>
                </div>
                <p>
                    As for this example where mouse corticogenesis is undergoing a progenitor driven phase, we focused
                    on the migration process of neuroprogenitors, which is crucial to the expansion of the cerebral
                    cortex. After the onset of neurogenesis, in the ventricular zone (VZ), apical progenitors mainly
                    composed of radial glias (RGs) generate basal progenitors, the secondary class of neuroprogenitors,
                    and the newborn basal progenitors migrate to the subventricular zone (SVZ) where they produce most
                    of cortical neurons. In the scRNA-seq data we use here, RG1 [8-E] represents the major cell type of
                    RGs that lines the VZ, SVZ1 (migrating) [14-E] represents the major basal progenitors located in SVZ
                    which were generated and migrated from VZ. We observed that these two cell types were in close proximity
                    to each other as they were determined to be in “near” range. We found that Ptn-Ptprs, the top-ranked
                    LRI between RG1 (sender) and SVZ1 (receiver) , stands out along with the migration event. These results
                    may reinforce previous findings suggesting that PTN acts as a ligand that can bind with CSPGs at the
                    neuron surface, thereby leading to releasing of PTPRS, which is required for the radial migration of
                    neurons and lamination of the developing cerebral cortex.
                </p>
                <div style={{textAlign:"center"}} >
                    <Image src={"/images/tutorial/result/dotplot.png"} width={500} height={650}
                           alt={"dotplot"} style={{borderStyle:"dashed"}}/>
                </div>
            </Typography>
        </div>
    )
}