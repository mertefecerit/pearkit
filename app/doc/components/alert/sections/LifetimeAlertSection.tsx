"use client";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PAlert, PButton, PTag} from "@/app/components/src";
import React, {useEffect, useState} from "react";
import {animate, useMotionValue, useTransform, motion} from "framer-motion";

function LifetimeAlertSection() {
    const [alertStatus, setAlertStatus] = useState(false);
    const count = useMotionValue(3000);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        if (!alertStatus) {
            count.set(3000)
            return;
        }
        count.set(3000)
        const animation = animate(count, 0, { duration: 3 });

        return animation.stop;
    }, [count, alertStatus]);


    const codeBlock = `<PAlert lifetime={3000} status={alertStatus} close={() => setAlertStatus(false)} />`;
    return (
        <PComponentShowcaseArea
            anchor="lifetime"
            title="Lifetime"
            desc={<>Here, we can enable the alert component to be closed automatically with the <PTag label={"lifetime"}/> feature. However, since the state is outside, it still needs the <PTag label="close"/> and <PTag label={"status"}/> props. Because the <PTag label="lifetime"/> feature triggers the <PTag label={"close"}/> feature of the component. It also controls the <PTag label={"closable"}/> feature.</>}
            codeBlock={codeBlock}
        >
            <PButton disabled={alertStatus} label={<div className="flex gap-2 items-center">
                <span>Close Time</span>
                <motion.span>{rounded}</motion.span>
            </div>} onClick={() => setAlertStatus(true)}/>

            <PAlert
                lifetime={3000}
                status={alertStatus}
                close={() => setAlertStatus(false)}
                message="Lorem Ipsum is simply dummy text of the printing"
            />
        </PComponentShowcaseArea>
    );
}

export default LifetimeAlertSection;