import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="app d-flex flex-column">
        <div className="content">
          <div className="row g-0">
            <div className="col-md-4 bg-grey">
              <div className="p-5">
                <div className="mb-70">
                  <img src="assets/img/logo.svg" alt="logo" />
                </div>
                <div className="mb-150">
                  <h1 className="m-0">Become a modern arbitrator, Now.</h1>
                </div>
                <div className="text-center">
                  <img src="assets/img/signup-img.svg" alt="Signup Image" />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-5 bg-white">
                <p className="mb-5 text-md-end">
                  Already a member?{" "}
                  <a href="javascript:;" className="text-primary">
                    {" "}
                    Sign In{" "}
                  </a>
                </p>
                <div className="signup-container">
                  <h3>Sign Up</h3>
                  <p className="text-muted mb-4">Let’s get started with Jur </p>
                  <div className="form-group">
                    <label>
                      Full Name<em>*</em>
                    </label>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          value="Rawkin"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control form-control-lg mt-3 mt-md-0"
                          value="Hernanz"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>
                      Email Address<em>*</em>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      value="rawkin.h99@gmail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Password<em>*</em>
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      value="abcde"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Verify Password<em>*</em>
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      value="abcde"
                    />
                  </div>
                  <div className="custom-control custom-checkbox mb-4">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="stateCheck1"
                    />
                    <label className="custom-control-label" for="stateCheck1">
                      I agree to the <a href="javascript:;"> terms </a> and{" "}
                      <a href="javascript:;"> conditions </a>
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary-theme btn-lg"
                  >
                    Sign Up
                  </button>
                  <p className="mt-90 text-muted mb-0">
                    Copyright ©2021 Product by Jur Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
