import React from "react";

const BuiInputErrors:React.FC<{ errors: string[] }> = ({errors}) => {
    return (
        errors && errors.length > 0 &&
        <ul>
            {errors.map((error, index) => <li key={index}>{error}</li>)}
        </ul>
    )
}

export default BuiInputErrors;