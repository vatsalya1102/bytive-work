import { AvTimer } from '@mui/icons-material'
import { MoreHoriz } from '@mui/icons-material'
import './Button.css'
import { useState } from 'react'
import { ProjectPopup } from '../projectPopup/ProjectPopup.js'

export const Button = ({ label, variant, parentArray, setParentArray, orderList, setOrderlist, setTrigger, handleButtonClick }) => {
    const [buttonPopup, setButtonPopup] = useState(false);

    const handleModal = () => {
        setButtonPopup(true)
    }

    const handleParentList = () => {
        setParentArray(parentArray.concat(orderList));
        setOrderlist([])
    }

    if (variant === 'button-2') {
        return (<>
            <button onClick={handleModal} className={variant}><span><AvTimer /></span>{label}</button>
            <ProjectPopup parentArray={parentArray} setParentArray={setParentArray} buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} />
        </>
        )
    }

    else if (variant === 'button-3') {
        return (
            <button className={variant}><span><AvTimer /></span>{label}</button>
        )
    }

    else if (variant === 'button-4') {
        return (
            <button className={variant}><span><MoreHoriz /></span>{label}</button>
        )
    }

    else if (variant==='close'){
        return(
            <button className={variant}>{label}</button>
        )
    }

    else if (variant==='button-5'){
        return(
            <button onClick={handleParentList} className={variant}>{label}</button>
        )
    }

    else if (variant==='button-6'){
        return(
            <button onClick={() => setTrigger(false)} className={variant}>{label}</button>
        )
    }

    else if(variant==='danger'){
        return(
            <button className={variant}>{label}</button>
        )
    }
}
