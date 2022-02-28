import React from 'react';

import Grid from '../Components/Grid/Grid.js'

export default {
  title: 'Grid',
  component: Grid,
};

const Template = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
};


export const Wrap = Template.bind({});
Wrap.args = {
    columns: [5, 2, 9, 5, 7]
};

export const ExtraClass = Template.bind({});
ExtraClass.args = {
    columns: [5, 4],
    extraClass: "row--myClass"
};
