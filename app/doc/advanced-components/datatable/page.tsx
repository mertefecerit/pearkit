"use client";

import React, {useState} from 'react';
import PDatatable from "@/app/components/src/PDatatable";
import axios from "axios";

interface DataStackTypes {
    products: {}[],
    total: number;
}

const DatatablePage = () => {
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
        <PDatatable config={config}/>
    );
};

export default DatatablePage;