import React, { useEffect, useState } from "react";
import * as toursService from '../pages/Tours/ToursService';
import Navbar from "../pages/partial/Navbar";
import Footer from "../pages/partial/Footer";

import { Tours } from "../pages/Tours/Tours";
import ItemTours from "./ItemTours";

const ToursList = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<Tours[]>([]);

  const loadTours = async () => {
    const res = await toursService.getTours();

    const formatedTours = res.data
      .map((tour) => {
        return {
          ...tour,
          createdAt: tour.createdAt ? new Date(tour.createdAt) : new Date(),
          updatedAt: tour.updatedAt ? new Date(tour.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setTours(formatedTours);
    setLoading(false);
  };

  useEffect(() => {
    loadTours();
  }, []);

  if (loading)
    return (
    <div>
    <Navbar />
      <div className="row">
        <div className="col-md-12 my-auto">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
    );

  if (tours.length === 0) return <div>there are no tours yet</div>;

  return (
    <div>
    <Navbar />
    <img src="assets/images/M1.jpg" className="img-fluid" alt="Responsive image"/>
    <div id="features" className="features-section">
        <h2 className="section-title text-center">Tours</h2>
            
            <div className="row-fluid">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="tours-home">
                            <ul>
                                {tours.map((tour) => (
                                    <ItemTours tour={tour} key={tour._id} loadTours={loadTours} />
                                ))}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
    </div>
);

};

export default ToursList;