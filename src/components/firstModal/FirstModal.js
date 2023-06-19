import './FirstModal.css'
import { CloseRounded } from '@mui/icons-material'

export default function FirstModal(props) {

    return (props.trigger)
        && (
            <div className='popup'>
                <div className='popup-inner'>
                    <button className='close-btn' onClick={() => props.setTrigger(false)}><CloseRounded /></button>
                    {props.children}
                </div>
            </div>
        )       
}