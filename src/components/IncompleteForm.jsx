import '@styles/IncompleteForm.css';

const IncompleteForm = ({ message }) => {
  return (
    <div className='IncompleteForm'>
      <p className='IncompleteForm__text'>{message}</p>
    </div>
  )
}

export default IncompleteForm;