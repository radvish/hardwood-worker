import React from 'react'
import teamCodes from './TeamCodes';

const MatchTable = ({match, selected}) => {

  /* useEffect(() => {
    fetch('https://data.nba.net/10s/data/5s/json/cms/2021/regseason/team/1610612738/series.json')
    .then(res => res.json())
    .then(data => console.log('series ',data))
  }) */

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline', textTransform: 'uppercase', marginTop: '32px'}}>
    <h3 style={{marginRight: '20px'}}>{match.seasonYear}-{match.seasonYear - 2000 + 1}</h3>
    <p style={{marginRight: '20px'}}>{ !match.playoffs ? 'REGULAR SEASON' : `PLAYOFFS ROUND ${match.playoffs.roundNum}` }</p>
    <p style={{marginRight: '20px'}}>{match.arena.name}</p>
    
    </div>
    <table style={{ backgroundColor: 'rgba(15,15,15,0.7)', color: 'rgba(235,235,235,1)', borderRadius: '5px'}}>
      <thead>
        <tr style={{backgroundColor: 'rgba(70,70,70,1)'}}>
          <th>TEAM</th>
          <th>Q1</th>
          <th>Q2</th>
          <th>Q3</th>
          <th>Q4</th>
          <th>FINAL</th>
        </tr>
      </thead>
      <tbody style={{fontSize: '1.2rem'}}>
        <tr style={{backgroundColor: 'rgba(235,235,235,1)', color: 'rgba(5,5,5,1)'}}>
          <td>{teamCodes.map(x => x.triCode === match.hTeam.triCode && x.simpleName)}</td>
          <td>{match.hTeam.linescore[0].score}</td>
          <td>{match.hTeam.linescore[1].score}</td>
          <td>{match.hTeam.linescore[2].score}</td>
          <td>{match.hTeam.linescore[3].score}</td>
          <td>{match.hTeam.score}</td>
        </tr>
        <tr style={{backgroundColor: 'rgba(235,235,235,1)', color: 'rgba(5,5,5,1)'}}>
          <td>{teamCodes.map(x => x.triCode === match.vTeam.triCode && x.simpleName)}</td>
          <td>{match.vTeam.linescore[0].score}</td>
          <td>{match.vTeam.linescore[1].score}</td>
          <td>{match.vTeam.linescore[2].score}</td>
          <td>{match.vTeam.linescore[3].score}</td>
          <td>{match.vTeam.score}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default MatchTable