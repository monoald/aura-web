import React from 'react';
import '@styles/Form.css';

const Form = ({ formInfo, handleSubmit }) => {

  return (
    <form name={formInfo.name} action='/' className='form' ref={formInfo.ref}>
      <h2 className='form__title'>{formInfo.title}</h2>

      {formInfo.inputs.map((input) => (
        <div className='form__item' key={input.name}>
          <label htmlFor={input.name} className="form__subtitle">{input.title}</label>
          <input type={input.type} name={input.name} placeholder={input.placeholder} className="form__input" required/>
        </div>
      ))}

      {formInfo.select && (
        <div className='form__item'>
          <label htmlFor={formInfo.select.name} className="form__subtitle">{formInfo.select.title}</label>
          <select name={formInfo.select.name} className="form__input form__select" required>
            
            {formInfo.select.options.map((option) => (
              <option key={option.value} value={option.value} selected={option.selected}>{option.text}</option>
            ))}

          </select>
        </div>
      )}

      <input type='submit' 
        className='form__submit' 
        value='Send'
        onClick={event => {
          event.preventDefault();
          handleSubmit();
        }}
      />
    </form>
  )
}

export default Form;