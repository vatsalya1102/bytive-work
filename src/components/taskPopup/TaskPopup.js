import SecondModal from '../secondModal/SecondModal'
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { tasks } from '../../tasks'
import { useState } from 'react'
import './TaskPopup.css'
import { STRING_CHOOSE_TASK, STRING_TASK_DESC, STRING_TASKS } from '../../utils/strings.js'

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
            <h2 className='heading'>{STRING_CHOOSE_TASK}</h2>
            <div className='heading-sub'>{STRING_TASK_DESC}</div>

            <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">{STRING_TASKS}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    value={age}
                    label="tasks"
                    onChange={handleChange}
                >
                <input type="text" placeholder='Search' className='search' />
                    {tasks.map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>

        </SecondModal>
    )
}

export default TaskPopup