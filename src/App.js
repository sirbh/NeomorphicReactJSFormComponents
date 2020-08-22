import React from 'react';
import './App.css';
import FormElement from '../src/Components/FormElement'
function App() {
  return (
    <div className="Form">
      <div className='FormData'>
         <FormElement type="Input"></FormElement>
         <FormElement type="Input"></FormElement>
         <FormElement type="Button"></FormElement>
         <div className='TextArea'>
            <FormElement type="TextArea"></FormElement>
            <FormElement type="Toggle"></FormElement>
         </div>
         <FormElement type="Radio"></FormElement>
         <FormElement type="Radio"></FormElement>
         <div className='TextArea'>
            <FormElement type="CheckButton"></FormElement>
            <FormElement type="CheckButton"></FormElement>
         </div>
      </div>
    </div>
  );
}

export default App;
