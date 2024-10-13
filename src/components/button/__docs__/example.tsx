import React from "react";
import CustomButton, { CustomButtonProps } from "../button"; 
function Example(props: CustomButtonProps){
 return(
 <CustomButton
 text={props.text}
 bgcolor={props.bgcolor}
 txtcolor={props.txtcolor}
 disabled={props.disabled}
 size={props.size}
 onClick={props.onClick}
 />
 )
}
export default Example