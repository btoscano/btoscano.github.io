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
Wrap.args = {
  children: <>
    <Column size={6}/>
    <Column size={2}/> 
    <Column size={9}/> 
  </>
};

export const ExtraClass = Template.bind({});
ExtraClass.args = {
    extraClass: "row--myClass"
};
