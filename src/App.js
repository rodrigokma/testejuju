import React, { useState, useEffect } from "react";
import "./App.css";
import BrandOption from "./components/BrandOptions";
import ModelOption from "./components/ModelOption";
import YearOption from "./components/YearOption";
import Results from "./components/Results";
import "./components/style.css";
import api from "./api/Api";

function App() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [info, setInfo] = useState([]);

  const [brandCode, setBrandCode] = useState("");
  const [modelCode, setModelCode] = useState("");
  const [yearCode, setYearCode] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get("/marcas").then((response) => {
      setBrands(response.data);
    });
  }, []);

  useEffect(() => {
    if (brandCode) {
      api
        .get(`/marcas/${brandCode}/modelos`)
        .then((response) => setModels(response.data.modelos));
    }
  }, [brandCode]);

  useEffect(() => {
    if (modelCode) {
      api
        .get(`/marcas/${brandCode}/modelos/${modelCode}/anos`)
        .then((response) => setYears(response.data));
    }
  }, [modelCode]);

  useEffect(() => {
    if (yearCode) {
      api
        .get(`/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`)
        .then((response) => {
          setInfo(response.data);
          setIsLoading(false);
        });
    }
  }, [yearCode]);

  return (
    <div className="App">
      <div className="all">
        <h2>Cars price in Brazil</h2>

        <BrandOption
          value={brandCode}
          onChange={(e) => setBrandCode(e.target.value)}
          brands={brands}
        />

        <ModelOption
          brandCode={brandCode}
          value={modelCode}
          onChange={(e) => setModelCode(e.target.value)}
          models={models}
        />

        <YearOption
          modelCode={modelCode}
          value={yearCode}
          onChange={(e) => setYearCode(e.target.value)}
          years={years}
        />

        <Results yearCode={yearCode} isLoading={isLoading} info={info} />
      </div>
    </div>
  );
}

export default App;
