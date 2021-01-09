import React from "react";
import ModelOption from "../components/ModelOption";
import { render } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import TestRenderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

describe("Model options component", () => {
  const modelOptionJsx = (
    <ModelOption
      brandCode="93"
      onChange={jest.fn()}
      models={[
        { nome: "corsa", codigo: "72" },
        { nome: "celta", codigo: "43" },
        { nome: "malibu", codigo: "32" },
      ]}
    />
  );

  const component = shallow(modelOptionJsx);

  test("renders component", () => {
    expect(component.exists()).toBe(true);
  });

  test("matches the snapshot", () => {
    const componentSnapshot = TestRenderer.create(modelOptionJsx);
    expect(componentSnapshot).toMatchSnapshot();
  });

  test("has a 'Select a model' as first option", () => {
    const { getByTestId } = render(modelOptionJsx);

    expect(getByTestId("select-model")).toHaveTextContent("Choose a model");
  });

  test("renders three model options", () => {
    expect(component.find("option")).toHaveLength(4);
  });
});
