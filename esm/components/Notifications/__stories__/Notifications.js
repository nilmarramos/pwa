import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageIcon from 'react-feather/dist/icons/message-circle';
import { Notification, NotificationStack } from "../";
import "../../../index.css";
const stories = storiesOf('Notifications', module);

function MockPage({
  children
}) {
  const styles = {
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
  };
  return React.createElement("div", {
    style: styles.container
  }, React.createElement("header", {
    className: "mockHeader",
    style: styles.header
  }, "Header"), children);
}

stories.add('Success notification, click to dismiss', () => React.createElement(MockPage, null, React.createElement(NotificationStack, null, React.createElement(Notification, {
  type: "success",
  onClick: (e, dismiss) => dismiss()
}, "Click to dismiss."))));
stories.add('Warning notification, click to dismiss', () => React.createElement(MockPage, null, React.createElement(NotificationStack, null, React.createElement(Notification, {
  type: "warning",
  onClick: (e, dismiss) => dismiss()
}, "Click to dismiss."))));
stories.add('Error notification, click to dismiss', () => React.createElement(MockPage, null, React.createElement(NotificationStack, null, React.createElement(Notification, {
  type: "error",
  onClick: (e, dismiss) => dismiss()
}, "Click to dismiss."))));
stories.add('Warning notification with custom icon, cannot be dismissed', () => React.createElement(MockPage, null, React.createElement(NotificationStack, null, React.createElement(Notification, {
  type: "warning",
  icon: MessageIcon
}, "Nothing you can really do about me."))));
stories.add('Warning notification, dismiss automatically', () => React.createElement(MockPage, null, React.createElement(NotificationStack, null, React.createElement(Notification, {
  type: "warning",
  afterShow: (e, dismiss) => setTimeout(dismiss, 1000)
}, "Will dismiss in one second."))));
stories.add('Error notification, has side effect after dismiss', () => React.createElement(MockPage, null, React.createElement(NotificationStack, null, React.createElement(Notification, {
  type: "error",
  onClick: (e, dismiss) => dismiss(),
  afterDismiss: () => {
    const header = document.querySelector('.mockHeader');

    if (header) {
      header.innerText = 'Side effect!!!';
    }
  }
}, "Click to dismiss and change header text."))));
//# sourceMappingURL=Notifications.js.map