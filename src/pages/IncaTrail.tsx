import React, { Component } from "react"
import Navbar from "../pages/partial/Navbar"
import Footer from "../pages/partial/Footer"

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
                      <div className="text-block-40">$490 USD</div>
                    </div>
                    <div className="tour-price-info">
                      <strong>Group Service</strong>
                      <br></br>(from 1 to 5 peple for the total group not per
                      person)
                    </div>
                    <div className="tour-price-inner">
                      <div className="text-block-40">$630 USD</div>
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
                      <div className="stat-text">Sightseeing</div>
                    </div>
                    <div className="stat-item">
                      <h4 className="stat-heading">Season</h4>
                      <div className="stat-text">All the year around</div>
                    </div>

                    <div className="stat-item">
                      <h4 className="stat-heading">Duration</h4>
                      <div className="stat-text">2 Days</div>
                    </div>
                    <div className="stat-item">
                      <h4 className="stat-heading">Difficulty</h4>
                      <div className="stat-text">Challenging</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-12 col-md-12 col-lg-8 conte-tours"
                style={{ textAlign: "justify" }}
              >
                <div className="breadcrumbs"></div>
                <h1>SHORT INCA TRAIL TO MACHUPICCHU 2D/1N</h1>
                <p>
                  Absolutely, the are many treks to Machupicchu but definitely
                  one of them is the most demanded by hikers this is the
                  remarkable 2 day Inca Trail. It takes you through
                  archeological sites, nice views and takes part of the Classic
                  Inca trail too.
                </p>
                <h3>
                  <strong>
                    P.S. ENJOY OF THIS UNIQUE HIKE AND BE PART OF IT
                  </strong>
                </h3>
                <p>
                  <strong>
                    Pre – hike briefing for the Short Inca Trail or Itinerary
                  </strong>
                  You will have a detailed briefing with your guide 1 or 2 days
                  before getting started on it. Your guide will be at your hotel
                  in order to meet and explain to you highlights on the hike so
                  that you will be prepared for it. Please feel free to ask away
                  about the hike.
                </p>
                <h4>Trip Details</h4>

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
                          DAY 1: Cusco – Chachabamba – Sun Gate – Machupicchu –
                          Aguas Calientes
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
                          We will be picked you up from your hotel early in the
                          morning around 4 am. After that, we will head to the
                          Ollantaytambo train station in order to take the train
                          for about 1 hour and 45 minutes following the Urubamba
                          river until we reach the starting point that is known
                          as km 104 or Chachabamba. (Then) we get off the train
                          and cross a suspension bridge to reach the checkpoint
                          where we will show our permits, tickets and original
                          passports in order to get in and begin our stunning
                          hike, along the way we will see stunning landscapes
                          and wildlife such as snowcapped mountains, colorful
                          valleys, some Inca sites, orchids, birds and so on.
                          The first 4 hours hike along the Inca trail will be
                          way up to the archeological site of Wiñaywayna
                          “Forever Young” (2,700 m/8, 858) there we will make a
                          stop for a while in order to explain to you historical
                          background on it and take a break as well. Then will
                          be heading to the checkpoint where we will eat our box
                          lunch. After lunch we will continue hiking up for 1
                          1/2 to cross the stone threshold of Inti Punku “Sun
                          Gate¨ this is the last part of the Classic Inca trail
                          and we will walk on it. At Sun gate (there) we will
                          spend some time to have our first glimpse and take the
                          first shoots of Machupicchu. Lastly, we will be going
                          down to Machupicchu Citadel and take a bus to Aguas
                          Calientes overnight there in a hotel then we gather to
                          have dinner.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          DAY 2: Aguas Calientes – Machupicchu – Cusco
                          <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <h6>
                          This day your dreams will come true, will be visiting
                          Machupicchu. First, you will have a hearty breakfast
                          at hotel and then we will go to the bus station
                          directly in the morning in order to take the bus to
                          Machupicchu Citadel. Your guide will tell you the
                          perfect timing to go to the bus station depending on
                          your entrance ticket time, all of the entrance tickets
                          to Machupicchu have different times (those entrance
                          tickets are assigned to you depending on how far in
                          advance you book) At Machupicchu you will have a
                          guided visit around 2 hours roughly after that you
                          will have spare time to visit Machupicchu by yourself.
                          Finally, you will be catching the bus to get back to
                          Aguas Calientes Town then board the train to
                          Ollantaytambo there/where a private minivan will be
                          waiting for you to take you to Cusco dropping you off
                          at your hotel.
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
                        <strong>What to bring with you</strong>
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                      <ul role="list">
                        <li>
                          Pre-hike briefing one night before you get started on
                          it{" "}
                        </li>
                        <li>English speaking guide /Spanish for two days</li>
                        <li>Inca trail entrance fees</li>
                        <li>
                          Round trip private van transport from Cusco to
                          Ollantaytambo – Ollantaytambo to Cusco.
                        </li>
                        <li>
                          Train ticket from Ollantaytambo to kilometer 104
                          (trailhead of the hike)
                        </li>
                        <li>
                          Expedition train ticket from Aguas Calientes to
                          Ollantaytambo.
                        </li>
                        <li>
                          Round trip bus tickets from Aguas Calientes to
                          Machupicchu—Machupicchu to Aguas Calientes.
                        </li>
                        <li>Entrance fee to Machupicchu</li>
                        <li>
                          Hotel of 3 stars I Aguas Calientes Town (La Cabaña or
                          similar with 3 stars)
                        </li>
                        <li>Dinner in Aguas Calientes</li>
                        <li>Breakfast day 2 (at the hotel)</li>
                        <li>Box lunch for the first day</li>
                        <li>Guided visit at Machupicchu archeological site</li>
                      </ul>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                      <ul>
                        <li>Breakfast on day 1 </li>
                        <li>Lunch and dinner on day 2</li>
                        <li>
                          Entrance ticket for Huayna Picchu mountain ($75 USD){" "}
                        </li>
                        <li>Tip for your guide (voluntary)</li>
                        <li>Travel Insurance </li>
                      </ul>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                      <ul>
                        <li>
                          Original passport and Student card if you are a
                          student.
                        </li>
                        <li>Digital camera </li>
                        <li>Sturdy trekking poles</li>
                        <li>Hiking backpack (at least 20 Lt of capacity) </li>
                        <li>Sun protection</li>
                        <li>Insect repellent </li>
                        <li>Sun hat or brimmed hat</li>
                        <li>Toilet paper</li>
                        <li>Rain gear</li>
                        <li>
                          Bathing clothes for the hot springs, If you consider
                          going there.
                        </li>
                        <li>Water bottle</li>
                        <li>Personal medication and hygiene items</li>
                        <li>Trekking boots or shoes</li>
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
    )
  }
}
export default Tour
