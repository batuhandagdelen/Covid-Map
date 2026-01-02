import React from "react";
import { useSelector } from "react-redux";
import ContentLoader from "../../components/loader/content-loader";
import Error from "../../components/error";
import Card from "./card";
const Content = () => {
  const { isLoading, error, data } = useSelector((store) => store);

  // data nesnesini diziye çevir
  const arr = Object.entries(data || {}).filter(([key]) => key !== "flag");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error message={error} />
      ) : (
        arr.map((item, key) => <Card key={key} item={item} />)
      )}
    </div>
  );
};

export default Content;
