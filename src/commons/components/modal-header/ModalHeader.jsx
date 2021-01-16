import React from "react";

export const ModalHeader = (props) => {
    return (
        <div className="modal-header">
            <button
                type="button"
                className="close"
                onClick={() => props.callback(null)}
            >
                <span aria-hidden="true">
                    <i className="fa fa-window-close" aria-hidden="true"></i>
                </span>
            </button>
        </div>
    );
};
