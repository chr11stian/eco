import React, { useEffect, useState } from "react";
import * as toursService from "./ToursService";
import Navbar from "../NavBar/NavBar";

import { Tours } from "./Tours";
import TourItem from "./TourItem";

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
      <div className="row">
        {tours.map((tour) => (
          <TourItem tour={tour} key={tour._id} loadTours={loadTours} />
        ))}
      </div>
    </div>
  );
};

export default ToursList;
