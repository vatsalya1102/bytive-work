import { STRING_TIME, STRING_MY_TIMESHEET, STRING_ALL_TIME } from '../../utils/strings'
import './TopSection.css'

const TopSection = () => {
    return (
        <div className="top-bar">
            <div className='time-div top-item'>
                {STRING_TIME}
            </div>
            <div className='timesheet-div top-item'>
                {STRING_MY_TIMESHEET}
            </div>
            <div className='alltime-div top-item'>
                {STRING_ALL_TIME}
            </div>
        </div>
    )
}

export default TopSection