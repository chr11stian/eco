import React, { Component } from "react";
import Navbar from "../pages/partial/Navbar";
import Footer from "../pages/partial/Footer";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline, Affix, Tabs } from "antd";
import Typography from "@mui/material/Typography";

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
                <Affix
                  offsetTop={120}
                  onChange={(affixed) => console.log(affixed)}
                >
                  <div className="trip-sticky-sidebar-inner">
                    <div className="tour-price-block">
                      <div className="tour-price-inner">
                        <div className="text-block-40">$150 USD</div>
                      </div>
                      <div className="tour-price-info">
                        <strong>Group Service</strong>
                        <br></br>(from 1 to 5 peple for the total group not per
                        person)
                      </div>
                      <div className="tour-price-inner">
                        <div className="text-block-40">$190 USD</div>
                      </div>
                      <div className="tour-price-info">
                        <strong>Private Service</strong>
                        <br></br> (from 7 to 12 people for the total group not
                        per person)
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
                        <div className="stat-text">Half Day (4-5 hours)</div>
                      </div>
                      <div className="stat-item">
                        <h4 className="stat-heading">Difficulty</h4>
                        <div className="stat-text">Easy</div>
                      </div>
                    </div>
                  </div>
                </Affix>
              </div>

              <div
                className="col-xs-12 col-sm-12 col-md-12 col-lg-8 conte-tours"
                style={{ textAlign: "justify" }}
              >
                <div className="breadcrumbs"></div>
                <h1 style={{ textAlign: "center" }}>CITY TOUR</h1>
                <p>
                  Cusco was the core of the Inca State surrounded via striking
                  Inca Sites that are appreciated and could be seem around Cusco
                  City currently. The famed CITY TOUR permits you get insight
                  into the Incas history taking a stroll and visiting some Inca
                  Sites located in and around Cusco for instance Sacsayhuaman,
                  Q°enqo, Tambomachay among others. It is a perfect and an
                  awesome tour undoubtedly. you will not regret opting to do it.
                </p>
                <h3>
                  <strong>
                    P.S. TAKE ADVANTAGE OF YOUR HALF DAY AND DO NOT MISS IT OUT
                  </strong>
                </h3>
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
                <Box sx={{ p: 2 }}>
                  <Grid
                    xs
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid md={10} xs={10}>
                      <Box sx={{ p: 2 }}>
                        <Typography variant="h4" align="center">
                          Trip Details
                        </Typography>
                      </Box>
                      <Timeline
                        mode="alternate"
                        items={[
                          {
                            color: "green",
                            children:
                              "We will pick you up from your hotel at 8:30 am or 1 pm (it is up to you)",
                          },
                          {
                            color: "gray",
                            children:
                              "then will go to Sacsayhuman archeological site where will start our cultural tour after visiting it and taking a look at its gigantic architecture and having a panoramic view of Cusco",
                          },
                          {
                            color: "gray",
                            children:
                              "The upper part of the site we will continue to Qenqo which is another Inca site that has a funeral chamber to be visited after that we will travel",
                          },
                          {
                            color: "gray",
                            children:
                              "to the next Inca sites Puca Pucara a circular tower that served as a viewpoint and played a key role to track down arch enemies then Tambomachay a resting place was very loved by Pachacuteq Inca to hunt wild animals but others suggest that was a temple dedicated to the water because of its beautiful sculpted fountains",
                          },
                          {
                            color: "red",
                            dot: (
                              <ClockCircleOutlined
                                style={{ fontSize: "16px" }}
                              />
                            ),
                            children:
                              "Finally, we will be coming back to the downtown to visit the last two sites the Cathedral of Cusco the most important religous place and so visited by catholics and tourists as well due to its religious beauty, at the end we will be at Koricancha the most prominent shrine granted to the sun good where we could observe an example of a finest Inca architecture.",
                          },
                        ]}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Grid sx={{ p: 2 }}>
                    <Typography variant="h4" align="center">
                      Trip Highlights
                    </Typography>
                    <Tabs
                      defaultActiveKey="1"
                      centered
                      items={[
                        {
                          label: "Included",
                          key: "1",
                          children: (
                            <>
                              <p>Round trip transportation</p>
                              <p>Profesional English speaking/ spanish guide</p>
                            </>
                          ),
                        },
                        {
                          label: "Not Included",
                          key: "2",
                          children: (
                            <>
                              <p>Visitor ticket to Koricancha (10 PEN)</p>
                              <p>
                                Touristic ticket for archeological sites (70
                                PEN)
                              </p>
                              <p>Visitor ticket to Cathedral (25 PEN)</p>
                              <p>Travel insurance</p>
                              <p>Meals</p>
                              <p>
                                Voluntary tips for guide keep in mind ( tips
                                aren´t expected but always apreciated)
                              </p>
                            </>
                          ),
                        },
                        {
                          label: "What to bring with you",
                          key: "3",
                          children: (
                            <>
                              <p>Touristic ticket</p>
                              <p>Baseball cap or brimmed hut</p>
                              <p>Sun block</p>
                              <p>
                                Rain gear or rain poncho just in case you need
                                it
                              </p>
                              <p>Water</p>
                              <p>Camera and films</p>
                            </>
                          ),
                        },
                      ]}
                    />
                  </Grid>
                </Box>
                
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
