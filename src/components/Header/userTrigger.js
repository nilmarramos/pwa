import React, { Component } from 'react';
import { connect } from 'src/drivers';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { toggleCart } from 'src/actions/cart';
import { toggleDrawer, toggleSignin } from 'src/actions/app';

import Icon from 'src/components/Icon';
import UserIcon from 'react-feather/dist/icons/user';
import classify from 'src/classify';
import defaultClasses from './userTrigger.css';
import {isEmptyCartVisible, isMiniCartMaskOpen} from "../../selectors/cart";

export class Trigger extends Component {
    static propTypes = {
        children: PropTypes.node,
        classes: PropTypes.shape({
            root: PropTypes.string
        }),
        toggleCart: PropTypes.func.isRequired,
        itemsQty: PropTypes.number
    };

    get cartIcon() {

        return <Icon src={UserIcon} />;
    }

    teste = () => {
        this.props.openSignin()
        this.props.openNav()
    }

    render() {
        const {
            classes,
        } = this.props;
        const { cartIcon } = this;

        return (
            <button
                className={classes.root}
                aria-label="Toggle user"
                onClick={this.teste}
            >
                {cartIcon}
            </button>
        );
    }
}

const mapStateToProps = state => {
    const { isSignInOpen } = state.app;

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

export default compose(
    classify(defaultClasses),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Trigger);
