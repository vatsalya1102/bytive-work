import './TopSection.css'

const TopSection = () => {
    return (
        <div className="top-bar">
            <div className='time-div top-item'>
                Time
            </div>
            <div className='timesheet-div top-item'>
                My timesheet
            </div>
            <div className='alltime-div top-item'>
                All time
            </div>
        </div>
    )
}

export default TopSection