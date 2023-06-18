import { projects } from '../../projects'
import { useState } from 'react'
import FirstModal from '../firstModal/FirstModal'
import { LogCard } from '../logCard/LogCard'
import { logData } from '../../data'
import Lower from '../lower-section/Lower'

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
        console.log(form);
        console.log(logData);
        clear();
    }

    const handleEntTimeChange = (event) => {
        const endTime = event.target.value;
        const startTime = form.startTime;

        const endTimeHoursMinutes = endTime.split(":");
        const startTimeHourMinutes = startTime.split(":");

        const hourdif = +endTimeHoursMinutes[0] - +startTimeHourMinutes[0];
        let minutedif = +endTimeHoursMinutes[1] - +startTimeHourMinutes[1];

        console.log(minutedif)

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
            <h2 className='heading'>Quickly Add Time Across All Your Project</h2>
            <div className="fields lower">
                <div>Project</div>
                <div>Date</div>
                <div>Start time</div>
                <div>End time</div>
            </div>
            <div className="fields-options lower">
                <select value={selectedValue} onChange={handleSelect}>
                    <option value="">-- Select --</option>
                    {projects.map((project, index) => (
                        <option key={index} value={project}>{project}</option>
                    ))}
                </select>
                <input type="date" style={{ width: '110px' }} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                <input type="time" value={form.startTime} onChange={(e) => setForm({ ...form, startTime: e.target.value })} />
                <input type="time" value={form.endTime} onChange={handleEntTimeChange} />
            </div>
            <div style={{ fontWeight: '400', margin: '10px 0' }}>Description</div>
            <textarea style={{ width: '100%', height: '80px' }} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <div style={{ margin: '10px 0 -5px -10px' }} className="addbtn"><button onClick={handleSubmit} style={{ fontSize: '15px' }} className='button-3'>Add</button></div>

            {
                orderList.map((order, index) => (
                    <LogCard setOrderlist={setOrderlist} orderList={orderList} numbering={index} key={index} project={(orderList.length !== 0) ? order.project : ''} date={orderList.length !== 0 ? order.date : ''} start={orderList.length !== 0 ? order.startTime : ''} hours={order.hourdif} minutes={order.minutedif} description={orderList.length !== 0 ? order.description.slice(0,7).concat("..") : ''} task="Hello" />
                ))
            }

            <Lower setOrderlist={setOrderlist} orderList={orderList} parentArray={parentArray} setParentArray={setParentArray} />

        </FirstModal>
    )
}