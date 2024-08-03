import React, {useEffect, useState} from 'react';
import {PInput} from "../../index";
import {SearchIcon} from "../../components/icons";
import {usePDatatable} from "../PDatatableProvider";

const PDatatableSearch:React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {tableState, setTableState, config, limits} = usePDatatable();

    useEffect(() => {
        const timer = setTimeout(() => {
            // every search reset skip don't forget
            setTableState({...tableState, search: searchTerm, skip:0})
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);
    return (
        <div>
            <PInput
                placeholder={"Search"}
                icon={<SearchIcon/>}
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
        </div>
    );
};

export default PDatatableSearch;