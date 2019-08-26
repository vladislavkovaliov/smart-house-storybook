import React from 'react';

import { storiesOf } from '@storybook/react';
import { Collapse } from './collapse';
import {select, text} from "@storybook/addon-knobs";
import {DeviceControl} from "../device-control/device-control";

storiesOf('Collapse', module)
  .add('Empty', () => {
    return (
      <div style={{ height: '300px', position: 'relative'}}>
        <Collapse />
      </div>
    );
  })
  .add('asda', () => {
    const items = [
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "wifi",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },
      {
        id: "uniq-id",
        iconName: "webcamera",
        date: "12/12/2019",
        deviceName: "Camera",
      },

    ];
    return (
      <div style={{ height: '300px', position: 'relative'}}>
        <Collapse items={items} renderFn={DeviceControl} />
      </div>
    );
  });
