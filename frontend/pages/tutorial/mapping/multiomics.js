import React from 'react';
import TutorialLayout from "../../../components/Tutorial/TutorialLayout";
import MultiOmics from "../../../components/Tutorial/MultiOmics";

export default function MultiomicsPage() {

    return (
        <TutorialLayout opened={['Spatial Mapping']} selected={'Multiomics'}>
            <MultiOmics/>
        </TutorialLayout>
    )
}