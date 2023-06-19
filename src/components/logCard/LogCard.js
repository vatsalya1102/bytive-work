import './LogCard.css'
import { Cancel } from '@mui/icons-material'
import { CheckCircle } from '@mui/icons-material'
import { Button } from '../button/Button'
import { CloseRounded } from '@mui/icons-material'
import { useState } from 'react'
import TaskPopup from '../taskPopup/TaskPopup'
import { STRING_PROJECT, STRING_DATE, STRING_WHO, STRING_DESCRIPTION, STRING_TIME, STRING_TASKLIST, STRING_END, STRING_START, STRING_BILLABLE, STRING_BILLED, STRING_START_TIME, STRING_HOURS, STRING_MINUTES, STRING_TASK } from '../../utils/strings.js'

export const LogCard = ({ setOrderlist, orderList, numbering, variant, day, date, project, user, description, task, start, end, hours, minutes, hourdif, minutedif, order }) => {

  const [taskState, setTaskState] = useState('');

  const [buttonPopup, setButtonPopup] = useState(false);

  const handleModal = () => {
    setButtonPopup(true)
  }

  const forDay = () => {
    const todayDate = new Date(date);
    const dayName = todayDate.toLocaleDateString('en-US', { weekday: 'long' })
    return dayName;
  }

  const forMonth = () => {
    const todayDate = new Date(date);
    const monthName = todayDate.toLocaleDateString('en-US', { month: 'long' });
    return monthName;
  }

  return (
    <div className="cards-parent">

      {variant === 'homepage' ? (<>
        <h2 className='dayAndDate'>{`${forDay()}, ${date.split('-')[2]} ${forMonth()}`}</h2>
        <div className="fields upper">
          <div>{STRING_PROJECT}</div>
          <div>{STRING_WHO}</div>
          <div>{STRING_DESCRIPTION}</div>
          <div>{STRING_TASKLIST}</div>
          <div>{STRING_START}</div>
          <div>{STRING_END}</div>
          <div>{STRING_BILLABLE}</div>
          <div>{STRING_BILLED}</div>
          <div>{STRING_TIME}</div>
          <div>{STRING_HOURS}</div>
        </div>
        <div className="fields lower">
          <div>{project}</div>
          <div style={{ marginLeft: '-22px' }}>{user}</div>
          <div>{description.slice(0,4).concat("..")}</div>
          <div style={{ paddingLeft: '30px' }}>{task}</div>
          <div>{start}</div>
          <div style={{ position: 'relative', right: '20px' }}>{end}</div>
          <div style={{ position: 'relative', right: '20px' }}><CheckCircle style={{ color: "rgba(4, 210, 0, 1)" }} /></div>
          <div style={{ position: 'relative', right: '10px' }}><Cancel /></div>
          <div className='time'>{`${hourdif}h${minutedif}min`}</div>
          <div className='time'>{hourdif}</div>
        </div>
      </>
      ) : (
        <>
          <div className="fields upper">
            <div>{STRING_PROJECT}</div>
            <div>{STRING_DATE}</div>
            <div>{STRING_START_TIME}</div>
            <div>{STRING_HOURS}</div>
            <div>{STRING_MINUTES}</div>
            <div>{STRING_DESCRIPTION}</div>
            <div>{STRING_TASK}</div>
            <div>{STRING_BILLABLE}</div>
          </div>
          <div className="fields lower">
            <div>{project}</div>
            <div style={{ position: 'relative', right: '20px' }}>{date}</div>
            <div style={{ position: 'relative', right: '40px' }}>{start}</div>
            <div>{hours}</div>
            <div style={{ position: 'relative', left: '40px' }}>{minutes}</div>
            <div style={{ position: 'relative', left: '73px' }}>{description.slice(0,7).concat("..")}</div>
            <div className="task-popup" onClick={handleModal}>{(!taskState) ? 'Set task' : (taskState)}</div>
            <TaskPopup setTaskState={setTaskState} task={task} setOrderlist={setOrderlist} orderList={orderList} numbering={numbering} buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} />
            <div style={{ position: 'relative', left: '45px' }}>{STRING_BILLABLE}</div>
            <Button variant='danger' label={<CloseRounded />} />
          </div>
        </>
      )}
    </div>
  )
}
