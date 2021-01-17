import React from "react";
import { ModalHeader } from "../modal-header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ConfirmModal } from "../confirm-modal";
import { useDispatch } from "react-redux";
import { actionRegisterRequest, actionRegistryConfirm } from "../../../redux/actions/user";
export const RegistrationModal = (props) => {
    const onRegister = useDispatch()
    let handleSubmit = (values) => {
        onRegister(actionRegisterRequest(values))
        document.getElementById("btn-confirm").click();
        document.getElementById("btn-reset").click();
    };

    let renderForm = () => {
        return (
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    address: "",
                    phone: "",
                    password: "",
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required("Vui lòng nhập tài khoản!"),
                    email: Yup.string()
                        .required("Vui lòng nhập email!")
                        .email("Email không hợp lệ!"),
                    address: Yup.string().required("Vui lòng nhập địa chỉ!"),
                    phone: Yup.string()
                        .length(10, "Vui lòng nhập đúng số điện thoại!")
                        .required("Vui lòng nhập số điện thoại!"),
                    password: Yup.string()
                        .min(8, "Vui lòng nhập lớn hơn 8 kí tự!")
                        .required("Vui lòng nhập mật khẩu!"),
                })}
                onSubmit={handleSubmit}
                render={(formikProps) => (
                    <div
                        className="modal fade"
                        id="Modal-Registration"
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
                                                    Registration
                                                </h2>
                                                <br />
                                                <Form className="join">
                                                    <Field
                                                        onChange={
                                                            formikProps.handleChange
                                                        }
                                                        type="text"
                                                        name="name"
                                                        placeholder="Name"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage name="name" />
                                                    <br />
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
                                                        type="text"
                                                        name="address"
                                                        placeholder="Address"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage name="address" />
                                                    <br />
                                                    <Field
                                                        onChange={
                                                            formikProps.handleChange
                                                        }
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Phone number"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage name="phone" />
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
                                                        className="btn btn-primary btn-sm"
                                                    >
                                                        Ok
                                                    </button>{" "}
                                                    <button
                                                        style={{
                                                            display: "none",
                                                        }}
                                                        type="reset"
                                                        id="btn-reset"
                                                        className="btn btn-primary btn-sm"
                                                    >
                                                        Reset
                                                    </button>
                                                    &nbsp;&nbsp;
                                                    <a href="#">Terms &gt;</a>
                                                    <a
                                                        id="btn-confirm"
                                                        href="#forgin-password"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            props.callback(
                                                                <ConfirmModal
                                                                    callback={
                                                                        props.callback
                                                                    }
                                                                />
                                                            );
                                                        }}
                                                    >
                                                        Confirm &gt;
                                                    </a>
                                                    <br />
                                                    <br />
                                                    <p>
                                                        By creating an account
                                                        you will be able to shop
                                                        faster, be up to date on
                                                        an order's status, and
                                                        keep track of the orders
                                                        you have previously
                                                        made.
                                                    </p>
                                                </Form>
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
