import React from "react";

export const DetailsListSection = (props) => {
    const { properties } = props;
    return (
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
            {properties.map((prop, index) => {
                return (
                    <li key={index}>
                        <span style={{fontSize: "25px", fontWeight: "400"}}>{prop.name}: </span>
                        {prop.value}
                    </li>
                );
            })}
        </ul>
    );
};
