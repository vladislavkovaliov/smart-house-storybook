import React  from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { PageSettingModal } from './page-setting-modal';
import {SmartHouseModal} from "../../components/modal/modal";
import { Switch } from '../../../dist/bundle';

class PageSetting extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    console.log(Switch);
    return (
      <div>
        <Switch onChange={() => {}}/>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <PageSettingModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          onConfirm={action('onConfirm')}
          onClose={action('onClose')}
        />
      </div>
    );
  }
}

storiesOf('PageSettingModal', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('<PageSettingModal />', function() {
    return (
      <PageSetting />
    );
  });
