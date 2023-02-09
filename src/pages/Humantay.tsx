import React, { Component } from "react";
import Navbar from "../pages/partial/Navbar";
import Footer from "../pages/partial/Footer";

class Tour extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img
          src="assets/images/cusco-panoramico.jpg"
          className="img-fluid"
          alt="Responsive image"
          style={{ padding: "0px 0px 50px 0px" }}
        />
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div id="column_left" className="col-xs-12 col-lg-3">
                <div className="trip-sticky-sidebar-inner">
                  <div className="tour-price-block">
                    <div className="tour-price-inner">
                      <div className="text-block-40">$140 USD</div>
                    </div>
                    <div className="tour-price-info">
                      <strong>Group Service</strong>
                      <br></br>(from 1 to 5 peple for the total group not per
                      person)
                    </div>
                    <div className="tour-price-inner">
                      <div className="text-block-40">$200 USD</div>
                    </div>
                    <div className="tour-price-info">
                      <strong>Private Service</strong>
                      <br></br> (from 7 to 12 people for the total group not per
                      person)
                    </div>

                    <div className="trip-booking-button">
                      <div className="trip-booking-button-text">
                        Request Booking
                      </div>
                    </div>
                  </div>

                  <div className="tour-quick-stats-block">
                    <h3 className="quick-stats-heading">Quick Stats</h3>
                    <div className="stat-item">
                      <h4 className="stat-heading">Trip Type</h4>
                      <div className="stat-text">Hiking / Trekking</div>
                    </div>
                    <div className="stat-item">
                      <h4 className="stat-heading">Season</h4>
                      <div className="stat-text">All the year around</div>
                    </div>

                    <div className="stat-item">
                      <h4 className="stat-heading">Duration</h4>
                      <div className="stat-text">1 day</div>
                    </div>
                    <div className="stat-item">
                      <h4 className="stat-heading">Difficulty</h4>
                      <div className="stat-text">Challenging/difficult </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-12 col-md-12 col-lg-8 conte-tours"
                style={{ textAlign: "justify" }}
              >
                <div className="breadcrumbs"></div>
                <h1>HUMANTAY LAKE-HIKE 1DAY</h1>
                <p>
                  Humantay Lake is one of the nicest and unique lakes in Peru so
                  visited due to its beauty and was taken as a holy mountain by
                  the Incas, even know people still worship it.
                </p>
                <h3>
                  <strong>
                    P.S. Sometimes people have to stop and smell the roses.
                  </strong>
                </h3>
                {/* <ul>
                  <p>
                    <strong>DETAILED ITENERARY</strong>
                  </p>
                  <li>
                    {" "}
                    <strong>The Cathedral of Cusco in (Cusco) </strong> the
                    second largest in Latin America fulls of native oil
                    paintings painted via indigenous people during the Colonial
                    time.
                  </li>
                  <li>
                    {" "}
                    <strong>Saint Dominic Monastery – Koricancha </strong> in
                    (Cusco) which is known us the Sun temple so worshipped by
                    the Incas at that time
                  </li>
                  <li>
                    {" "}
                    <strong>Sacsayhuman </strong> (around Cusco) a huge
                    megalithic inca construction its arquitecture consits of
                    masive stones that can weigh 90 tons roughly.{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Qenqo </strong> (around Cusco) a funeral chamber
                    where the Incas mummyfied corpses with the purpose to
                    preserve them
                  </li>
                  <li>
                    {" "}
                    <strong>Puca Puca</strong> (around Cusco) a circular tower
                    that served as a look out to track down enemies
                  </li>
                  <li>
                    {" "}
                    <strong>Tambomachay</strong> (around Cusco) a resting place
                    and a temple of the water{" "}
                  </li>
                </ul> */}
                <h4>Details Itenerary</h4>
                <div id="accordion" className="myaccordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          HAMUNTAY LAKE
                          <span className="fa-stack fa-sm">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <h6>
                          Our day begins at 4:00 am when your guide will collect
                          you at the hotel inside Cusco then drive for about 2
                          hours to Mollepata town located above the Apurimac
                          river. In the town we will have a delicious and hearty
                          breakfast at one of the local houses after having
                          breakfast we get back on the road for 1 hour roughly
                          to Soraypampa which is the trailhead 3,800
                          meters/12,460 feet While driving the last part of the
                          road we will be able to observe the gorgeous Salkantay
                          snowcapped mountain, Humantay snowcapped mountain and
                          plantations of corns, beans, quinoa and so on belong
                          to local families. As soon as, we are at the beginning
                          of the hike “Soraypampa” we will notice we are
                          surrounded by stunning mountains and valleys, there we
                          will start our ascent, the uphill hike takes 1½ to 2
                          hours approximately accompanied and escorted by your
                          guide at all times, along the way wildlife will be
                          pointed out via your guide stopping for a while to
                          take some beautiful shoots or explaining to you on it
                          or simply taking a rest for a second. At the top You
                          will get stumped when you see the Humantay lake has an
                          impressive turquoise color and is at the feet of a
                          huge snowcapped mountain with the same name spotted in
                          the background. There will be spending enough time to
                          take some pictures, hang out, eat something, offer
                          something to the Apus after that, we will start going
                          down to Soraypampa around 1½ then 1 hour to Mollepata
                          to have lunch finally driving for 2 hours to Cusco,
                          reaching there around 6:00 pm.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <h4>Trip Highlights</h4>

                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a data-toggle="tab" href="#home">
                        <strong>Included </strong>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu1">
                        <strong>Not Included</strong>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu2">
                        <strong>What to bring</strong>
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                      <ul role="list">
                        <li>
                          Professional trekking guide fluent in English and
                          Spanish.
                        </li>
                        <li>
                          Breakfast and lunch in a local house in Mollepata Town
                        </li>
                        <li>
                          Round trip transportation in a private Minivan (pick
                          up and drop off from the hotel)
                        </li>
                        <li>
                          {" "}
                          Blanket to stay warm on the bus during the trip.{" "}
                        </li>
                        <li>First aid kit and tank of oxygen.</li>{" "}
                        <li>Snacks for the hike. </li>
                        <li>Entrance fee to Rainbow Mountain.</li>
                        <li>Lunch</li>
                      </ul>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                      <ul>
                        <li>Walking poles you can rent them from us</li>
                        <li>
                          Personal riding (horse driver) can be rented at the
                          starting point.
                        </li>
                        <li>Travel/Health/Emergency Insurance.</li>
                        <li>Gratuity for staff.</li>
                      </ul>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                      <ul>
                        <li>
                          Warm clothes (thermal pants as a first layer, woolen
                          hat, gloves, fleece, woolen socks, scarf).
                        </li>
                        <li>Comfortable hiking pants. </li>
                        <li>1 Liter and half of water at least per person </li>
                        <li>Personal snacks (optional).</li>
                        <li>Water proof trekking boots</li>
                        <li>Day pack with rain cover</li>
                        <li>Rain gear or rain poncho</li>
                        <li>Brimmed hat</li>
                        <li>Walking poles </li>
                        <li>Sun cream and sun glasses </li>
                        <li>Camera with charged batteries</li>
                        <li>Personal medical kit/personal items.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Tour;
