import Switch from './switch';

describe('<Switch />', () => {
  test('shallow()', () => {
    const wrapper = shallow(<Switch
      id="__id__"
      onChange={jest.fn}
      isEnabled />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
