"use client";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import React, {useState} from "react";
import {PSearchableSelect} from "@/app/components/src";
import axios from "axios";
import {PTag} from "@/app/components/src";

const FocusOpenSearchableSelectSection: React.FC = () => {
    const codeBlock = `<PSearchableSelect focusOpen />`;

    const [selected, setSelected] = useState<{title?:string}>({});
    const [products, setProducts] = useState<{}[]>([]);
    const [isPending, setIsPending] = useState(false);

    const loaderHandler = async (searchTerm?: string) => {
        setIsPending(true);
        let url = 'https://dummyjson.com/products';
        if (searchTerm) {
            url += `/search?q=${searchTerm}`
        }
        const response = await axios.get(url);
        setProducts(response.data.products);
        setIsPending(false);
    }

    return (
        <PComponentShowcaseArea
            anchor="focus-open"
            title="Focus Open"
            desc={<>Tab key is focus the element and open automatically and focus search again.</>}
            codeBlock={codeBlock}
        >
            <PSearchableSelect
                focusOpen
                selected={selected}
                selector={"title"}
                onChange={setSelected}
                placeholder={"Search & Select Product"}
                loader={loaderHandler}
                values={products}
                isPending={isPending}
            />
        </PComponentShowcaseArea>
    );
}

export default FocusOpenSearchableSelectSection;