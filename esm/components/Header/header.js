function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import classify from "../../classify";
import { Link, resourceUrl, Route } from "@magento/venia-drivers";
import Icon from "../Icon";
import SearchIcon from 'react-feather/dist/icons/search';
import MenuIcon from 'react-feather/dist/icons/menu';
import CartTrigger from "./cartTrigger";
import UserTrigger from "./userTrigger";
import NavTrigger from "./navTrigger";
import SearchTrigger from "./searchTrigger";
const SearchBar = React.lazy(() => import("../SearchBar"));
import defaultClasses from "./header.css";
import Logo from "../Logo";
import MenuHeader from "../MenuHeader/menuHeader";

class Header extends Component {
  get searchIcon() {
    return React.createElement(Icon, {
      src: SearchIcon
    });
  }

  render() {
    const {
      searchOpen,
      classes,
      toggleSearch
    } = this.props;
    const rootClass = searchOpen ? classes.open : classes.closed;
    return React.createElement("header", {
      className: rootClass
    }, React.createElement("div", {
      className: classes.toolbar
    }, React.createElement("div", {
      className: classes.primaryActions
    }, React.createElement(NavTrigger, null, React.createElement(Icon, {
      src: MenuIcon,
      size: 35
    }))), React.createElement(Link, {
      to: resourceUrl('/')
    }, React.createElement(Logo, {
      classes: {
        logo: classes.logo
      }
    })), React.createElement("div", {
      className: classes.secondaryActions
    }, React.createElement(UserTrigger, null), React.createElement(CartTrigger, null))));
  }

}

_defineProperty(Header, "propTypes", {
  classes: PropTypes.shape({
    logo: PropTypes.string,
    primaryActions: PropTypes.string,
    root: PropTypes.string,
    open: PropTypes.string,
    closed: PropTypes.string,
    secondaryActions: PropTypes.string,
    toolbar: PropTypes.string
  }),
  searchOpen: PropTypes.bool,
  toggleSearch: PropTypes.func.isRequired
});

export default classify(defaultClasses)(Header);
//# sourceMappingURL=header.js.map