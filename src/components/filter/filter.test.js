import Filter, { Label } from "./filter";

export const items = [
  {
    id: 'day',
    value: 'day'
  },
  {
    id: 'week',
    value: 'week'
  },
  {
    id: 'month',
    value: 'month'
  },
  {
    id: 'year',
    value: 'year'
  }
];

const onChange = jest.fn();

describe('<Filter />', () => {
  test('shallow()', () => {
    const wrapper = shallow(<Filter
      onChange={onChange}
      items={items}
      name="filter"
      defaultValue="day"
    />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should call onChange and update state', () => {
    const wrapper = shallow(<Filter
      onChange={onChange}
      items={items}
      name="filter"
      defaultValue={items[0].id}
    />);

    expect(wrapper.instance().state).toHaveProperty('currentValue', items[0].id);

    const event = {
      target: {
        id: items[1].id,
      }
    };

    wrapper.instance().onChange(event);

    expect(wrapper.instance().state).toHaveProperty('currentValue', items[1].id);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(event.target.id);

    expect(wrapper).toMatchSnapshot();
  });
});
