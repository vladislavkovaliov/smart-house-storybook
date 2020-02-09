import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Filter from './filter';

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

storiesOf('Filter', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('basic <Filter />', () => {
    return (
      <Filter
        items={items}
        name="filter"
        onChange={action('onChange')}
        defaultValue="day"
      />
    );
  });
