import React, {useEffect, useState, useRef} from 'react'
import MatchTable from './MatchTable'

const Results = ({gameData, selected}) => {

  const [games, setGames] = useState(0);
  const results = useRef()

  useEffect(() => {
    setGames(gameData.flatMap(year => year.filter(match => match.hTeam.triCode === selected.triCode || match.vTeam.triCode === selected.triCode
      )))

  }, [selected, gameData])

  useEffect(() => {

    games.length > 0 && scrollDiv();

  }, [selected, games])

  console.log('games',games)

  const scrollDiv = () => {
    results.current.scrollIntoView({ block: "start", behavior: 'smooth'})
    console.log('it fired')
  }


  return <div style={{marginTop: '32px'}} ref={results}>
  { games.length > 0 ? games.map(match => <MatchTable match={match} key={match.gameId} selected={selected} />) : selected.triCode !== '' && <h4>The {selected.teamName} have not played on this day since 2016.</h4>}
  </div>

}

export default Results