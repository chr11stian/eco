// import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// import * as tourService from "./ToursService";
// import { Tours } from "./Tours";
// import Navbar from "../NavBar/NavBar";

// type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// interface Params {
//   id?: string;
// }

// const ToursForm = () => {
//   const initialState = {
//     title: "",
//     description: "",
//     cities: "",
//     resumeDescription: "",
//     days: "",
//     price: "",
//     priceTypical: "",
//   };

//   const [tour, setTour] = useState<Tours>(initialState);

//   const history = useHistory();
//   const params = useParams<Params>();

//   const getTour = async (id: string) => {
//     const res = await tourService.getTourById(id);
//     const {
//       title,
//       description,
//       cities,
//       resumeDescription,
//       days,
//       price,
//       priceTypical,
//     } = res.data;
//     setTour({
//       title,
//       description,
//       cities,
//       resumeDescription,
//       days,
//       price,
//       priceTypical,
//     });
//   };

//   useEffect(() => {
//     if (params.id) getTour(params.id);
//   }, [params.id]);

//   const handleInputChange = (e: InputChange) =>
//     setTour({ ...tour, [e.target.name]: e.target.value });

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!params.id) {
//       await tourService.createNewTour(tour);
//       setTour(initialState);
//       toast.success("New Tour Added");
//     } else {
//       await tourService.updateTour(params.id, tour);
//     }
//     history.push("/tours");
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="row">
//         <div className="col-md-4 offset-md-4">
//           <div className="card ">
//             <div className="card-body">
//               <h3>New Tour</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="title"
//                     placeholder="Write a Title for this video"
//                     className="form-control"
//                     autoFocus
//                     onChange={handleInputChange}
//                     value={tour.title}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="cities"
//                     placeholder="write resume cities"
//                     className="form-control"
//                     onChange={handleInputChange}
//                     value={tour.cities}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="resumeDescription"
//                     placeholder="write resume description"
//                     className="form-control"
//                     onChange={handleInputChange}
//                     value={tour.resumeDescription}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="number"
//                     name="days"
//                     placeholder="write days"
//                     className="form-control"
//                     onChange={handleInputChange}
//                     value={tour.days}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="number"
//                     name="price"
//                     placeholder="write price"
//                     className="form-control"
//                     onChange={handleInputChange}
//                     value={tour.price}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="number"
//                     name="priceTypical"
//                     placeholder="write price typical"
//                     className="form-control"
//                     onChange={handleInputChange}
//                     value={tour.priceTypical}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     name="description"
//                     rows={10}
//                     className="form-control"
//                     placeholder="Write a description"
//                     onChange={handleInputChange}
//                     value={tour.description}
//                   ></textarea>
//                 </div>
//                 {params.id ? (
//                   <button className="btn btn-info">Update</button>
//                 ) : (
//                   <button className="btn btn-primary">Create</button>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ToursForm;

const ToursForm = () => {
    return (<div></div>)
};
export default ToursForm;