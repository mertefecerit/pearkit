import React, {useState} from 'react';
import {usePDatatable} from "../PDatatableProvider";

const PDatatableLimit:React.FC = () => {
    const {tableState, setTableState, config, limits} = usePDatatable();
    const [selectedLimit, setSelectedLimit] = useState<number>(tableState.limit);
    const onLimitChangeHandler = (e:any) => {
        const newLimit = parseInt(e.target.value);
        setSelectedLimit(newLimit);
        setTableState({...tableState, limit:newLimit, skip:0})
    }
    return (
        <div>
            <select onChange={onLimitChangeHandler} value={selectedLimit}>
                {
                    limits.map((limit, i) => <option key={i} value={limit}>{limit}</option>)
                }
            </select>
        </div>
    );
};

export default PDatatableLimit;