import React from 'react';
import MyFavourite from './MyFavourite';

export default {
  title: 'Components/MyFavourite',
  component: MyFavourite,
};

const Template = (args) => <MyFavourite {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconColor: 'red',
  disabled: false,
};