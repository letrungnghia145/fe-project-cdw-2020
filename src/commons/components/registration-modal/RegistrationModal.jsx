import React from "react";
import { ModalHeader } from "../modal-header";

export const RegistrationModal = (props) => {
    return (
        <div
            className="modal fade"
            id="Modal-Registration"
            tabIndex={-1}
            role="dialog"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <ModalHeader callback={props.callback}/>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6 col-sm-offset-3">
                                    <h2 className="modal-title text-center">
                                        Registration
                                    </h2>
                                    <br />
                                    <form
                                        className="join"
                                        action="index.php"
                                        method="post"
                                    >
                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue
                                            placeholder="Name"
                                            required
                                            className="form-control"
                                        />
                                        <br />
                                        <input
                                            type="email"
                                            name="email"
                                            defaultValue
                                            placeholder="E-mail"
                                            required
                                            className="form-control"
                                        />
                                        <br />
                                        <input
                                            type="password"
                                            name="password"
                                            defaultValue
                                            placeholder="Password"
                                            required
                                            className="form-control"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            name="confirm"
                                            defaultValue
                                            placeholder="Password again"
                                            required
                                            className="form-control"
                                        />
                                        <br />
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-sm"
                                        >
                                            Ok
                                        </button>{" "}
                                        &nbsp;&nbsp;
                                        <a href="#">Terms &gt;</a>
                                        <br />
                                        <br />
                                        <p>
                                            By creating an account you will be
                                            able to shop faster, be up to date
                                            on an order's status, and keep track
                                            of the orders you have previously
                                            made.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer"></div>
                </div>
            </div>
        </div>
    );
};
