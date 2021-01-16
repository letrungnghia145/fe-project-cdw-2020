import React from "react";
import { ModalHeader } from "../modal-header";

export const EvaluateModal = (props) => {
    return (
        <div
            className="modal fade"
            id="Modal-Comment"
            tabIndex={-1}
            role="dialog"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <ModalHeader callback={props.callback} />
                    <div className="modal-body">
                        <div className="container-fluid">
                            <form
                                className="join"
                                action="index.php"
                                method="post"
                            >
                                <div className="row">
                                    <div className="col-sm-12">
                                        <textarea
                                            name="comment"
                                            placeholder="Type comment here"
                                            required
                                            className="form-control"
                                            rows={5}
                                        />
                                        <br />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter name"
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Enter phone"
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="align-center">
                                            <br />
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-sm"
                                                style={{marginRight: "10px"}}
                                            >
                                                <i className="fa fa-paper-plane" aria-hidden="true"/>
                                                {"  "}Send
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm"
                                                onClick={()=>{props.callback(null)}}
                                            >
                                                <i className="fa fa-share" aria-hidden="true"/>
                                                {"  "}No, thanks
                                            </button>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
