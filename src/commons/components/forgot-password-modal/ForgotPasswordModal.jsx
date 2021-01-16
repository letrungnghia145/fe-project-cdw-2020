import React from "react";
import { LoginModal } from "../login-modal";
import { ModalHeader } from "../modal-header";

export const ForgotPasswordModal = (props) => {
    return (
        <div
            className="modal fade"
            id="Modal-ForgotPassword"
            tabIndex={-1}
            role="dialog"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <ModalHeader callback={props.callback} />
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4 className="modal-title">
                                        Forgot Your Password?
                                    </h4>
                                    <br />
                                    <form
                                        className="join"
                                        action="index.php"
                                        method="post"
                                    >
                                        <input
                                            type="email"
                                            name="email"
                                            defaultValue
                                            placeholder="E-mail"
                                            required
                                            className="form-control"
                                        />
                                        <br />
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-sm"
                                        >
                                            Continue
                                        </button>
                                        <a
                                            href="#Sign-In"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                props.callback(
                                                    <LoginModal
                                                        callback={
                                                            props.callback
                                                        }
                                                    />
                                                );
                                            }}
                                        >
                                            Back &gt;
                                        </a>
                                    </form>
                                </div>
                                <div className="col-sm-6">
                                    <br />
                                    <br />
                                    <p>
                                        Enter the e-mail address associated with
                                        your account. Click submit to have your
                                        password e-mailed to you.
                                    </p>
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
