import React from "react";
import { ForgotPasswordModal } from "../forgot-password-modal";
import { ModalHeader } from "../modal-header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { actionLoginRequest } from "../../../redux/actions/user";
import { useDispatch } from "react-redux";

export const LoginModal = (props) => {
    const onLogin = useDispatch();

    let handleSubmit = (values) => {
        onLogin(actionLoginRequest(values));
        document.getElementById("btn-reset").click();
        props.callback();
    };

    let renderForm = () => {
        return (
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required("Không được để trống!"),
                })}
                onSubmit={handleSubmit}
                render={(formikProps) => (
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
                                                <Form className="signin">
                                                    <Field
                                                        onChange={
                                                            formikProps.handleChange
                                                        }
                                                        type="email"
                                                        name="email"
                                                        placeholder="E-mail"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage name="email" />
                                                    <br />
                                                    <Field
                                                        onChange={
                                                            formikProps.handleChange
                                                        }
                                                        type="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage name="password" />
                                                    <br />
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        Ok
                                                    </button>
                                                    <button
                                                        style={{
                                                            display: "none",
                                                        }}
                                                        type="reset"
                                                        id="btn-reset"
                                                        className="btn btn-primary btn-sm d-none"
                                                    >
                                                        Reset
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
                                                </Form>
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
                )}
            />
        );
    };

    return renderForm();
};
