import React,{Component} from 'react';
import Navbar from "../pages/partial/Navbar";
import Footer from "../pages/partial/Footer";

class Tour extends Component{
    render(){
        return(
            <div>  
                <Navbar />
                <img src="assets/images/cusco-panoramico.jpg" className="img-fluid" alt="Responsive image" style={{padding:"0px 0px 50px 0px"}}/>   
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                        <div id="column_left" className="col-xs-12 col-lg-3">
                        
                        <div className="trip-sticky-sidebar-inner">

                        <div className="tour-price-block">
                            <div className="tour-price-inner">
                                <div className="text-block-40">$150 USD</div>
                            </div>
                            <div className="tour-price-info"><strong>Group Service</strong><br></br>(from 1 to 5 peple for the total group not per person)</div>
                            <div className="tour-price-inner">
                                <div className="text-block-40">$190 USD</div>
                            </div>
                                <div className="tour-price-info"><strong>Private Service</strong><br></br> (from 7 to 12 people for the total group not per person)</div>
                                
                                <div className="trip-booking-button">
                                     <div className="trip-booking-button-text">Request Booking</div>
                                     </div>                                     
                                </div>
                            
                            <div className="tour-quick-stats-block">
                                <h3 className="quick-stats-heading">Quick Stats</h3>
                                <div className="stat-item">
                                    <h4 className="stat-heading">Trip Type</h4>
                                    <div className="stat-text">Sightseeing</div></div>
                                    <div className="stat-item">
                                    <h4 className="stat-heading">Season</h4>
                                    <div className="stat-text">All the year around</div></div>
                                    
                                            <div className="stat-item">
                                                <h4 className="stat-heading">Duration</h4>
                                                <div className="stat-text">Half Day (4-5 hours)</div></div>
                                                <div className="stat-item">
                                                    <h4 className="stat-heading">Difficulty</h4>
                                                    <div className="stat-text">Easy</div></div>
                            </div>
                        </div>
                    
                    </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 conte-tours" style={{textAlign:"justify"}}>

                            <div className="breadcrumbs" ></div>
                                <h1>CITY TOUR</h1>
                                <p>
                                Cusco was the core of the Inca State surrounded via striking Inca Sites that are appreciated and could be seem around Cusco City currently. 
                                The famed CITY TOUR permits you get insight into the Incas history taking a stroll and visiting some Inca Sites located in and around Cusco for instance Sacsayhuaman, Q°enqo, Tambomachay among others. It is a perfect and an awesome tour undoubtedly. you will not regret opting to do it. 

                                </p>
                                <h3><strong>P.S. TAKE ADVANTAGE OF YOUR HALF DAY AND DO NOT MISS IT OUT</strong></h3>
                                <ul>
                                <p><strong>Sites to be visited</strong></p>
                                <li> <strong>The Cathedral of Cusco in (Cusco) </strong> the second largest in Latin America fulls of native oil paintings painted via indigenous people during the Colonial time.</li>
                                <li> <strong>Saint Dominic Monastery – Koricancha </strong> in (Cusco) which is known us the Sun temple so worshipped by the Incas at that time</li>
                                <li> <strong>Sacsayhuman </strong> (around Cusco) a huge megalithic inca construction its arquitecture consits of masive stones that can weigh 90 tons roughly.  </li>
                                <li> <strong>Qenqo </strong> (around Cusco) a funeral chamber where the Incas mummyfied corpses with the purpose to preserve them</li>
                                <li> <strong>Puca Puca</strong> (around Cusco) a circular tower that served as a look out to track down enemies</li>
                                <li> <strong>Tambomachay</strong> (around Cusco) a resting place and a temple of the water </li>
                                </ul>
                                <h4>Trip Details</h4>
                                <div id="accordion" className="myaccordion">                                
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Cusco City Tour
                                        <span className="fa-stack fa-sm">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <h6>
                                        We will pick you up from your hotel at 8:30 am or 1 pm ( it is up to you) then will go to Sacsayhuman archeological site where will start our cultural tour after visiting it and taking a look at its gigantic architecture and having a panoramic view of Cusco from The upper part of the site we will continue to Qenqo which is another Inca site that has a funeral chamber to be visited after that we will travel to the next Inca sites Puca Pucara a circular tower that served as a viewpoint and played a key role to track down arch enemies then Tambomachay a resting place was very loved by Pachacuteq Inca to hunt wild animals but others suggest that was a temple dedicated to the water because of its beautiful sculpted fountains.  Finally, we will be coming back to the downtown to visit the last two sites the Cathedral of Cusco the most important religous place and so visited by catholics and tourists as well due to its religious beauty, at the end we will be at Koricancha the most prominent shrine granted to the sun good where we could observe an example of a finest Inca architecture. 
                                         </h6>
                                        
                                    </div>
                                    </div>
                                </div>                                      
                            </div>


                            <div className="container">
                            <h4>Trip Highlights</h4>
                            
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#home"><strong>Included </strong></a></li>
                                <li><a data-toggle="tab" href="#menu1"><strong>Not Included</strong></a></li>
                                <li><a data-toggle="tab" href="#menu2"><strong>What to bring with you</strong></a></li>  
                            </ul>

                            <div className="tab-content">
                                <div id="home" className="tab-pane fade in active">      
                                <ul role="list">
                                    <li>Round trip transportation </li>
                                    <li>Profesional English speaking/ spanish guide</li>                                  
                                 
                                </ul>
                                </div>
                                <div id="menu1" className="tab-pane fade">  
                                <ul>                               
                                    <li>Visitor ticket to Koricancha (10 soles)</li>                                  
                                    <li>Touristic ticket for archeological sites (70 soles)</li>
                                    <li>Visitor ticket to Cathedral (25 soles)</li>
                                    <li>Travel insurance</li>
                                    <li>Meals </li>
                                    <li>Voluntary tips for guide keep in mind ( tips aren´t expected but always apreciated)</li>                                    
                                </ul>
                                </div>   
                                <div id="menu2" className="tab-pane fade">  
                                <ul>
                                <li>Touristic ticket</li>
                                    <li>Baseball cap or brimmed hut </li>                                  
                                    <li>Sun block</li>
                                    <li>Rain gear or rain poncho just in case you need it </li>
                                    <li>Water</li>
                                    <li>Camera and films </li>                                    
                                </ul></div>  
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