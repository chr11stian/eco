
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../pages/partial/Navbar'
import Footer from '../pages/partial/Footer';
import {useHistory} from 'react-router-dom'

import * as tourService from "../pages/Tours/ToursService";
import { Tours } from "../pages/Tours/Tours";

interface Props {
    tour: Tours;
    loadTours: () => void;
  }
  
  const ItemTours = (props: Props) => {
    const { tour, loadTours } = props;
  
    const history = useHistory();
  
    const handleDelete = async (id: string) => {
      await tourService.deleteTourById(id);
      loadTours();
    };
  
    return (        
            <li>                            
                                <div className="tour">
                                        <Link to='/tour'>
                                    <div className="image-tour">
                                        <div style={{
                                            background: 'url(assets/images/colca-canyon-tours.jpg)', 
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            height: '100%',
                                            maxHeight: '423px',
                                            width: '100%',
                                            position: 'absolute'
                                            }}>
                                        </div>
                                    </div>
                                    </Link>
                                    <div className="tourdetails">
                                    
                                    <div className="txt">
                                        
                                            <span className="pacakagetitle"> {tour.title} </span>
                                            
                                            <p style={{display: 'none'}}>{tour.resumeDescription}</p>
                                            
                                        <div className="daywithcountry daynight-Days">
                                        
                                        <div className="days">
                                            <span>{tour.days}</span>                                                   
                                            Days
                                        </div>
                                        
                                        <div className="country">
                                            <span>{tour.cities} </span>
                                        </div>	
                                        
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="pricedetail">
                                        
                                        <span className="price">$390</span>
                                        
                                        <span className="typ-proce">Typically $620</span>
                                        <Link to='/tour' className="viewdetail" style={{paddingTop: '10px', paddingBottom: '10px'}}>View Tour <i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                        
                                    </div>
                                    
                                    </div>
                                    </div>
                                    </li>
    );                
};

export default ItemTours;