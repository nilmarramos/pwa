import React from 'react';
import { storiesOf } from '@storybook/react';
import Kebab from "../kebab";
import Section from "../section";
import "../../../index.css";
const stories = storiesOf('Mini Cart/Kebab', module);
const styles = {
  width: '150px',
  height: '150px',
  display: 'grid'
};
stories.add('Kebab', () => React.createElement("div", {
  style: styles
}, React.createElement(Kebab, null, React.createElement(Section, {
  icon: "Heart",
  text: "Section 1"
}), React.createElement(Section, {
  icon: "Edit2",
  text: "Section 2"
}), React.createElement(Section, {
  icon: "Trash",
  text: "Section 3"
}), React.createElement(Section, {
  text: "Non-icon Section"
}))));
//# sourceMappingURL=Kebab.js.map