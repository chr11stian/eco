import React, { Component } from "react"
import Navbar from "./partial/Navbar"
import Footer from "./partial/Footer"

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
                      <div className="text-block-40">$20 USD</div>
                    </div>
                    <div className="tour-price-info">
                      <strong>Group Service</strong>
                      <br></br>(from 1 to 5 peple for the total group not per
                      person)
                    </div>
                    <div className="tour-price-inner">
                      <div className="text-block-40">$30 USD</div>
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
                      <div className="stat-text">couple of hours</div>
                    </div>
                    <div className="stat-item">
                      <h4 className="stat-heading">Difficulty</h4>
                      <div className="stat-text">Easy peasy </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-12 col-md-12 col-lg-8 conte-tours"
                style={{ textAlign: "justify" }}
              >
                <div className="breadcrumbs"></div>
                <h1>GUIDED VISIT AT/TO THE INCA MUSEUM</h1>
                <p>
                  The Inca Museum is the most beautiful and the most complete in
                  comparison to other ones in Cusco City. It works inside a
                  colonial building that is consisted of 23 exhibition rooms
                  within them you can see and find chopping implements from
                  first inhabitants, models of Inca sites, Inca mummies, Inca
                  artifacts such as potteries, jewelry, and so on. This museum
                  is the only one that has a remarkable timeline explaining and
                  nurturing visitors with much history lovely and closely. This
                  is an unique experience fulls of history waiting for you. 
                </p>
                <h3>
                  <strong>
                    P.S. Take advantage of your free morning or free afternoon
                    and dive into Incas History visiting this amazing museum. We
                    are the only company that offers guided visits to the inka
                    museum.
                  </strong>
                </h3>

                <ul>
                  <p>
                    <strong>DETAILED ITINERARY</strong>
                  </p>
                  <li>
                    The Inca Museum is located right downtown around the main plaza
                    of Cusco next to the left side to the Cathedral on the
                    corner of Cuesta del Almirante street there is a Spanish
                    building that has a colonial facade this is the museum. On
                    the day of your visit, you could gather with your cultural
                    guide at the entrance of The Inca Museum or at the core of
                    the main plaza of Cusco (at the fountain) if you want. Your
                    cultural guide will have a sign of the Travel Company “ECO
                    PERU TRIPS” in order to recognize him. The guided visit will
                    be lasting 2 hours roughly.
                  </li>
                  <li>
                    Opening Hours <br></br>
                    Is open daily from Monday to Friday 9:00 am.
                    17:00 pm. (last entry at 3:30 pm) and on Saturday 9:00 am
                    1:00 pm.
                  </li>
                  <li>
                    To ensure a safe and enjoyable visit, the Museum works within government guidelines:
                  </li>
                  <li>
                  To take safety and security of Museum´s staff and visitors seriously, so face coverings are mandatory to be worn.
                  </li>
                  <li>
                  To keep artifacts in a good state is banned to take pictures inside exhibition rooms with flash or without it.
                  </li>
                  
                </ul>

                {/* <h4>Trip Details</h4> */}
                {/*                 
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
                          Cusco—Cusipata—Llacto—Rainbow M. – Llacto—Cusco
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
                          You will be collected early in the morning from your
                          hotel at 3:15 am then we take our private minivan
                          driving 3 hours roughly passing throughout the South
                          Valley until to reach the trail head which is locally
                          known as LLaqto located at 4,638 m (15,216 ft.). One
                          hour before to reach there we will stop in Cusipata
                          Village (3,250m/11,000feet) to eat breakfast and
                          energize our body after that carry on way to the
                          starting point. The hike to the Rainbow Mountain will
                          take 2 hour way up until to the top of a mountain that
                          serves as a lookout to take our first glimpse and take
                          our first shoots of the Rainbow Mountain. At the
                          Rainbow Mountain we will spend 1 hour approximately
                          appreciating and taking best shoots of it. Then we
                          will go to visit the Red Valley that is too close
                          there (30 minutes away from the Rainbow Mountain).
                          Finally, we will be getting back to the trail head
                          walking down for about 1 hour and half roughly where
                          we catch our minivan, afterwards drive for one hour
                          more to Cusipata Village which is our breakfast spot
                          and lunch spot, where/there tasty food will be waiting
                          for you and then go back to Cusco reaching your hotel
                          around 3:00 pm approximately. P.S. Departure time is
                          so early before dawn in order to gain time to arrive
                          at The Rainbow Mountain early, so that we will be able
                          to avoid the crowds and have plenty of time over
                          there.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="container">
                  {/* <h4>Trip Highlights</h4> */}

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
                    {/* <li>
                      <a data-toggle="tab" href="#menu2">
                        <strong>What to bring with you</strong>
                      </a>
                    </li> */}
                  </ul>

                  <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                      <ul role="list">
                        <li>
                        Knowledgeable cultural English speaking guide.
                        </li>
                        <li>
                        Visitor ticket to museum.
                        </li>
                        <li>
                        A bottled water 
                        </li>
                        <li>
                        A sandwich (could be of chicken, meat or vegetarian)  
                        </li>
                        
                      </ul>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                      <ul>
                        <li>Tip for your guide (voluntary). </li>
                        
                      </ul>
                    </div>

                    {/* <div id="menu2" className="tab-pane fade">
                      <ul>
                        <li>
                          Tip for your guide (voluntary).
                        </li>
                        <li>Comfortable hiking pants. </li>
                        <li>2 Liters of water at least per person</li>
                        <li>
                          Water bottle (reusable not disposable to not pollute
                          thanks){" "}
                        </li>

                        <li>Personal snacks (optional).</li>
                        <li> Water proof trekking shoes </li>
                        <li>Day pack with rain cover</li>
                        <li>Rain gear or rain poncho</li>
                        <li>Brimmed hat</li>
                        <li>Walking poles</li>
                        <li> Sun cream and sun glasses </li>
                        <li>Camera with charged batteries</li>
                        <li>Personal medical kit/personal items</li>
                        <li>
                          Extra money for souvenirs, drinks, tips and so on.{" "}
                        </li>
                      </ul>
                    </div>
                   */}
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
