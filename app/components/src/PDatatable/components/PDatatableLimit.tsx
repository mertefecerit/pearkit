import React, {useState} from 'react';
import {usePDatatable} from "../PDatatableProvider";
import {PDropdown} from "../../index";
import {DropdownItemType} from "../../PDropdown/type";

const PDatatableLimit:React.FC = () => {
    const {tableState, dispatch, color, config, limits} = usePDatatable();
    const [selectedLimit, setSelectedLimit] = useState<DropdownItemType>({
        label: tableState.limit.toString(),
        value: tableState.limit
    });
    const onLimitChangeHandler = (selectValue:DropdownItemType) => {
        setSelectedLimit(selectValue);
        if (typeof selectValue.value === 'number'){
            dispatch({type:'SET_LIMIT', value:selectValue.value})
            dispatch({type:'SET_SKIP', value:0})
        }
    }
    return (
        <div>
            <PDropdown
                color={color}
                cancelable={false}
                placeholder={"Limit"}
                onChange={onLimitChangeHandler}
                selected={selectedLimit}
                options={limits}
            />
        </div>
    );
};

export default PDatatableLimit;