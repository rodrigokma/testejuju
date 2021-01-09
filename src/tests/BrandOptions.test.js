import React from "react";
import BrandOptions from "../components/BrandOptions";
import { render } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import TestRenderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

describe("Brand options component tests", () => {
  const brandOptionsJsx = (
    <BrandOptions
      onChange={jest.fn()}
      brands={[
        { nome: "chevrolet", codigo: "93" },
        { nome: "nissan", codigo: "92" },
      ]}
    />
  );

  const component = shallow(brandOptionsJsx);

  test("renders component", () => {
    expect(component.exists()).toBe(true);
  });

  test("matches the snapshot", () => {
    const componentSnapshot = TestRenderer.create(brandOptionsJsx);
    expect(componentSnapshot).toMatchSnapshot();
  });

  test("has a 'Select a brand' as first option", () => {
    const { getByTestId } = render(brandOptionsJsx);

    expect(getByTestId("select-brand")).toHaveTextContent("Select a brand");
  });

  test("renders two brand options", () => {
    expect(component.find("option")).toHaveLength(3);
  });
});
