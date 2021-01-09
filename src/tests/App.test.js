import React from "react";
import App from "../App";
import { render, act, waitFor } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import TestRenderer from "react-test-renderer";
import MockAdapter from "axios-mock-adapter";
// jest.mock("../api/Api");
import Api from "../api/Api";
import { fireEvent } from "@testing-library/react";
import BrandOption from "../components/BrandOptions";
import mockAxios from "axios";

Enzyme.configure({ adapter: new Adapter() });

const apiMock = new MockAdapter(Api);
// const apiMock = jest.mock(Api);

describe("App component tests", () => {
  test("renders component", async () => {
    const apiResponse = [
      { nome: "chevrolet", codigo: "93" },
      { nome: "nissan", codigo: "92" },
    ];

    const apiResponse2 = [
      { nome: "corsa", codigo: "72" },
      { nome: "celta", codigo: "43" },
      { nome: "malibu", codigo: "32" },
    ];

    apiMock.onGet("/marcas").reply(200, apiResponse);
    // apiMock.onGet("/marcas/93/modelos").reply(200, apiResponse2);

    const component = <App />;

    const { getByText, getByTestId } = render(component);

    // await waitFor(() =>
    //   expect(mockAxios.get).toHaveBeenCalledWith(
    //     "https://parallelum.com.br/fipe/api/v1/carros/marcas"
    //   )
    // );
    await waitFor(getByTestId("select-model").toBeTruthy());

    act(() => {
      fireEvent.click(getByText("Select a brand"));
    });

    fireEvent.click(getByText("chevrolet"));

    // expect(appJsx.exists()).toBe(true);
  });
});
