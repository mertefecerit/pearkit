import React, {useEffect, useRef, useState} from 'react';
import {PInput} from "../../index";
import {SearchIcon} from "../../components/icons";
import {usePDatatable} from "../PDatatableProvider";

const PDatatableSearch:React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {dispatch,color} = usePDatatable();
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        const timer = setTimeout(() => {
            // every search, reset the skip don't forget!
            dispatch({type:'SET_SEARCH',value:searchTerm})
            dispatch({type:'SET_SKIP',value:0})
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    return (
        <div>
            <PInput
                color={color}
                placeholder={"Search"}
                icon={<SearchIcon/>}
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
        </div>
    );
};

export default PDatatableSearch;