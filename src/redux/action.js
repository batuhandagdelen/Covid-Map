import { createAsyncThunk } from "@reduxjs/toolkit";
import { detailApi } from "../utils/api";
import axios from "axios";

export const getDetails = createAsyncThunk(
  "covid/getDetails",
  async (country) => {
    // ülke covid verilerini alacak api isteği
    const req1 = await detailApi.get("/statistics", { params: { country } });

    // ülke detay verilerini alacak api isteği

    const req2 = await axios.get(
      `https://restcountries.com/v3.1/name/${country}`
    );

    // Promise.all ile 2 api isteğinin de aynı anda atılmasını sağla
    const [res1, res2] = await Promise.all([req1, req2]);

    // apidan gelen verileri değişkene aktar

    const covidData = res1.data.response[0];
    const countryData = res2.data[0];

    // ihtiyaç olan verileri al

    const payload = {
      day: covidData?.day,
      cases: covidData?.cases?.total,
      deaths: covidData?.deaths?.total,
      tests: covidData?.tests?.total,
      country: countryData?.name?.common,
      continent: countryData?.region,
      population: countryData?.population,
      capital: countryData?.capital[0],
      flag: countryData?.flags,
      currency: Object.entries(countryData?.currencies)?.[0]?.[1]?.name,
    };

    return payload;
  }
);
