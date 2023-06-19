import React from 'react'
import { Button } from '../button/Button'
import './Lower.css'
import { STRING_0MIN } from '../../utils/strings'

const Lower = ({ orderList, parentArray, setParentArray, setOrderlist, variant, setButtonPopup , setTrigger}) => {

    if (variant === 'modal2') {
        return (
            <div className='lower-div'>
                <Button variant='close' label='Close' />
                <div style={{ float: 'right' }}>
                    <Button setTrigger={setTrigger} variant='button-6' label='Select task' />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='lower-div'>
                <Button variant='close' label='Close' />
                <div style={{ float: 'right' }}>
                    <Button setOrderlist={setOrderlist} parentArray={parentArray} setParentArray={setParentArray} orderList={orderList} variant='button-5' label='Log these time entries' />
                </div>
                <div style={{ float: 'right' }} className="min">{STRING_0MIN}</div>
            </div>
        )
    }
}

export default Lower