import React, { useState } from "react";

const MySelect = ({ defaultValue, options, onChange }) => {
    const [selectedSort, setselectedSort] = useState("");

    return (
        <select
            value={selectedSort}
            onChange={(event) => {
                onChange(event.target.value);
                setselectedSort(event.target.value);
            }}
        >
            <option value="">{defaultValue}</option>
            {options.map((o) => {
                return (
                    <option key={o.name} value={o.value}>
                        {o.name}
                    </option>
                );
            })}
        </select>
    );
};
export default MySelect;
