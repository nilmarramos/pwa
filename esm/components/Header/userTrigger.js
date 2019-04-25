function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { connect } from "@magento/venia-drivers";
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { toggleCart } from "../../actions/cart";
import { toggleDrawer, toggleSignin } from "../../actions/app";
import Icon from "../Icon";
import UserIcon from 'react-feather/dist/icons/user';
import classify from "../../classify";
import defaultClasses from "./userTrigger.css";
import { isEmptyCartVisible, isMiniCartMaskOpen } from "../../selectors/cart";
export class Trigger extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "teste", () => {
      this.props.openSignin();
      this.props.openNav();
    });
  }

  get cartIcon() {
    return React.createElement(Icon, {
      src: UserIcon
    });
  }

  render() {
    const {
      classes
    } = this.props;
    const {
      cartIcon
    } = this;
    return React.createElement("button", {
      className: classes.root,
      "aria-label": "Toggle user",
      onClick: this.teste
    }, cartIcon);
  }

}

_defineProperty(Trigger, "propTypes", {
  children: PropTypes.node,
  classes: PropTypes.shape({
    root: PropTypes.string
  }),
  toggleCart: PropTypes.func.isRequired,
  itemsQty: PropTypes.number
});

const mapStateToProps = state => {
  const {
    isSignInOpen
  } = state.app;
  return {
    isSignInOpen,
    isCartEmpty: isEmptyCartVisible(state),
    isMiniCartMaskOpen: isMiniCartMaskOpen(state)
  };
};

const mapDispatchToProps = dispatch => ({
  toggleCart,
  openNav: () => dispatch(toggleDrawer('nav')),
  openSignin: () => dispatch(toggleSignin(true))
});

export default compose(classify(defaultClasses), connect(mapStateToProps, mapDispatchToProps))(Trigger);
//# sourceMappingURL=userTrigger.js.map