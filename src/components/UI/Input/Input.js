<<<<<<< HEAD
import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props,ref) => {
=======
import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
>>>>>>> f6f6c7ca58fc7cfe189734dd6bb336bbe60a40ef
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

<<<<<<< HEAD
useImperativeHandle(ref,()=>{
    return{
        focus:activate
    }
})
=======
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
>>>>>>> f6f6c7ca58fc7cfe189734dd6bb336bbe60a40ef

  return (
    <div
      className={`${classes.control} ${
<<<<<<< HEAD
        props.isValid === false ? classes.invalid : ""
=======
        props.isValid === false ? classes.invalid : ''
>>>>>>> f6f6c7ca58fc7cfe189734dd6bb336bbe60a40ef
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
