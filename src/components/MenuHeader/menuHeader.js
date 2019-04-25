import React, { PureComponent } from 'react';

import { connect } from 'src/drivers';
import { compose } from 'redux';
import classify from 'src/classify';

import { getAllCategories } from 'src/actions/catalog';
import CategoryTree from './categoryTree';

class MenuHeader extends PureComponent {

  state = {
    isCreateAccountOpen: false,
    isForgotPasswordOpen: false,
    rootNodeId: null,
    currentPath: null
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.rootNodeId && props.rootCategoryId) {
      return {
        ...state,
        rootNodeId: props.rootCategoryId
      };
    }

    return state;
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  setCurrentPath = currentPath => {
    const path = currentPath.split('/').reverse();
    const rootNodeId = parseInt(path[0]);

    this.setState(() => ({
      rootNodeId: rootNodeId,
      currentPath: path
    }));
  };

  get categoryTree() {
    const { props, setCurrentPath, state } = this;
    const { rootNodeId } = state;

    return rootNodeId ? (
      <CategoryTree
        rootNodeId={props.rootCategoryId}
        currentId={rootNodeId}
        updateRootNodeId={setCurrentPath}
      />
    ) : null;
  }


  render() {
    const {
      categoryTree,
    } = this;

    return (
        <>
          {categoryTree}
        </>
    );
  }
}
const mapStateToProps = ({ catalog }) => {
  const { categories, rootCategoryId } = catalog;
  return {
    categories,
    rootCategoryId
  };
};

const mapDispatchToProps = dispatch => ({
  getAllCategories,
});

export default compose(
  classify(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MenuHeader);

