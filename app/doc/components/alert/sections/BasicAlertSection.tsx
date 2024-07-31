"use client";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PAlert} from "@/app/components/src";
import React, {useState} from "react";

function BasicAlertSection() {
    const [alertStatus, setAlertStatus] = useState(true);
    const codeBlock = `const [alertStatus, setAlertStatus] = useState(false);

<PAlert status={alertStatus} close={() => setAlertStatus(false)} message="Lorem Ipsum..."/>`;
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Here is an alert component that you can use in your projects.</>}
            codeBlock={codeBlock}
        >
            <PAlert status={alertStatus} close={() => setAlertStatus(false)} message="Lorem Ipsum is simply dummy text of the printing"/>
        </PComponentShowcaseArea>
    );
}

export default BasicAlertSection;