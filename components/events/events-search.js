import { useRef } from 'react'

import Button from '../ui/button'
import classes from './events-search.module.css'

function EventsSearch(props) {
  const yearInputRef = useRef()
  const monthInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div  className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearInputRef}>
            <option>2021</option>
            <option>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInputRef}>
            <option value='1'>Janvier</option>
            <option value='2'>Fevrier</option>
            <option value='3'>Mars</option>
            <option value='4'>Avril</option>
            <option value='5'>Mai</option>
            <option value='6'>Juin</option>
            <option value='7'>Juillet</option>
            <option value='8'>Aout</option>
            <option value='9'>Septembre</option>
            <option value='10'>Octobre</option>
            <option value='11'>Novebre</option>
            <option value='12'>Decembre</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  )
}

export default EventsSearch;
