import React from 'react';
import MyFavouriteBorder from './MyFavouriteBorder';

export default {
  title: 'Components/MyFavouriteBorder',
  component: MyFavouriteBorder,
};

const Template = (args) => <MyFavouriteBorder {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconColor: 'black',
  disabled: false,
};