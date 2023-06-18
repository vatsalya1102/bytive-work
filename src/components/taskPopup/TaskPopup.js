import SecondModal from '../secondModal/SecondModal'
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { tasks } from '../../tasks'
import { useState } from 'react'
import './TaskPopup.css'

const TaskPopup = ({ buttonPopup, setButtonPopup, setOrderlist, orderList, numbering, task, setTaskState }) => {
    const [age, setAge] = useState("");
    const handleChange = (e) => {
        setAge(e.target.value);
        handleTask(e.target.value)
        setTaskState(e.target.value)
    };

    const handleTask = (val) => {
        setOrderlist(
            orderList.map((item, index) => {
                if (index === numbering) {
                    return { ...item, task: val }
                }
                else {
                    return item;
                }
            })
        )
    }

    return (
        <SecondModal trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2 className='heading'>Quickly Add Time Across All Your Project</h2>
            <div className='heading-sub'>You can pick a tast from the list below to associate with this time log</div>

            <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Tasks</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    value={age}
                    label="tasks"
                    onChange={handleChange}
                >
                    {tasks.map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>

        </SecondModal>
    )
}

export default TaskPopup