function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import { connect } from "@magento/venia-drivers";
import { compose } from 'redux';
import classify from "../../classify";
import { getAllCategories } from "../../actions/catalog";
import CategoryTree from "./categoryTree";

class MenuHeader extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isCreateAccountOpen: false,
      isForgotPasswordOpen: false,
      rootNodeId: null,
      currentPath: null
    });

    _defineProperty(this, "setCurrentPath", currentPath => {
      const path = currentPath.split('/').reverse();
      const rootNodeId = parseInt(path[0]);
      this.setState(() => ({
        rootNodeId: rootNodeId,
        currentPath: path
      }));
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.rootNodeId && props.rootCategoryId) {
      return _objectSpread({}, state, {
        rootNodeId: props.rootCategoryId
      });
    }

    return state;
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  get categoryTree() {
    const {
      props,
      setCurrentPath,
      state
    } = this;
    const {
      rootNodeId
    } = state;
    return rootNodeId ? React.createElement(CategoryTree, {
      rootNodeId: props.rootCategoryId,
      currentId: rootNodeId,
      updateRootNodeId: setCurrentPath
    }) : null;
  }

  render() {
    const {
      categoryTree
    } = this;
    return React.createElement(React.Fragment, null, categoryTree);
  }

}

const mapStateToProps = ({
  catalog
}) => {
  const {
    categories,
    rootCategoryId
  } = catalog;
  return {
    categories,
    rootCategoryId
  };
};

const mapDispatchToProps = dispatch => ({
  getAllCategories
});

export default compose(classify(), connect(mapStateToProps, mapDispatchToProps))(MenuHeader);
//# sourceMappingURL=menuHeader.js.map