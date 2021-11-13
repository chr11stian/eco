import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../pages/partial/Navbar"
import Footer from "../pages/partial/Footer"

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <body>
          <div id="hero" className="hero-section">
            <div
              id="hero-carousel"
              className="hero-carousel carousel carousel-fade slide"
              data-ride="carousel"
              data-interval="10000"
            >
              <div className="figure-holder-wrapper">
                <div className="container">
                  <div className="row justify-content-end"></div>
                </div>
              </div>

              <ol className="carousel-indicators">
                <li
                  className="active"
                  data-slide-to="0"
                  data-target="#hero-carousel"
                ></li>
                <li data-slide-to="1" data-target="#hero-carousel"></li>
                <li data-slide-to="2" data-target="#hero-carousel"></li>
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item item-1 active">
                  <div className="item-content container d-flex justify-content-center text-center">
                    <div className="item-content-inner">
                      <h4 className="heading">Stop and Smell The Roses!! </h4>
                      <button type="button" className="btn btn-outline-light">
                        See Travel Destination
                      </button>
                    </div>
                  </div>
                </div>

                <div className="carousel-item item-2">
                  <div className="item-content container d-flex justify-content-center text-center">
                    <div className="item-content-inner">
                      <h2 className="heading">
                        Be patient, have an open mind and{" "}
                      </h2>
                      <h2 className="heading">
                        you will the adventure of a life time
                      </h2>
                      <button type="button" className="btn btn-outline-light">
                        See Travel Destination
                      </button>
                    </div>
                  </div>
                </div>

                <div className="carousel-item item-3">
                  <div className="item-content container d-flex justify-content-center text-center">
                    <div className="item-content-inner">
                      <h2 className="heading">Do As Locals Do</h2>

                      <button type="button" className="btn btn-outline-light">
                        See Travel Destination
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="about" className="about-section">
            <div className="container text-center">
              <h2 className="section-title">WHY ECO PERÚ HIKES?</h2>
              <p className="intro">
                Ecoperuhikes is a local, sustainable and reliable Travel Company
                based 5 years ago in the headquarters of Inca Empire “Cusco” in
                order to give customers memorable experiences and raise
                awareness about Nature this is the main target of the company.
                As a local Company we are so mingled with native people with
                indegenious people and at the same time we work with them so,
                our guides, cooks, porters and so among others are from Cusco
                and are the core of the company. Eco Peru Hikes was founded via
                Armando Tinta Guevara a local and a renowned guide in Cusco with
                deep experience and knowledge on history, nature and in
                particular all about above Inca Culture. He has guided, led and
                escorted visitors throughout Cusco and in the rainforest as
                well.
              </p>
              <ul className="technologies list-inline">
                <li className="list-inline-item">
                  <img src="assets/images/negro.png" alt="Sass" />
                </li>
              </ul>
            </div>
          </div>

          <div id="features" className="features-section">
            <h2 className="section-title text-center">Top Tours</h2>
            <div className="row-fluid">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="tours-home">
                  <ul>
                    <li>
                      <div className="tour">
                        <Link to="/inca-trail">
                          <div className="image-tour">
                            <div
                              style={{
                                background:
                                  "url(assets/images/colca-canyon-tours.jpg)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                maxHeight: "423px",
                                width: "100%",
                                position: "absolute",
                              }}
                            ></div>
                          </div>
                        </Link>
                        <div className="tourdetails">
                          <div className="txt">
                            <span className="pacakagetitle">
                              {" "}
                              Short Inca Trail.{" "}
                            </span>

                            <p style={{ display: "none" }}>
                              Absolutely, the are many treks to Machupicchu but
                              definitely one of them is the most demanded by
                              hikers this is the remarkable 2 day Inca Trail.{" "}
                            </p>

                            <div className="daywithcountry daynight-Days">
                              <div className="days">
                                <span>2</span>
                                D/1N
                              </div>

                              <div className="country">
                                <span>Short Inca trail. </span>
                              </div>
                            </div>
                          </div>

                          <div className="pricedetail">
                            <span className="price">$550</span>

                            <span className="typ-proce">Typically $550</span>
                            <Link
                              to="/inca-trail"
                              className="viewdetail"
                              style={{
                                paddingTop: "10px",
                                paddingBottom: "10px",
                              }}
                            >
                              View Tour{" "}
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="tour">
                        <Link to="/cusco-city">
                          <div className="image-tour">
                            <div
                              style={{
                                background:
                                  "url(assets/images/sacsayhuaman-cusco.jpg)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                maxHeight: "423px",
                                width: "100%",
                                position: "absolute",
                              }}
                            ></div>
                          </div>
                        </Link>
                        <div className="tourdetails">
                          <div className="txt">
                            <span className="pacakagetitle">
                              {" "}
                              Cusco, City Tour{" "}
                            </span>

                            <p style={{ display: "none" }}>
                              One of the best day trips Cusco, City Tour. Visit
                              main square, cathedral of Cusco, puka pukara,
                              qenqo, Sacsayhuaman, koricancha and Tambomachay.
                              Travel Agency.
                            </p>

                            <div className="daywithcountry daynight-Days">
                              <div className="days">
                                <span>Half-Day</span>
                              </div>

                              <div className="country">
                                <span> Cusco City</span>
                              </div>
                            </div>
                          </div>

                          <div className="pricedetail">
                            <span className="price">$90</span>

                            <span
                              className="typ-proce"
                              style={{ display: "none" }}
                            >
                              Typically $120
                            </span>

                            <Link
                              to="/cusco-city"
                              className="viewdetail"
                              style={{
                                paddingTop: "10px",
                                paddingBottom: "10px",
                              }}
                            >
                              View Tour{" "}
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="tour">
                        <Link to="/museum-cusco">
                          <div className="image-tour">
                            <div
                              style={{
                                background:
                                  "url(assets/images/tour-maras-moray.jpg)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                maxHeight: "423px",
                                width: "100%",
                                position: "absolute",
                              }}
                            ></div>
                          </div>
                        </Link>
                        <div className="tourdetails">
                          <div className="txt">
                            <span className="pacakagetitle">
                              {" "}
                              Guided visit to the inca museum
                            </span>

                            <p style={{ display: "none" }}>
                              The Inca Museum is the most beautiful and the most
                              complete in comparison to other ones in Cusco
                              City.
                            </p>

                            <div className="daywithcountry daynight-Days">
                              <div className="days">
                                <span>2 Hours</span>
                              </div>

                              <div className="country">
                                <span>Inca museum</span>
                              </div>
                            </div>
                          </div>

                          <div className="pricedetail">
                            <span className="price">$20</span>

                            <span
                              className="typ-proce"
                              style={{ display: "none" }}
                            >
                              Typically $30
                            </span>

                            <Link
                              to="/museum-cusco"
                              className="viewdetail"
                              style={{
                                paddingTop: "10px",
                                paddingBottom: "10px",
                              }}
                            >
                              View Tour{" "}
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="tour">
                        <Link to="/humantay">
                          <div className="image-tour">
                            <div
                              style={{
                                background:
                                  "url(assets/images/sacred-valley-and-machu-picchu.jpg)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                maxHeight: "423px",
                                width: "100%",
                                position: "absolute",
                              }}
                            ></div>
                          </div>
                        </Link>
                        <div className="tourdetails">
                          <div className="txt">
                            <span className="pacakagetitle">
                              {" "}
                              Humantay Lake-Hike
                            </span>

                            <p style={{ display: "none" }}>
                            Humantay Lake is one of the nicest and unique lakes in Peru so visited due to its beauty and was taken as a holy mountain by the Incas, even know people still worship it. 
                            </p>

                            <div className="daywithcountry daynight-Days">
                              <div className="days">
                                <span>1</span>
                                Day
                              </div>

                              <div className="country">
                                <span>Humantay Lake</span>
                              </div>
                            </div>
                          </div>

                          <div className="pricedetail">
                            <span className="price">$140</span>

                            <span
                              className="typ-proce"
                              style={{ display: "none" }}
                            >
                              Typically $200
                            </span>

                            <Link
                              to="/humantay"
                              className="viewdetail"
                              style={{
                                paddingTop: "10px",
                                paddingBottom: "10px",
                              }}
                            >
                              View Tour{" "}
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="tour">
                        <Link to="/rainbow">
                          <div className="image-tour">
                            <div
                              style={{
                                background:
                                  "url(assets/images/southern-valley-maras-moray.jpg)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                maxHeight: "423px",
                                width: "100%",
                                position: "absolute",
                              }}
                            ></div>
                          </div>
                        </Link>
                        <div className="tourdetails">
                          <div className="txt">
                            <span className="pacakagetitle">
                              {" "}
                              vinicunca rainbow mountain
                            </span>

                            <p style={{ display: "none" }}>
                            Rainbow Mountain or known to plateau dwellers as Vinicunca is
                  an outstanding natural formation
                            </p>

                            <div className="daywithcountry daynight-Days">
                              <div className="days">
                                <span>1</span>
                                Day
                              </div>

                              <div className="country">
                                <span>rainbow mountain</span>
                              </div>
                            </div>
                          </div>

                          <div className="pricedetail">
                            <span className="price">$100</span>

                            <span
                              className="typ-proce"
                              style={{ display: "none" }}
                            >
                              Typically $120
                            </span>

                            <Link
                              to="/rainbow"
                              className="viewdetail"
                              style={{
                                paddingTop: "10px",
                                paddingBottom: "10px",
                              }}
                            >
                              View Tour{" "}
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="tour">
                        <Link to="/sacred-valley">
                          <div className="image-tour">
                            <div
                              style={{
                                background:
                                  "url(assets/images/southern-circuit-of-the-sacred-valley.jpg)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                maxHeight: "423px",
                                width: "100%",
                                position: "absolute",
                              }}
                            ></div>
                          </div>
                        </Link>
                        <div className="tourdetails">
                          <div className="txt">
                            <span className="pacakagetitle">
                              {" "}
                              Sacred Valley
                            </span>

                            <p style={{ display: "none" }}>
                              Known to people as Valle Sagrado de Los Incas or
                              Sacred Valley of the Incas,{" "}
                            </p>

                            <div className="daywithcountry daynight-Days">
                              <div className="days">
                                <span>Full </span>
                                Day
                              </div>

                              <div className="country">
                                <span>Pisaq, Ollantaytambo</span>
                              </div>
                            </div>
                          </div>

                          <div className="pricedetail">
                            <span className="price">$190</span>

                            <span
                              className="typ-proce"
                              style={{ display: "none" }}
                            >
                              Typically $220
                            </span>

                            <Link
                              to="/sacred-valley"
                              className="viewdetail"
                              style={{
                                paddingTop: "10px",
                                paddingBottom: "10px",
                              }}
                            >
                              View Tour{" "}
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="team-section" id="team">
            <div className="container text-center">
              <h2 className="section-title">Our Team</h2>
              <div className="story">
                <p>
                  Introduce your team here. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue
                </p>
              </div>
              <div className="members-wrapper row">
                <div className="item col-md-6 col-12">
                  <div className="item-inner">
                    <div className="profile mb-2">
                      <img
                        className="profile-image"
                        src="assets/images/team-1.png"
                        alt="Xiaoying Riley"
                      />
                    </div>

                    <div className="member-content">
                      <h3 className="member-name">Xiaoying Ry</h3>
                      <div className="member-title">Full-Guide</div>
                      <ul className="social list-inline">
                        <li className="list-inline-item">
                          <a className="twitter" href="https://twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="facebook"
                            href="https://www.facebook.com//"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="github" href="https://github.com/">
                            <i className="fab fa-github"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="dribbble" href="https://dribbble.com/">
                            <i className="fab fa-dribbble"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="medium" href="https://uk.linkedin.com/">
                            <i className="fab fa-medium-m"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="member-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item col-md-6 col-12">
                  <div className="item-inner">
                    <div className="profile mb-2">
                      <img
                        className="profile-image"
                        src="assets/images/team-2.png"
                        alt="Tom Najdek"
                      />
                    </div>

                    <div className="member-content">
                      <h3 className="member-name">Tomasz Mjdek</h3>
                      <div className="member-title">Full-Guides</div>
                      <ul className="social list-inline">
                        <li className="list-inline-item">
                          <a className="twitter" href="http://twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.doppnet.com/">
                            <i className="fas fa-globe"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="github" href="https://github.com/">
                            <i className="fab fa-github"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="member-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5">
                <a
                  className="btn btn-cta btn-primary"
                  href="https://google.com"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div id="testimonials" className="testimonials-section">
            <div className="container">
              <h2 className="section-title text-center">
                Many Happy Customers
              </h2>
              <div className="item mx-auto">
                <div className="profile-holder">
                  <img
                    className="profile-image"
                    src="assets/images/profile-1.png"
                    alt="profile"
                  />
                </div>
                <div className="quote-holder">
                  <blockquote className="quote">
                    <p>
                      Testimonial goes here Donec felis odio, sagittis eu cursus
                      ac, porttitor eu purus. In a bibendum dui. Nullam id est
                      sed felis rutrum tincidunt eu nec nisi morbi euismod
                      semper neque sed lobortis.
                    </p>
                    <div className="quote-source">
                      <span className="name">@JohnK,</span>
                      <span className="meta">San Francisco</span>
                    </div>
                  </blockquote>
                </div>
              </div>
              <div className="item item-reversed mx-auto">
                <div className="profile-holder">
                  <img
                    className="profile-image"
                    src="assets/images/profile-2.png"
                    alt="profile"
                  />
                </div>
                <div className="quote-holder">
                  <blockquote className="quote">
                    <p>
                      Testimonial goes here fermentum sed pharetra in, aliquet
                      sodales quam. Ut sed turpis quis orci viverra aliquet
                      interdum ut ipsum.{" "}
                    </p>
                    <div className="quote-source">
                      <span className="name">@LisaWhite,</span>
                      <span className="meta">London</span>
                    </div>
                  </blockquote>
                </div>
              </div>
              <div className="item mx-auto">
                <div className="profile-holder">
                  <img
                    className="profile-image"
                    src="assets/images/profile-3.png"
                    alt="profile"
                  />
                </div>
                <div className="quote-holder">
                  <blockquote className="quote">
                    <p>
                      Testimonial goes here vestibulum non hendrerit lorem,
                      luctus tincidunt erat. Sed pharetra aliquam posuere.
                      Pellentesque sollicitudin.
                    </p>
                    <div className="quote-source">
                      <span className="name">@MattH,</span>
                      <span className="meta">Berlin</span>
                    </div>
                  </blockquote>
                </div>
              </div>
              <div className="item item-reversed mx-auto">
                <div className="profile-holder">
                  <img
                    className="profile-image"
                    src="assets/images/profile-4.png"
                    alt="profile"
                  />
                </div>
                <div className="quote-holder">
                  <blockquote className="quote">
                    <p>
                      Testimonial goes here lorem ipsum dolor sit amet,
                      consectetuer adipiscing elit. Aenean commodo ligula eget
                      dolor. Aenean massa. Cum sociis natoque penatibus et
                      magnis
                    </p>
                    <div className="quote-source">
                      <span className="name">@RyanW,</span>
                      <span className="meta">Paris</span>
                    </div>
                  </blockquote>
                </div>
              </div>
              <div className="text-center mt-4">
                <a
                  className="btn btn-inverse btn-cta"
                  href="https://google.com"
                >
                  Get it now
                </a>
              </div>
            </div>
          </div>
          {/* <div id="contact" className="contact-section">
       <div className="container text-center">
           <h2 className="section-title">Contact Us</h2>
           <div className="contact-content">
               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
               
           </div>
           <a className="btn btn-cta btn-primary" href="https://google.com/">Get in Touch</a>
           
       </div>
   </div> */}
        </body>
        <Footer />
      </div>
    )
  }
}
export default Home
