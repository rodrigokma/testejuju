import React from "react";
import Results from "../components/Results";
import { render } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import TestRenderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

describe("Results component tests", () => {
  const resultsJsx = (
    <Results
      yearCode="2013-1"
      isLoading={false}
      info={{
        Valor: "R$ 64.694,00",
        Marca: "GM - Chevrolet",
        Modelo: "MALIBU LTZ 2.4 16V 171cv 4p",
        Combustivel: "Gasolina",
      }}
    />
  );

  const component = shallow(resultsJsx);

  test("renders component", () => {
    expect(component.exists()).toBe(true);
  });

  test("matches the snapshot", () => {
    const componentSnapshot = TestRenderer.create(resultsJsx);
    expect(componentSnapshot).toMatchSnapshot();
  });

  test("properly renders the received results", () => {
    const { getByTestId } = render(resultsJsx);

    expect(getByTestId("brand-info")).toHaveTextContent("GM - Chevrolet");
    expect(getByTestId("model-info")).toHaveTextContent(
      "MALIBU LTZ 2.4 16V 171cv 4p"
    );
    expect(getByTestId("fuel-info")).toHaveTextContent("Gasoline");
    expect(getByTestId("price-info")).toHaveTextContent("R$ 64.694,00");
  });
});
