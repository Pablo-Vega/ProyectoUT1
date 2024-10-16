import React from "react";
import MyButton from "./MyButton";

export default {
  title: "Components/MyButton",
  component: MyButton,
};

const Template = (args) => <MyButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Click Me",
  textColor: "#000",
  backgroundColor: "#fff",
  borderColor: "#000",
  borderWidth: "2px",
  size: "medium",
  hoverTextColor: "#fff",
  hoverBackgroundColor: "#000",
  disabled: false,
};
