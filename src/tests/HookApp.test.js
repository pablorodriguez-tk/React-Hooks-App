import { shallow } from "enzyme";
import HookApp from "../HookApp";

describe("Pruebas en <HookApp/>", () => {
  const wrapper = shallow(<HookApp />);
  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
