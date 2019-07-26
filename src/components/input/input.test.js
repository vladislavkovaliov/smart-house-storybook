import { Input } from './Input'

describe('<Input />', () => {
  test('shallow', () => {
    const wrapper = shallow(
      <Input
        id="mock-id"
        name="mock-name"
        labelText="mock-label-text"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
