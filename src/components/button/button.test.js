import { Button } from './button'

describe('<Button />', () => {
  test('shallow', () => {
    const wrapper = shallow(<Button
      text="some text"
    />);

    expect(wrapper).toMatchSnapshot();
  });

  test('shallow with fluid prop', () => {
    const wrapper = shallow(<Button
      text="some text"
      isFluid
    />);

    expect(wrapper).toMatchSnapshot();
  });

  test('shallow with transparent prop', () => {
    const wrapper = shallow(<Button
      text="some text"
      isTransparent
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
