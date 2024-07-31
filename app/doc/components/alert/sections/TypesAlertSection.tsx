"use client";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PAlert, PTag} from "@/app/components/src";
import React, {useState} from "react";

function TypesAlertSection() {
    const [alertStatus, setAlertStatus] = useState(true);
    const [alertStatus1, setAlertStatus1] = useState(true);
    const [alertStatus2, setAlertStatus2] = useState(true);
    const [alertStatus3, setAlertStatus3] = useState(true);
    const codeBlock = `<PAlert type="success" />`;
    return (
        <PComponentShowcaseArea
            anchor="types"
            title="Types"
            desc={<>Alert comes in 4 different types. <PTag label={"info"} color={"blue"}/> comes by default. The other three are <PTag label={"danger"} color={"red"}/>, <PTag label={"warning"} color={"yellow"}/> and <PTag label={"success"} color={"green"}/> types.</>}
            codeBlock={codeBlock}
        >
            <PAlert status={alertStatus} close={() => setAlertStatus(false)} message="Lorem Ipsum is simply dummy text of the printing"/>
            <PAlert type="success" status={alertStatus1} close={() => setAlertStatus1(false)} message="Lorem Ipsum is simply dummy text of the printing"/>
            <PAlert type="warning" status={alertStatus2} close={() => setAlertStatus2(false)} message="Lorem Ipsum is simply dummy text of the printing"/>
            <PAlert type="danger" status={alertStatus3} close={() => setAlertStatus3(false)} message="Lorem Ipsum is simply dummy text of the printing"/>
        </PComponentShowcaseArea>
    );
}

export default TypesAlertSection;