import React from "react";
import { LoginModal } from "../login-modal";
import { ModalHeader } from "../modal-header";
import { Formik, Form, Field } from "formik";
import { accessToken } from "../../../config";
import { useDispatch } from "react-redux";
import { actionRegistryConfirmRequest } from "../../../redux/actions/user";

export const ConfirmModal = (props) => {
    const onConfirm = useDispatch();

    let handleSubmit = (values) => {
        let token = localStorage.getItem(accessToken);
        let validationCode = values.validationCode;
        let data = { validationCode: validationCode, token: token };
        onConfirm(actionRegistryConfirmRequest(data));
        props.callback(<LoginModal callback={props.callback} />);
        document.getElementById("btn-reset").click();
    };

    let renderForm = () => {
        return (
            <Formik
                initialValues={{ validationCode: "" }}
                onSubmit={handleSubmit}
                render={(formikProps) => (
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
                                                <Form className="join">
                                                    <Field
                                                        onChange={
                                                            formikProps.handleChange
                                                        }
                                                        type="text"
                                                        name="validationCode"
                                                        defaultValue
                                                        placeholder="Code"
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
                                                    <button
                                                        style={{
                                                            display: "none",
                                                        }}
                                                        type="reset"
                                                        id="btn-reset"
                                                        className="btn d-none"
                                                    >
                                                        Reset
                                                    </button>
                                                    <a
                                                        id="btn-login"
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
                                                </Form>
                                            </div>
                                            <div className="col-sm-6">
                                                <br />
                                                <br />
                                                <p>
                                                    Enter the e-mail address
                                                    associated with your
                                                    account. Click submit to
                                                    have your password e-mailed
                                                    to you.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer"></div>
                            </div>
                        </div>
                    </div>
                )}
            />
        );
    };

    return renderForm();
};
