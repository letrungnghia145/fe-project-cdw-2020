import React from "react";

export const Contact = () => {
    return (
        <React.Fragment>
            <hr className="offset-top" />
            <div className="white">
                <hr className="offset-sm" />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div id="Address">
                                <address>
                                    <label className="h3">
                                        Unistore Pro, Inc.
                                    </label>
                                    <br />
                                    1305 Market Street, Suite 800
                                    <br />
                                    San Francisco, CA 94102
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                </address>
                                <address>
                                    <strong>Support</strong>
                                    <br />
                                    <a href="mailto:#">sup@example.com</a>
                                    <br />
                                    <br />
                                    <strong>Partners</strong>
                                    <br />
                                    <a href="mailto:#">col@example.com</a>
                                </address>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div id="GoMap" />
                        </div>
                    </div>
                </div>
                <hr className="offset-lg" />
            </div>
            <div className="gray">
                <hr className="offset-lg" />
                <div className="container align-center">
                    <h1 className="upp"> Need our help? </h1>
                    <p> Please insert question to a form below. </p>
                    <hr className="offset-md" />
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-4">
                            <form
                                className="contact"
                                action="index.php"
                                method="post"
                            >
                                <textarea
                                    className="form-control"
                                    name="message"
                                    placeholder="Message"
                                    required
                                    rows={5}
                                    defaultValue={""}
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
                                <button
                                    type="submit"
                                    className="btn btn-primary justify"
                                >
                                    {" "}
                                    Send question{" "}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </React.Fragment>
    );
};
