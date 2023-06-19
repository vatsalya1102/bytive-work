import { projects } from '../../projects'
import { useState } from 'react'
import FirstModal from '../firstModal/FirstModal'
import { LogCard } from '../logCard/LogCard'
import Lower from '../lower-section/Lower'
import './ProjectPopup.css'
import { STRING_ADD, STRING_DATE, STRING_DESCRIPTION, STRING_END_TIME, STRING_PROJECT, STRING_SELECT, STRING_START_TIME, STRING_TIME_LOG } from '../../utils/strings'

export const ProjectPopup = ({ buttonPopup, setButtonPopup, parentArray, setParentArray }) => {

    const username = 'Srishti';
    const [orderList, setOrderlist] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const initialForm = {
        project: "",
        day: '',
        date: "",
        startTime: "",
        endTime: "",
        timeSpent: "",
        description: '',
        user: username,
        hourdif: '',
        minutedif: '',
        task: ''
    }
    const [form, setForm] = useState(initialForm);

    const handleSelect = (e) => {
        setSelectedValue(e.target.value)
        setForm({ ...form, project: e.target.value })
    }

    const clear = () => {
        setForm(initialForm);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setOrderlist(prev =>
            [...prev, { ...form }]
        )
        clear();
    }

    const handleEntTimeChange = (event) => {
        const endTime = event.target.value;
        const startTime = form.startTime;

        const endTimeHoursMinutes = endTime.split(":");
        const startTimeHourMinutes = startTime.split(":");

        const hourdif = +endTimeHoursMinutes[0] - +startTimeHourMinutes[0];
        let minutedif = +endTimeHoursMinutes[1] - +startTimeHourMinutes[1];

        if (minutedif < 0) minutedif = 60 - (Math.abs(minutedif))

        setForm(prev => {
            return {
                ...prev,
                endTime,
                hourdif,
                minutedif
            }
        })
    }

    return (
        <FirstModal trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2 className='heading'>{STRING_TIME_LOG}</h2>
            <div className="fields lower">
                <div>{STRING_PROJECT}</div>
                <div>{STRING_DATE}</div>
                <div>{STRING_START_TIME}</div>
                <div>{STRING_END_TIME}</div>
            </div>
            <div className="fields-options lower">
                <select value={selectedValue} onChange={handleSelect}>
                    <option value="">{STRING_SELECT}</option>
                    {projects.map((project, index) => (
                        <option key={index} value={project}>{project}</option>
                    ))}
                </select>
                <input type="date" style={{ width: '110px' }} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                <input type="time" value={form.startTime} onChange={(e) => setForm({ ...form, startTime: e.target.value })} />
                <input style={{ position: 'relative', left: '35px' }} type="time" value={form.endTime} onChange={handleEntTimeChange} />
            </div>
            <div className='project-desc'>{STRING_DESCRIPTION}</div>
            <textarea className='desc-area' value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            {
                form.date !== '' && form.startTime !== '' && form.endTime !== '' && form.project !== '' && form.description !== '' ? (
                    <div className="addbtn"><button onClick={handleSubmit} style={{ fontSize: '15px' }} className='button-3'>{STRING_ADD}</button></div>
                ) : (
                    <div className="addbtn"><button disabled style={{ fontSize: '15px' }} className='button-3'>{STRING_ADD}</button></div>
                )
            }

            {
                orderList.map((order, index) => (
                    <LogCard setOrderlist={setOrderlist} orderList={orderList} numbering={index} key={index} project={(orderList.length !== 0) ? order.project : ''} date={orderList.length !== 0 ? order.date : ''} start={orderList.length !== 0 ? order.startTime : ''} hours={order.hourdif} minutes={order.minutedif} description={orderList.length !== 0 ? order.description.slice(0, 7).concat("..") : ''} />
                ))
            }

            <Lower setOrderlist={setOrderlist} orderList={orderList} parentArray={parentArray} setParentArray={setParentArray} />

        </FirstModal>
    )
}