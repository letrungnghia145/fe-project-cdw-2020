import React from "react";

export const SubImage = (props) => {
    const { link, marker, isActive } = props;
    return (
        <li
            data-marker={marker}
            className={isActive ? "active" : null}
            style={{
                background: `url(${link}) center center / cover no-repeat scroll`,
                margin: "0 5px",
                border: "1px solid rgba(0, 0, 0, 0.4)"
            }}
        />
    );
};
