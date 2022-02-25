import React from 'react';

import Header from '../Components/Header/Header.js'

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Light = Template.bind({});
Light.args = {
  backgroundColor: "light"
};

export const Error = Template.bind({});
Error.args = {
  backgroundColor: "red"
};

export const Dark = Template.bind({});
Dark.args = {
  backgroundColor: "dark"
};
