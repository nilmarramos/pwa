import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from "../header";
import defaultClasses from "../header.css";
import "../../../index.css";
import { Adapter } from "@magento/venia-drivers";
import store from "../../../store";
const stories = storiesOf('Header', module);
const apiBase = new URL('/graphql', location.origin).toString();

const noop = () => {};

stories.add('Search Bar Closed', () => React.createElement(Adapter, {
  apiBase: apiBase,
  apollo: {
    link: Adapter.apolloLink(apiBase)
  },
  store: store
}, React.createElement(Header, {
  classes: defaultClasses,
  searchOpen: false,
  toggleSearch: noop
})));
stories.add('Search Bar Open', () => React.createElement(Adapter, {
  apiBase: apiBase,
  apollo: {
    link: Adapter.apolloLink(apiBase)
  },
  store: store
}, React.createElement(Header, {
  classes: defaultClasses,
  searchOpen: true,
  toggleSearch: noop
})));
//# sourceMappingURL=header.js.map