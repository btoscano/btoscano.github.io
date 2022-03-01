import React from 'react';

import Row from '../Components/Row/Row.js'
import Column from '../Components/Column/Column.js'

export default {
  title: 'Row',
  component: Row,
};

const Template = (args) => <Row {...args}>
  </Row>;

export const Default = Template.bind({});
Default.args = {
};

export const Wrap = Template.bind({});
Wrap.margins = true
Wrap.args = {
  children: <>
    <Column margins={Wrap.margins} size={6}> jbkjdwbja</Column>
    <Column margins={Wrap.margins} size={2}> jb</Column>
    <Column margins={Wrap.margins} size={9}> jbkjdwbja</Column>
  </>,
  extraClass: "row--myClass"
};

export const FourEight = Template.bind({});
FourEight.args = {
  children: <>
  <Column size={4}> jbkjdwbja</Column>
  <Column size={8}> jb</Column>
</>
};
