import React from "react";
import { ForgotPasswordModal } from "../forgot-password-modal";
import { ModalHeader } from "../modal-header";

export const LoginModal = (props) => {
    return (
        <div
            className="modal fade"
            id="Modal-SignIn"
            tabIndex={-1}
            role="dialog"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <ModalHeader callback={props.callback} />
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6 col-sm-offset-3">
                                    <h2 className="modal-title text-center">
                                        Sign In
                                    </h2>
                                    <br />
                                    <form
                                        className="signin"
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
                                        <input
                                            type="password"
                                            name="password"
                                            defaultValue
                                            placeholder="Password"
                                            required
                                            className="form-control"
                                        />
                                        <br />
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Ok
                                        </button>
                                        <a
                                            href="#forgin-password"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                props.callback(
                                                    <ForgotPasswordModal
                                                        callback={
                                                            props.callback
                                                        }
                                                    />
                                                );
                                            }}
                                        >
                                            Password recovery &gt;
                                        </a>
                                    </form>
                                    <br />
                                    <div className="social-login">
                                        <div className="or">
                                            <p>OR</p>
                                        </div>
                                        <a href="#">
                                            <i
                                                className="icon"
                                                data-src="assets/img/icons/facebook.svg"
                                            />
                                        </a>
                                        <p>via</p>
                                        <a href="#">
                                            <i
                                                className="icon"
                                                data-src="assets/img/icons/google-plus.svg"
                                            />
                                        </a>
                                    </div>
                                    <br />
                                    <br />
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
