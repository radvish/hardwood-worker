import React, {useEffect, useState, useRef} from 'react'
import teamCodes from '../components/TeamCodes'
import TeamMenuOption from '../components/TeamMenuOption'
import Results from '../components/Results'
import NONE from '../images/logos/NONE.png'
import { setData } from '../components/FetchData'
import {Link} from 'react-router-dom'

const ThisDayInHistory = () => {

  const [selected, setSelected] = useState({teamId: 1610612749,
  triCode: '',
  teamName: '',
  simpleName: '',
  location: '',
  logo : NONE })
  // const [good, setGood] = useState(true)
  const [loading, setLoading] = useState(true);
  const [gameData, setGameData] = useState([]);
  const [calendar, setCalendar] = useState({});
  

  useEffect(() => {
    try {
      fetch('https://data.nba.net/10s/prod/v1/calendar.json')
      .then(res => res.json())
      .then(data => setCalendar(data));
    }
    catch(err) {
      console.log(err);
    } 

  }, [])

  useEffect(() => {

    setGameData(setData(calendar));
    

  }, [calendar]);

  console.log('now ', gameData)

  useEffect(() => {

    const arrangeData = () => {
      if(gameData[0][0].seasonYear!=='undefined') {
        let arr2 = gameData;
        arr2.sort((a,b) => parseInt(b[0].seasonYear) - parseInt(a[0].seasonYear));
        setGameData(arr2);
        setLoading(false);
        }
    }
    
    if(loading) {
      setTimeout(() => {
        console.log('gamedata', gameData)
        gameData.length > 0  ? arrangeData() : void(0);
      }, 5000)
    }
  }, [loading, gameData])

  const showDate = () => {
    let date = new Date();
    return date.toLocaleString([], { day: '2-digit', month: 'long'});
  }

  return (<>
    <header>
      <Link to='/' style={{color: 'black', textDecoration :'none'}}>Hardwood Worker</Link>
    </header>
    <div className='mainDiv'>


      <div className='col1'>
      <h1>
        <span>{showDate()} In History</span>
      </h1>
      <p>Get data for how your team fared on this day through the years. <br /><span style={{color: '#C7C7C7'}}>Only shows games for which data is available from nba.com</span></p>
      </div>
      
      <div className='col2'>
      <div className="dropdown">
        <button className="btn btn-outline dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{width: '80%', textAlign: 'left', border: '3px solid rgb(60, 60, 60)', fontSize: '24px'}}>
        {selected.teamName === '' ? 'Choose a team' : selected.teamName}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{height: '350px', overflowY: 'scroll'}}>
        {teamCodes.map(x => <TeamMenuOption obj={x} key={x.teamId} setSelected={setSelected} /> )}
        </ul>
      </div>
      
      {/* <div style={{maxWidth: '80vw'}}>{teamCodes.map(x => <TeamButton obj={x} key={x.teamId} selected={selected} setSelected={setSelected} active={active} setActive={setActive} /> )}</div> */}

      <div style={{marginTop: '32px'}}>{ loading === false ? <Results gameData={gameData} selected={selected} /> : <h4>loading...</h4> }</div>
      </div>
      
    </div>
    </>

    
  )
}

export default ThisDayInHistory

// tdih
// matchinfo
// teambutton


// `https://data.nba.net/data/10s/prod/v1/${match.homeStartDate}/${match.gameId}_boxscore.json`