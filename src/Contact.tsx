import React, { Component } from "react";
import Navbar from "./pages/partial/Navbar";
import Footer from "./pages/partial/Footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-contact100">
          <div className="wrap-contact100">
            <form className="contact100-form validate-form">
              <span className="contact100-form-title">Contact Us</span>

              <div
                className="wrap-input100 validate-input bg1"
                data-validate="Please Type Your Name"
              >
                <span className="label-input100">FULL NAME *</span>
                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                ></input>
              </div>

              <div
                className="wrap-input100 validate-input bg1 rs1-wrap-input100"
                data-validate="Enter Your Email (e@a.x)"
              >
                <span className="label-input100">Email *</span>
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Enter Your Email "
                ></input>
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Phone</span>
                <input
                  className="input100"
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                ></input>
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Size Group</span>
                <input
                  className="input100"
                  type="text"
                  name="size"
                  placeholder="Enter the size of your group "
                ></input>
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">
                  What country are you from?
                </span>
                <input
                  className="input100"
                  type="text"
                  name="country"
                  placeholder="Country "
                ></input>
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">
                  Enter the tour date you are interested in
                </span>
                <input
                  className="input100"
                  type="text"
                  name="date"
                  placeholder="Enter the tour date "
                ></input>
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">
                  What Tour(s) are you interesting in
                </span>
                <input
                  className="input100"
                  type="text"
                  name="tours"
                  placeholder="Enter your tour"
                ></input>
              </div>

              <div
                className="wrap-input100 validate-input bg0 rs1-alert-validate"
                data-validate="Please Type Your Message"
              >
                <span className="label-input100">Message</span>
                <textarea
                  className="input100"
                  name="message"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <div className="container-contact100-form-btn">
                <button className="contact100-form-btn">
                  <span>
                    Submit
                    <i
                      className="fa fa-long-arrow-right m-l-7"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contact;
