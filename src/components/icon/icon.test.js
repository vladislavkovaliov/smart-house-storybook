import { Icon } from './icon'

describe('<Icon />', () => {
  test('shallow', () => {
    const wrapper = shallow(<Icon
      iconName="webcamera"
      state
    />);

    expect(wrapper).toMatchSnapshot();
  });

  test('shallow with fluid prop', () => {
    const wrapper = shallow(<Icon
      iconName="webcamera"
      state={false}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
