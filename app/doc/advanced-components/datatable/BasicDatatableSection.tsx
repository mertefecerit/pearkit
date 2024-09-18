"use client";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PDatatable} from "@/app/components/src";
import React, {useState} from "react";
import axios from "axios";

function BasicDatatableSection() {

    const codeBlock = `const [dataStack, setDataStack] = useState({
        products: [],
        total: 0
    });

const [isPending, setIsPending] = useState(false);
    
const dummyLoader = async (synchronizedTableState: string) => {
    setIsPending(true);
    const endpoint = 'https://dummyjson.com/products'
    const response = await axios.get(\`\${endpoint}\${synchronizedTableState}\`);
    setDataStack(response.data);
    setIsPending(false);
}
    
const config = {
    columns: [
        {name: 'Name', field: 'title'},
        {name: 'Price', field: 'price'},
        {name: 'Stock', field: 'stock'},
        {name: 'SKU', field: 'sku'}
    ],
    loader: dummyLoader,
    stack: dataStack.products,
    limit: 10,
    total: dataStack.total,
    isPending:isPending
}
    
<PDatatable config={config}/>`;

    interface DataStackTypes {
        products: {}[],
        total: number;
    }

    const [dataStack, setDataStack] = useState<DataStackTypes>({
        products: [],
        total: 0,
    });
    const [isPending, setIsPending] = useState(false);

    const dummyLoader = async (synchronizedTableState: string) => {
        setIsPending(true);
        const endpoint = 'https://dummyjson.com/products'
        const response = await axios.get(`${endpoint}${synchronizedTableState}`);
        setDataStack(response.data);
        setIsPending(false);
    }

    const config = {
        columns: [
            {name: 'Name', field: 'title'},
            {name: 'Price', field: 'price'},
            {name: 'Stock', field: 'stock'},
            {name: 'SKU', field: 'sku'},
        ],
        loader: dummyLoader,
        stack: dataStack.products,
        limit: 10,
        total: dataStack.total,
        isPending:isPending,
    }

    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Here is an datatable component that you can use in your projects.</>}
            codeBlock={codeBlock}
        >
            <PDatatable config={config}/>
        </PComponentShowcaseArea>
    );
}

export default BasicDatatableSection;