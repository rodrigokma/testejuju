import React from "react";
import YearOption from "../components/YearOption";
import { render } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import TestRenderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

describe("Year options component tests", () => {
  const yearOptionJsx = (
    <YearOption
      modelCode="5276"
      onChange={jest.fn()}
      years={[
        { nome: "2013 gasolina", codigo: "2013-1" },
        { nome: "2012 gasolina", codigo: "2012-1" },
        { nome: "2011 gasolina", codigo: "2011-1" },
      ]}
    />
  );
  const component = shallow(yearOptionJsx);

  test("renders component", () => {
    expect(component.exists()).toBe(true);
  });

  test("matches the snapshot", () => {
    const componentSnapshot = TestRenderer.create(yearOptionJsx);
    expect(componentSnapshot).toMatchSnapshot();
  });

  test("has a 'Choose a year' as first option", () => {
    const { getByTestId } = render(yearOptionJsx);

    expect(getByTestId("select-year")).toHaveTextContent("Choose a year");
  });

  test("Renders three year options", () => {
    expect(component.find("option")).toHaveLength(4);
  });
});
