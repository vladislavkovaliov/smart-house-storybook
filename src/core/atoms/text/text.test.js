import Text from './text';

describe('<Text />', () => {
  test('shallow', () => {
    const wrapper = shallow(
      <Text
        text="mock-text"
        fontSize={13}
        color="red"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
