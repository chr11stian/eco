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
                      <div className="text-block-40">$100 USD</div>
                    </div>
                    <div className="tour-price-info">
                      <strong>Group Service</strong>
                      <br></br>(from 1 to 5 peple for the total group not per
                      person)
                    </div>
                    <div className="tour-price-inner">
                      <div className="text-block-40">$180 USD</div>
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
                <h1>RAINBOW MOUNTAIN ECOHIKE 1-DAY</h1>
                <p>
                  Rainbow Mountain or known to plateau dwellers as Vinicunca is
                  an outstanding natural formation (which is comprised of
                  colorful layers) that is in fashion to visit currently.
                  Walking through a pristine path that is teeming with wildlife
                  observing gorgeous vistas, passing through remarkable valleys
                  full of Alpacas and Llamas from where we well be able to have
                  a chance to see the impressive Ausangate snowcapped mountain
                  that perches on 6,300 m (21,000 ft.) (which is the largest
                  snowcapped mountain in Cusco) A truly experience waiting for
                  you. Do not miss out on this chance.
                </p>
                <h3>
                  <strong>
                    P.S. “This is the right hike to pull the plug”
                  </strong>
                </h3>
                {/*                 
                <ul>
                  <p>
                    <strong>Sites to be visited</strong>
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
                </ul>
                 */}

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
                          English speaking, well experienced guide for the whole
                          trip.
                        </li>
                        <li>
                          Pre-hike briefing one night before getting started on
                          it.
                        </li>
                        <li>
                          {" "}
                          Round trip transportation in a private Minivan (pick
                          up and drop off from the hotel)
                        </li>
                        <li>
                          Blanket to stay warm on the bus during the trip.
                        </li>
                        <li>First aid kit and tank of oxygen.</li>
                        <li>Snacks for the hike.</li>
                        <li>Entrance fee to Rainbow Mountain.</li>
                        <li> Lunch</li>
                      </ul>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                      <ul>
                        <li>Walking poles 15 USD </li>
                        <li>
                          Personal riding (horse driver) can be rented at the
                          starting point.
                        </li>
                        <li>
                          Entrance ticket for Huayna Picchu mountain ($75 USD){" "}
                        </li>
                        <li>Travel/Health/Emergency Insurance.</li>
                        <li>Gratuity for guide.</li>
                      </ul>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                      <ul>
                        <li>
                          Warm clothes (thermal pants as a first layer, woolen
                          hat, gloves, fleece, woolen socks, scarf).
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
