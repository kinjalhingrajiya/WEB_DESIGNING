import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useState } from 'react';

export default function Date1()
{
  const [date,setdate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })
  const [opendate,setopendate] = useState(false);
  return(<>
  <div className="container1">
  <span className="calender1" onClick={()=>{
      setopendate((prev)=>!prev)
  }}>
    {`${format(date.startDate, 'dd-MMM-yyyy')} - ${format(date.endDate, 'dd-MMM-yyyy')} `}
    </span>
  {opendate && <DateRangePicker className='daterange' 
        ranges={[date]}
        onChange={(ranges)=>{setdate(ranges.selection)}}
        minDate={new Date()}
        months={2}
        direction="horizontal"
      />}
  </div>
  </>)
}