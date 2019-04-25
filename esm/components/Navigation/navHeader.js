function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment } from 'react';
import { func, shape, string } from 'prop-types';
import { connect } from "@magento/venia-drivers";
import { compose } from 'redux';
import classify from "../../classify";
import Icon from "../Icon";
import ArrowLeftIcon from 'react-feather/dist/icons/arrow-left';
import CloseIcon from 'react-feather/dist/icons/x';
import Trigger from "../Trigger";
import defaultClasses from "./navHeader.css";
import { toggleCart } from "../../actions/cart";
import { toggleSignin } from "../../actions/app";

class NavHeader extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onCloseSignin", () => {
      const {
        onClose,
        openSignin
      } = this.props;
      onClose();
      openSignin(false);
    });
  }

  render() {
    const {
      classes,
      onBack,
      title
    } = this.props;
    return React.createElement(Fragment, null, React.createElement(Trigger, {
      key: "backButton",
      action: onBack
    }, React.createElement(Icon, {
      src: ArrowLeftIcon
    })), React.createElement("h2", {
      key: "title",
      className: classes.title
    }, React.createElement("span", null, title)), React.createElement(Trigger, {
      key: "closeButton",
      action: this.onCloseSignin
    }, React.createElement(Icon, {
      src: CloseIcon
    })));
  }

}

_defineProperty(NavHeader, "propTypes", {
  classes: shape({
    title: string
  }),
  onBack: func.isRequired,
  onClose: func.isRequired
});

const mapDispatchToProps = dispatch => ({
  toggleCart,
  openSignin: bol => dispatch(toggleSignin(bol))
});

export default compose(classify(defaultClasses), connect(null, mapDispatchToProps))(NavHeader);
//# sourceMappingURL=navHeader.js.map