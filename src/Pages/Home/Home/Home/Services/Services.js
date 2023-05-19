import React from "react";
import fluoride from "../../../../../assets/images/fluoride.png";
import cavity from "../../../../../assets/images/cavity.png";
import whitening from "../../../../../assets/images/whitening.png";
import Service from "./Service";
import treatment from "../../../../../assets/images/treatment.png";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <>
      <div className="mt-16">
        <div className="text-center">
          <h3 className="text-xl font-bold text-primary uppercase">
            Our Services
          </h3>
          <h2 className="text-3xl">Services We Provide</h2>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
      <div className="mt-6 grid">
        <div className="card grid-flex bg-base-100">
           <div>
           <figure className="w-1/2">
            <img src={treatment} alt="Movie" />
          </figure>
           </div>
          <div className="card-body">
            <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page </p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
