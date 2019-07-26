import Text from './text';

describe('<Text />', () => {
  test('shallow', () => {
    const wrapper = shallow(
      <Text
        text="mock-text"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
