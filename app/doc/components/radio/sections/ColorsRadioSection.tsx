"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {useState} from "react";
import {BuiTag, BuiRadio} from "@/app/components/src";

function ColorsRadioSection() {
    const [optionColor,setOptionColor] = useState('indigo');
    const codeBlock = `<BuiRadio color="indigo"/>`;
    return (
        <BuiComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <BuiTag label="sky"/> <BuiTag label="red"/> <BuiTag label="indigo"/> etc.</>}
            codeBlock={codeBlock}
        >
            <BuiRadio
                color="indigo"
                label="Indigo"
                name="optionsColor"
                value="indigo"
                checked={optionColor === 'indigo'}
                onChange={(e) => setOptionColor(e.target.value)}
            />
            <BuiRadio
                color="red"
                label="Red"
                name="optionsColor"
                value="red"
                checked={optionColor === 'red'}
                onChange={(e) => setOptionColor(e.target.value)}
            />
            <BuiRadio
                color="green"
                label="Green"
                name="optionsColor"
                value="green"
                checked={optionColor === 'green'}
                onChange={(e) => setOptionColor(e.target.value)}
            />
        </BuiComponentShowcaseArea>
    );
}
export default ColorsRadioSection;