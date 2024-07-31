"use client";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PAlert, PTag} from "@/app/components/src";
import React, {useState} from "react";

function ClosableAlertSection() {
    const [alertStatus, setAlertStatus] = useState(true);
    const codeBlock = `<PAlert status={true} closable={false} />`;
    return (
        <PComponentShowcaseArea
            anchor="closable"
            title="Closable"
            desc={<>Thanks to the <PTag label={"closable"}/> feature, you can control whether the alert can be closed. You can use it to show fixed message.</>}
            codeBlock={codeBlock}
        >
            <PAlert closable={false} status={alertStatus} close={() => setAlertStatus(false)} message="Lorem Ipsum is simply dummy text of the printing"/>
        </PComponentShowcaseArea>
    );
}

export default ClosableAlertSection;