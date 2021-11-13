import React,{Component} from 'react';
import Navbar from "../pages/partial/Navbar";
import Footer from "../pages/partial/Footer";

class Tour extends Component{
    render(){
        return(
            <div>  
                <Navbar />
                <img src="assets/images/M1.jpg" className="img-fluid" alt="Responsive image" style={{padding:"0px 0px 50px 0px"}}/>   
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                        <div id="column_left" className="col-xs-12 col-lg-3">
                        
                        <div className="trip-sticky-sidebar-inner">

                        <div className="tour-price-block">
                            <div className="tour-price-inner">
                                <div className="text-block-40">$850 USD</div></div>
                                <div className="tour-price-info">Standard Domes starting at</div>
                                 <div className="trip-booking-button">
                                     <div className="trip-booking-button-text">Request Booking</div></div>                                     </div>
                            
                            <div className="tour-quick-stats-block">
                                <h3 className="quick-stats-heading">Quick Stats</h3>
                                <div className="stat-item">
                                    <h4 className="stat-heading">Trip Type</h4>
                                    <div className="stat-text">Hiking / Trekking</div></div>
                                    <div className="stat-item">
                                    <h4 className="stat-heading">Season</h4>
                                    <div className="stat-text">October - April</div></div>
                                    <div className="stat-item">
                                        <h4 className="stat-heading">Distance</h4>
                                        <div className="stat-text">61km (38 mi)</div></div>
                                        <div className="stat-item">
                                            <h4 className="stat-heading">Elevation</h4>
                                            <div className="stat-text">244m (800 ft) - 914 m (3000 ft)</div>
                                            </div>
                                            <div className="stat-item">
                                                <h4 className="stat-heading">Duration</h4>
                                                <div className="stat-text">5 Days</div></div>
                                                <div className="stat-item">
                                                    <h4 className="stat-heading">Difficulty</h4>
                                                    <div className="stat-text">Moderate</div></div>
                            </div>
                        </div>
                    
                    </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 conte-tours" style={{textAlign:"justify"}}>

                            <div className="breadcrumbs" ></div>
                                <h1>Classic Inca Trail to Machu Picchu 4D/3N</h1>
                                <p>Welcome to the <em><strong>Classic Inca Trail</strong></em>, the most famous and most spectacular hiking route in South America! This ancient 45-kilometer trail follows the footsteps of the Inca pilgrims to the gates of the sacred city of Machu Picchu, one the new 7 wonders of the world.</p>
                                <p>Our exciting itinerary offers 4 days of trekking along the original Inca pathways, passing a spectacular array of Inca ruins along the way. The trail is located high in the Peruvian Andes climbing gradually from the valley floor (2,700m / 8,856 ft) to the most spectacular mountain passes (as high as 4,215m / 13,825ft). At every turn, the surrounding scenery will take your breath away!</p>
                                <p>Hiking the&nbsp; 4 day Inca Trail is a strenuous and awe-inspiring adventure. For four days we will push ourselves to our physical limits, resting each night under the spectacular Andean night sky. But on our final day, any feelings of pain and exhaustion simply disappear as the mist lifts to reveal the emerald peaks and terraced ruins of the mystical ancient city.</p>
                                <p><strong>Action Peru Treks</strong> invites you to awaken your senses through this awe-inspiring trekking experience to Machu Picchu.&nbsp; The trek is truly a once in a lifetime experience.</p>                                
                                <h4>TRIP INFO</h4>
                    <div id="accordion" className="myaccordion">                                
                    <div className="card">
                        <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            DAY 1: CUSCO - WAYLLABAMBA
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                            </span>
                            </button>
                        </h2>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            <h5>After breakfast (5am) we transfer you from your hotel in Cusco or the Sacred Valley to Piscaycucho (first check point and the start of the trail). Here you start hiking through the Urubamba river valley. After two hours, you will reach the first archaeological site called Patallacta, where you can appreciate the impressive landscapes and see the importance of this valley in the context of Incan history, later you stop at Tarachayoq for lunch and then continue up the Cusichaca Valley passing houses of settlers to finally reach the Andean community of Huayllabamba, the first campsite.</h5>
                            <strong>Hotel Pickup : 5am</strong>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            DAY 2: WAYLLABAMBA - PACAYMAYU
                            <span className="fa-stack fa-2x">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                            </span>
                            </button>
                        </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                        <h5>After breakfast (5am) we transfer you from your hotel in Cusco or the Sacred Valley to Piscaycucho (first check point and the start of the trail). Here you start hiking through the Urubamba river valley. After two hours, you will reach the first archaeological site called Patallacta, where you can appreciate the impressive landscapes and see the importance of this valley in the context of Incan history, later you stop at Tarachayoq for lunch and then continue up the Cusichaca Valley passing houses of settlers to finally reach the Andean community of Huayllabamba, the first campsite.</h5>
                            <strong>Hotel Pickup : 5am</strong>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            DAY 3: PACAYMAYU – WIÑAYWAYNA
                            <span className="fa-stack fa-2x">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                            </span>
                            </button>
                        </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                        <h5>After breakfast (5am) we transfer you from your hotel in Cusco or the Sacred Valley to Piscaycucho (first check point and the start of the trail). Here you start hiking through the Urubamba river valley. After two hours, you will reach the first archaeological site called Patallacta, where you can appreciate the impressive landscapes and see the importance of this valley in the context of Incan history, later you stop at Tarachayoq for lunch and then continue up the Cusichaca Valley passing houses of settlers to finally reach the Andean community of Huayllabamba, the first campsite.</h5>
                            <strong>Hotel Pickup : 5am</strong>
                        </div>
                        </div>
                    </div>
                    </div>


                    <div className="container">
  <h4>ADDITIONAL TRIP INFO</h4>
  
  <ul className="nav nav-tabs">
    <li className="active"><a data-toggle="tab" href="#home"><strong>include </strong></a></li>
    <li><a data-toggle="tab" href="#menu1"><strong>not include</strong></a></li>  
  </ul>

  <div className="tab-content">
    <div id="home" className="tab-pane fade in active">      
      <ul role="list"><li>All ground transport as indicated in the itinerary</li><li>Pick up/ drop off in Punta Arenas, El Calafate or Puerto Natales*</li><li>One expert English/Spanish speaking trekking guide</li><li>Torres del Paine National Park fee</li><li>3 nights accommodation at EcoCamp (dome of your choice)</li><li>1-night accommodation at Refugio Paine Grande (1) (shared basis)</li><li>Boat crossing over Pehoe Lake and Grey Lake (2)</li><li>Sleeping bag for the mountain hut if needed</li><li>Luggage transport: while trekking you will carry just your daypack</li><li>Meals (B: breakfast, BL: box lunch, L: lunch, D: dinner):</li><li>Day 1: L, D</li><li>Day 2: B, BL, D</li><li>Day 3: B, BL, D</li><li>Day 4: B, BL, D</li><li>Day 5: B, BL</li></ul>
      </div>
    <div id="menu1" className="tab-pane fade">  
      <ul><li>Flight tickets</li><li>Travel Insurance - We recommend &nbsp;<a href="https://www.worldnomads.com/Turnstile/AffiliateLink?partnerCode=flshpckrcnnt&amp;utm_source=flshpckrcnnt&amp;source=email&amp;utm_content=email&amp;path=https://www.worldnomads.com/usa/travel-insurance/?gclid=EAIaIQobChMIg8j00Kr63gIVApRpCh0DuwrUEAAYASAAEgL5F_D_BwE" data-rt-link-type="external">World Nomads</a>, or <a href="https://ss.globalrescue.com/partner/flashpackerconnect/" data-rt-link-type="external">Global Rescue</a> (it is mandatory you purchase appropriate insurance for this trip)</li><li>Voluntary tipping of guides and staff</li><li>Soft drinks or snacks not served with the meals included at the EcoCamp. Bringing US$ in cash for buying extra drinks/snacks or souvenirs in Torres del Paine NP is recommended</li><li>Items of a personal nature</li></ul>
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