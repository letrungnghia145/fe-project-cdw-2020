import React, { useState } from "react";
import { EvaluateModal } from "../../../commons";
import { EvaluateRecord } from "./evaluate-record";

export const EvaluateSection = (props) => {
    const { evaluates } = props;
    const [evaluateModal, showEvaluateModal] = useState(null);
    return (
        <div className="col-sm-5 no-padding-xs">
            {evaluateModal}
            <div className="comments white">
                <h2 className="h3">Evaluates of product? (#4)</h2>
                <br />
                <div className="wrapper">
                    <div className="content">
                        {evaluates.map((evaluate, index) => {
                            return (
                                <EvaluateRecord
                                    evaluate={evaluate}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
                <hr className="offset-lg" />
                <hr className="offset-md" />
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                        showEvaluateModal(
                            <EvaluateModal callback={showEvaluateModal} />
                        );
                    }}
                >
                    <i className="fa fa-comment" aria-hidden="true"></i> Add
                    comment
                </button>
                <hr className="offset-md visible-xs" />
            </div>
        </div>
    );
};
