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
                <h1>SACRED VALLEY TOUR</h1>
                <p>
                  Known to people as Valle Sagrado de Los Incas or Sacred Valley
                  of the Incas, based on historical records the most important
                  and useful valley because of its fertile soil. Along it visitors can visit Inca sites, 
                  mingle with locals and understand the importance of this magnificent valley. 
                </p>
                <h3>
                  <strong>P.S. So many places, so little time?</strong>
                </h3>

                <h3>  </h3>
                <p>
                  {" "}
                  
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
                          DETAILED ITINERARY
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
                        You will be collected from your hotel at 7:30 pm then we head
                  towards Sacred Valley along the way we will see and appreciate
                  stunning views for instance traditional pretty farming
                  villages, corn plantations, quinoa plantations, flower
                  plantations, gigantic mountains that flank the Sacred Valley
                  (which is the remarkable Andes) and also striking Inca Sites
                  that date back to 15 th century. It is just over 40 minutes to
                  our first stop at a lookout which is known as Mirador de Taray
                  from there we will have our first panoramic view of The
                  Valley, taking a lot of amazing pictures then continue driving
                  down to Pisaq Town to visit its local market that is full of
                  famed artisans, antiques, colorful textiles, potteries, oil on
                  canvases and so on. It draws many hundreds of shoppers and
                  visitors all the year, after that we continue way up to Pisaq
                  Inca Site which is 20 minutes away from the Market where your
                  guide will be explaining to you highlights on it a too
                  impressive Inca Site perched on a cliff is the largest Inca
                  Cemetery comprise of enormous agricultural terraces as well.
                  After Pisaq we will be driven for about 1 hour to Urubamba to
                  have lunch there in a restaurant then carry on driving half an
                  hour more to Ollantaytambo to visit this incredible
                  archeological site. Lastly, we will be heading to Chinchero
                  our last site to be visited on the tour which is on the way to
                  Cusco 1 hour and 10 minutes to reach there. In Pisaq Town we
                  will visiting the Inca site and the Colonial Church after that
                  get back to highway drive for around 45 minutes to Cusco.{" "}
                        </h6>
                        <ul>
                  <p>
                    <strong>Sites to be visited</strong>
                  </p>
                  <li>Pisaq local market</li>
                  <li>Pisaq archeological site</li>
                  <li>Urubamba</li>
                  <li>Ollantaytambo archeological site</li>
                  <li>Chinchero archeological site and its Colonial church</li>
                </ul>
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
                        <li> Round trip transportation </li>
                        <li>Knowledgeable cultural English speaking guide.</li>
                      </ul>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                      <ul>
                        <li>tourist ticket for archeological site </li>
                        <li> Lunch is on your own </li>
                        <li> Travel insurance </li>
                        <li>
                          Voluntary tips for guide keep in mind (tips aren´t
                          expected but always appreciated){" "}
                        </li>
                      </ul>
                    </div>

                    <div id="menu2" className="tab-pane fade">
                      <ul>
                        <li>Touristic ticket</li>
                        <li>Baseball cap or brimmed hut</li>
                        <li> Sun block</li>
                        <li>
                          Rain gear or rain poncho just in case you need it
                        </li>

                        <li>Water</li>
                        <li> Camera and films </li>
                        <li> Cash </li>
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
