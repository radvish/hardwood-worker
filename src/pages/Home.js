import React, { useEffect, useRef } from 'react'
import basketball_court from '../images/misc/bball_court.png'
import { Link } from "react-router-dom"

const Home = () => {

    const checkTDIH = ({givenDate}) => {

    }

    const todayIs = useRef('');

    useEffect(() => {
        const temp = new Date();
        console.log('temp', temp)
    
        todayIs.current = ''.concat(temp.getMonth() < 9 ? ''.concat('0',temp.getMonth() + 1) : temp.getMonth() +1, temp.getDate() < 10 ? ''.concat('0',temp.getDate()) : temp.getDate());
        console.log('todayIs', todayIs)
    }, [])
    
  return (
    <div className='mainDiv mx-0 px-0'>
        <div className='col1'>
            <h1 style={{fontSize : '72px', lineHeight: '100%'}}>
                hardwood worker
            </h1>
            <p>/ˈhɑːdwʊd ˈwəːkə/</p> 

            <span style={{fontSize: '1.3rem', fontWeight: '200'}}>COUNTABLE NOUN</span >
            <p style={{fontSize: '1.1rem'}}>Persons involved in work that takes place on professional basketball courts, commonly made of maple wood. (colloquial) A basketball player.</p>

            <span><b>source:</b> hardwoodworker.com</span>

            <div style={{ width: '100%', display: 'block'}}>
                <Link to={`/thisdayinhistory/`} id='abcd'>this day in History</Link>
            </div>
        </div>

        <div className='col2'>

            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

            <img src={basketball_court} alt='a basketball court' style={{width: '80%', marginLeft: 'auto'}}></img>

            </div>
            

            

        </div>
    </div>
  )
}

export default Home
/* {this.props.params.id.length>0 ? this.props.params.id : todayIs} */