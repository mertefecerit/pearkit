"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {useState} from "react";
import {PTag, PRadio} from "@/app/components/src";

function ColorsRadioSection() {
    const [optionColor,setOptionColor] = useState('indigo');
    const codeBlock = `<PRadio color="indigo"/>`;
    return (
        <PComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <PTag label="sky"/> <PTag label="red"/> <PTag label="indigo"/> etc.</>}
            codeBlock={codeBlock}
        >
            <PRadio
                color="indigo"
                label="Indigo"
                name="optionsColor"
                value="indigo"
                checked={optionColor === 'indigo'}
                onChange={(e) => setOptionColor(e.target.value)}
            />
            <PRadio
                color="red"
                label="Red"
                name="optionsColor"
                value="red"
                checked={optionColor === 'red'}
                onChange={(e) => setOptionColor(e.target.value)}
            />
            <PRadio
                color="green"
                label="Green"
                name="optionsColor"
                value="green"
                checked={optionColor === 'green'}
                onChange={(e) => setOptionColor(e.target.value)}
            />
        </PComponentShowcaseArea>
    );
}
export default ColorsRadioSection;