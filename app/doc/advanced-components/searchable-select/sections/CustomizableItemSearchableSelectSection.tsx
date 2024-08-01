"use client";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import React, {useState} from "react";
import {PSearchableSelect} from "@/app/components/src";
import axios from "axios";
import {PTag} from "@/app/components/src";

const CustomizableItemSearchableSelectSection: React.FC = () => {
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
    
    const CustomItemComponent = (props) => {
        return (
            <div className="flex gap-2 items-center">
                <img src={props.images[0]} alt={props.title} className="size-6 w-auto"/>
                <span>{props.title}</span>
            </div>
        )
    }
    
    <PSearchableSelect
        selected={selected}
        selector={"title"}
        onChange={setSelected}
        placeholder={"Search & Select Product"}
        loader={loaderHandler}
        values={products}
        isPending={isPending}
        itemComponent={<CustomItemComponent />}
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

    const CustomItemComponent = (props:any) => {
        return (
            <div className="flex gap-2 items-center">
                <img src={props.images[0]} alt={props.title} className="size-6 w-auto"/>
                <span>{props.title}</span>
            </div>
        )
    }

    return (
        <PComponentShowcaseArea
            anchor="customizable-item-component"
            title="Customizable Item Component"
            desc={<>Here, when you write a separate <PTag label={"component"}/> and assign it to the <PTag label={"itemComponent"}/> property as a prop, you change the items in the lists and the selected item in the selection section. It was developed to give you a customizable structure.</>}
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
                itemComponent={<CustomItemComponent />}
            />
        </PComponentShowcaseArea>
    );
}

export default CustomizableItemSearchableSelectSection;