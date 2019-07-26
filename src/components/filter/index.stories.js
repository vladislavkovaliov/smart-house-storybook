import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Filter from './filter';

const items = [
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

storiesOf('Filter', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('<Filter />', () => {
    return (
      <Filter
        reset={boolean('reset', false)}
        items={items}
        name="filter"
        onChange={action('onChange')}
        defaultValue="day"
      />
    );
  });
