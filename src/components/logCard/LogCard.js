import './LogCard.css'
import { Cancel } from '@mui/icons-material'
import { CheckCircle } from '@mui/icons-material'
import { Button } from '../button/Button'
import { CloseRounded } from '@mui/icons-material'
import { useState } from 'react'
import TaskPopup from '../taskPopup/TaskPopup'

export const LogCard = ({ setOrderlist, orderList, numbering, variant, day, date, project, user, description, task, start, end, hours, minutes, hourdif, minutedif, parentArray, setParentArray }) => {

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
          <div style={{ margin: '0 82px 0 0' }}>Project</div>
          <div style={{ margin: '0 70px 0 0' }}>Who</div>
          <div style={{ margin: '0 35px 0 0' }}>Description</div>
          <div style={{ margin: '0 74px 0 0' }}>Task list</div>
          <div style={{ margin: '0 80px 0 0' }}>Start</div>
          <div style={{ margin: '0 72px 0 0' }}>End</div>
          <div style={{ margin: '0 50px 0 0' }}>Billable</div>
          <div style={{ margin: '0 70px 0 0' }}>Billed</div>
          <div style={{ margin: '0 82px 0 0' }}>Time</div>
          <div>Hours</div>
        </div>
        <div className="fields lower">
          <div>{project}</div>
          <div>{user}</div>
          <div>{description}</div>
          <div>{task}</div>
          <div>{start}</div>
          <div style={{margin: '0 0 0 -20px'}}>{end}</div>
          <div><CheckCircle style={{ color: "rgba(4, 210, 0, 1)" }} /></div>
          <div><Cancel /></div>
          <div style={{ position: 'relative', left: '-20px' }}>{`${hourdif}h${minutedif}min`}</div>
          <div style={{ position: 'relative', left: '-20px' }}>{hourdif}</div>
        </div>
      </>
      ) : (
        <>
          <div className="fields upper">
            <div style={{ margin: '0 55px 0 0' }}>Project</div>
            <div style={{ margin: '0 85px 0 0' }}>Date</div>
            <div style={{ margin: '0 16px 0 0' }}>Start time</div>
            <div style={{ margin: '0 16px 0 0' }}>Hours</div>
            <div style={{ margin: '0 16px 0 0' }}>Minutes</div>
            <div style={{ margin: '0 16px 0 0' }}>Discription</div>
            <div style={{ margin: '0 70px 0 0' }}>Task</div>
            <div>Billable</div>
          </div>
          <div className="fields lower">
            <div>{project}</div>
            <div>{date}</div>
            <div>{start}</div>
            <div>{hours}</div>
            <div>{minutes}</div>
            <div>{description}</div>
            <div style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={handleModal}>{(!taskState) ? 'Set task' : (taskState)}</div>
            <TaskPopup setTaskState={setTaskState} task={task} setOrderlist={setOrderlist} orderList={orderList} numbering={numbering} buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} />
            <div>Billable</div>
            <Button variant='danger' label={<CloseRounded />} />
          </div>
        </>
      )}
    </div>
  )
}
