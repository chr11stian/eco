import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

              <p className="mb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>
                <i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35{" "}
              </p>
              <p>
                <i className="fa fa-phone"></i> +91-9999878398{" "}
              </p>
              <p>
                <i className="fa fa fa-envelope"></i> info@ecoperutrips.com{" "}
              </p>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">
                Eco Perú Trips
              </h5>

              <ul className="footer_ul_amrc">
                <li>
                  <a href="#">About us </a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Newslatters</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Resource</h5>

              <ul className="footer_ul_amrc">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Photo gallery</a>
                </li>
                <li>
                  <a href="#">Term and Conditions</a>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

              <ul className="footer_ul2_amrc">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <ul className="foote_bottom_ul_amrc">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Eco Hikes</a>
            </li>
            <li>
              <a href="#">Cultural Tours</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Payment</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <p className="text-center">
            Copyright @2021 | Designed by <a href="#">Eco Perú Trips</a>
          </p>

          <ul className="social_footer_ul">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
