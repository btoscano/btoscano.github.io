import React from 'react';
import data from "../Dati";

import Testimonials from '../Components/Testimonials/Testimonials.js'

export default {
  title: 'Testimonials',
  component: Testimonials,
};

const Template = (args) => <Testimonials {...args}>
  </Testimonials>;

export const Default = Template.bind({});
Default.args = {
    source: data.testimonials.list
};
