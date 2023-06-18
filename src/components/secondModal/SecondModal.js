import './SecondModal.css'
import { CloseRounded } from '@mui/icons-material'
import Lower from '../lower-section/Lower'

export default function SecondModal(props) {

    return (props.trigger)
        ? (
            <div className='popup'>
                <div className='popup-inner'>
                    <button className='close-btn' onClick={() => props.setTrigger(false)}><CloseRounded /></button>
                    {props.children}
                    <Lower variant='modal2' setTrigger={props.setTrigger} />
                </div>
            </div>
        )
        : ''
}