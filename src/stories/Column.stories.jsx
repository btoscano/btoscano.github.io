import React from 'react';

import Column from '../Components/Column/Column.js'

export default {
  title: 'Column',
  component: Column,
};

const Template = (args) => <Column {...args} />;

export const Default = Template.bind({});
Default.args = {
};

