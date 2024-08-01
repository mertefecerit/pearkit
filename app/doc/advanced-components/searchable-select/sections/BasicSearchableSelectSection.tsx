"use client";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import React, {useState} from "react";
import {PSearchableSelect} from "@/app/components/src";
import axios from "axios";
import {PTag} from "@/app/components/src";

const BasicSearchableSelectSection: React.FC = () => {
    const codeBlock = `
    const [selected, setSelected] = useState({});
    const [products, setProducts] = useState([]);
    const [isPending, setIsPending] = useState(false);

    const loaderHandler = async (searchTerm) => {
        setIsPending(true);
        let url = 'https://dummyjson.com/products';
        if (searchTerm) {
            url += \`/search?q=\${searchTerm}\`
        }
        const response = await axios.get(url);
        setProducts(response.data.products);
        setIsPending(false);
    }
    
    <PSearchableSelect
        selected={selected}
        selector={"title"}
        onChange={setSelected}
        placeholder={"Search & Select Product"}
        loader={loaderHandler}
        values={products}
        isPending={isPending}
    />
`;



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
            anchor="basic"
            title="Basic"
            desc={<>Here is an example of how it is done. Here, we send a request to https://dummyjson.com/products, update our state named <PTag label="products"/> and send it to the component. Here, the <PTag label={"loader"}/> prop is triggered when the component <PTag label={"status"}/> is true or the <PTag label={"search status"}/> is true.</>}
            codeBlock={codeBlock}
        >
            <PSearchableSelect
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

export default BasicSearchableSelectSection;