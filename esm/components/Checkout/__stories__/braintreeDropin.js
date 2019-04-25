import React from 'react';
import { storiesOf } from '@storybook/react';
import BraintreeDropin from "../braintreeDropin";
import "../../../index.css";
const stories = storiesOf('Checkout/BraintreeDropin', module);
stories.add('As Appears in Checkout', () => {
  const styles = {
    width: '360px'
  };
  return React.createElement("div", {
    style: styles
  }, React.createElement(BraintreeDropin, {
    onError: () => {},
    onSuccess: () => {}
  }));
});
//# sourceMappingURL=braintreeDropin.js.map