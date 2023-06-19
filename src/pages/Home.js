import TopSection from '../components/top-section/TopSection'
import './Home.css'
import more from '../icons/more.png'
import { Button } from '../components/button/Button'
import { LogCard } from '../components/logCard/LogCard'
import { useEffect, useState } from 'react'
import { STRING_ALL_TIME, STRING_BILL_6H, STRING_BILLABLE_6H, STRING_FILTERED_TOTALS, STRING_LOGGED } from '../utils/strings'

function Home() {
  const [parentArray, setParentArray] = useState([]);

  useEffect(() => {
    
  },[parentArray])

  return (
    <>
      <TopSection />

      <div className='parent-div'>

        <div className="headers">
          <h3>{STRING_ALL_TIME}</h3>
          <div className="buttons-div">
            <button className='button-1'><img src={more} alt="" /></button>
            <Button parentArray={parentArray} setParentArray={setParentArray} variant='button-2' label='Star timer' />
            <Button variant='button-3' label='Log time' />
            <Button variant='button-4' label='' />
          </div>
        </div>

        <div className="infobox">
          <div>{STRING_FILTERED_TOTALS}</div>
          <div>{STRING_LOGGED}</div>
          <div>{STRING_BILLABLE_6H}</div>
          <div>{STRING_BILL_6H}</div>
        </div>

        {parentArray.map((item, index) => (
          <LogCard parentArray={parentArray} setParentArray={setParentArray} key={index} variant='homepage' day={item.day} date={item.date} project={item.project} user={item.user} description={item.description} task={item.task} start={item.startTime} end={item.endTime} hourdif={item.hourdif} minutedif={item.minutedif} />
        ))}

      </div>
    </>
  )
}

export default Home