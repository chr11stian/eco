import React from "react";
//import { useHistory } from "react-router-dom";

import * as tourService from "./ToursService";
import { Tours } from "./Tours";

import "./TourItem.css";

interface Props {
  tour: Tours;
  loadTours: () => void;
}

const TourItem = (props: Props) => {
  const { tour, loadTours } = props;

  //const history = useHistory();

  const handleDelete = async (id: string) => {
    await tourService.deleteTourById(id);
    loadTours();
  };

  return (
    <div className="col-md-4 p-2">
      <div
        className="card card-body "
        style={{ cursor: "pointer" }}
        //onClick={() => history.push(`/update/${tour._id}`)}
      >
        <div className="d-flex justify-content-between">
          <h5>{tour.title}</h5>
          <span
            className="text-danger"
            onClick={() => tour._id && handleDelete(tour._id)}
          >
            X
          </span>
        </div>
        <div>{tour.description}</div>
        <div className="embed-responsive embed-responsive-16by9">
          <span>{tour.cities}</span>
          <span>{tour.resumeDescription} </span>
          <span>{tour.days} </span>
          <span>{tour.price} </span>
          <span>{tour.priceTypical} </span>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
