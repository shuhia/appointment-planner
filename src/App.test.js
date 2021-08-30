import React from "react";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  describe("renders", () => {
    it("correctly", () => {
      shallow(<App />);
    });
    const wrapper = shallow(<App />);

    describe("children", () => {
      it("renders nav correctly", () => {
        expect(wrapper.find("nav").length).toEqual(1);
      });

      it("renders main correctly", () => {
        expect(wrapper.find("main").length).toEqual(1);
      });

      describe("main", () => {
        it("renders ContactsPage", () => {
          expect(wrapper.find("ContactsPage").length).toEqual(1);
        });

        it("renders AppointmentsPage", () => {
          expect(wrapper.find("AppointmentsPage").length).toEqual(1);
        });
      });
    });
  });
});
