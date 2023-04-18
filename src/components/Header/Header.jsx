import React, { useState } from 'react'
import './Header.css'
import { FaCalendar} from 'react-icons/fa'
import {IoIosBed} from 'react-icons/io'
import {BsFillPersonFill} from 'react-icons/bs'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
const Header = ({type}) => {
    const [openDate, setOpenDate] =useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions]= useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const handleOption = (name, operation) =>{
        setOptions( (prev) => {
            return {
            ...prev, 
            [name]: operation === 'increase' ? options[name] + 1 : options[name] -1
        }})
    }

  return (
    <div className='header'>
        <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
            { type !== 'list' &&
                <>
                <h1 className='headerTitle'>Find your next stay</h1>
            <p className="headerDesc">
                Search deals on hotels, homes, and much more...
            </p>
            <div className="headerSearch">
                <div className="headerSearchItem">
                <IoIosBed className='headerIcon'/>
                <input type="text" placeholder='Where are you going?' className='headerSearchInput'/>
                </div>
                <div className="headerSearchItem">
                <FaCalendar className='headerIcon'/>
                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, 'dd/MM/yyyy')} - ${format(date[0].endDate, 'dd/MM/yyyy')} `}</span>
                {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='datePicker'
                />}
                
                </div>
                <div className="headerSearchItem">
                <BsFillPersonFill className='headerIcon'/>
                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult • ${options.children} children • ${options.room} room `}</span>
                {openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adults</span>
                        <div className="optionsCounter">
                        <button className="optionCounterBtn" disabled={options.adult <= 1} onClick={() => handleOption('adult', 'decrease')}>-</button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button className="optionCounterBtn" 
                        onClick={() => handleOption('adult', 'increase')}>+</button>
                        </div>
                        
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionsCounter">
                        <button className="optionCounterBtn" disabled={options.children <= 0} onClick={() => handleOption('children', 'decrease')}>-</button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="optionCounterBtn" onClick={() => handleOption('children', 'increase')}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Rooms</span>
                        <div className="optionsCounter">
                        <button className="optionCounterBtn" disabled={options.room <= 1} onClick={() => handleOption('room', 'decrease')}> - </button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button className="optionCounterBtn" onClick={() => handleOption('room', 'increase')}>+</button>
                        </div>
                    </div>
                </div>}
                
                </div>
                <div className="headerSearchItem">
                <button className='headerBtn'>Search</button>
                </div>
            </div></>}
        </div>
        </div>
  )
}

export default Header