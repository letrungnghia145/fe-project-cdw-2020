import React from "react";
import { connect } from "react-redux";
import { ForgotPasswordModal } from "../forgot-password-modal";
import { ModalHeader } from "../modal-header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginModal = (props) => {
    let handleSubmit = (values) => {
        console.log(values);
        props.onLogin(values);
        // document.getElementById("btn-reset").click();
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
                                                    <br />
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        Ok
                                                    </button>
                                                    <button
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

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (account) => {
            console.log(account);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
