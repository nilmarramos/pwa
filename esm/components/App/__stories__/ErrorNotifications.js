function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { storiesOf } from '@storybook/react';
import "../../../index.css";
import ErrorNotifications from "../errorNotifications";
const stories = storiesOf('App/ErrorNotifications', module);

class MockPageWithErrors extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "styles", {
      container: {
        margin: '0 auto',
        width: 480,
        height: 600,
        border: '1px solid gray',
        position: 'relative'
      },
      header: {
        padding: '1rem',
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%',
        height: '3rem',
        background: 'lightgray'
      }
    });

    _defineProperty(this, "state", {
      text: 'Click errors to dismiss and show side effect',
      handledErrors: []
    });

    _defineProperty(this, "handleDismissError", error => {
      this.setState({
        text: `Dismissed ${error.message}`,
        handledErrors: [...this.state.handledErrors, error]
      });
    });
  }

  render() {
    const {
      handleDismissError,
      styles,
      state,
      props
    } = this;
    const {
      handledErrors,
      text
    } = state;
    const {
      errors
    } = props;
    return React.createElement("div", {
      style: styles.container
    }, React.createElement("header", {
      className: "mockHeader",
      style: styles.header
    }, "Header"), React.createElement(ErrorNotifications, {
      errors: errors.filter(record => !handledErrors.some(error => record.error === error)),
      onDismissError: handleDismissError
    }), React.createElement("h2", {
      style: {
        marginTop: '80px',
        textAlign: 'center'
      }
    }, text));
  }

}

stories.add('Displays stack of notifications and debug info', () => React.createElement(MockPageWithErrors, {
  errors: [{
    error: new Error('first error'),
    id: 'Error1',
    loc: 'stack trace here'
  }, {
    error: new Error('second error'),
    id: 'Error2',
    loc: 'stack trace here 2'
  }]
}));
//# sourceMappingURL=ErrorNotifications.js.map