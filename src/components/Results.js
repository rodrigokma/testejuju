import ScaleLoader from "react-spinners/ScaleLoader";

function Results(props) {
  return (
    <div>
      {props.yearCode &&
        (props.isLoading ? (
          <ScaleLoader color={"#FFFFFF"} />
        ) : (
          <div className="results">
            <p className="brand-name" data-testid="brand-info">
              Brand: {props.info.Marca}
            </p>
            <p className="model-name" data-testid="model-info">
              Model: {props.info.Modelo}
            </p>
            <p className="fuel-name" data-testid="fuel-info">
              Fuel:{" "}
              {props.info.Combustivel === "Gasolina"
                ? "Gasoline"
                : props.info.Combustivel}
            </p>
            <p className="price-value" data-testid="price-info">
              Price: {props.info.Valor}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Results;
