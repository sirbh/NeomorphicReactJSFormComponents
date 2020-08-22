import React from "react";
import Input from "../Components/Input/Input";
import Radio from '../Components/Radio/Radio'
import Toggle from '../Components/Toggel/Toggel'
import Button from './Button/Button'
import TextArea from './TextArea/TextArea'
import CheckButton from './Button/CheckButton'

const formElement = (props) => {
  switch (props.type) {
    case "Input": {
      return <Input></Input>;
    }
    case "CheckButton": {
      return <CheckButton></CheckButton>;
    }
    case "TextArea": {
      return <TextArea></TextArea>;
    }
    case "Radio": {
      return <Radio></Radio>;
    }
    case "Toggle": {
      return <Toggle></Toggle>;
    }
    case "Button": {
      return <Button></Button>;
    }
    default: {
      return "";
    }
  }
};

export default formElement;
