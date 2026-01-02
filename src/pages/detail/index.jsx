import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "../../redux/action";
import Header from "./header";
import Content from "./content";
const Detail = () => {
  const { country } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(country));
  }, []);

  return (
    <div className=" flex-1 min-h-[calc(100vh-77px)] grid place-items-center p-6  relative ">
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
        <div className=" w-96 h-96 bg-pink-300 absolute top-20 right-20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
      </div>
      <div className="bg-white/95 backdrop-blur-md border border-white/30 shadow-lg min-h-[65%] rounded-3xl py-8 px-10 max-w-4xl max-md:w-full md:w-[80%] z-10 animate-fade-in relative">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Detail;
