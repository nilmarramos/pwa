import React, { Component, Fragment } from 'react';
import { func, shape, string } from 'prop-types';
import { connect } from 'src/drivers';
import { compose } from 'redux';
import classify from 'src/classify';
import Icon from 'src/components/Icon';
import ArrowLeftIcon from 'react-feather/dist/icons/arrow-left';
import CloseIcon from 'react-feather/dist/icons/x';
import Trigger from 'src/components/Trigger';
import defaultClasses from './navHeader.css';
import {toggleCart} from "../../actions/cart";
import {toggleSignin} from "../../actions/app";

class NavHeader extends Component {
    static propTypes = {
        classes: shape({
            title: string
        }),
        onBack: func.isRequired,
        onClose: func.isRequired
    };

    onCloseSignin = () => {
      const {onClose, openSignin} = this.props
      onClose()
      openSignin(false)

}

    render() {
        const { classes, onBack, title } = this.props;

        return (
            <Fragment>
                <Trigger key="backButton" action={onBack}>
                    <Icon src={ArrowLeftIcon} />
                </Trigger>
                <h2 key="title" className={classes.title}>
                    <span>{title}</span>
                </h2>
                <Trigger key="closeButton" action={this.onCloseSignin}>
                    <Icon src={CloseIcon} />
                </Trigger>
            </Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => ({
  toggleCart,
  openSignin: (bol) => dispatch(toggleSignin(bol))
});

export default compose(
  classify(defaultClasses),
  connect(
    null,
    mapDispatchToProps
  )
)(NavHeader);

