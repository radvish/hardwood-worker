import React from 'react'

const TeamMenuOption = ({obj, setSelected}) => {
  return (
    <li><a className="dropdown-item" onMouseDownCapture={() => setSelected({ teamId: obj.teamId,
        triCode: obj.triCode,
        teamName: obj.teamName,
        simpleName: obj.simpleName,
        location: obj.location,
        logo : obj.logo })} >{obj.teamName}</a></li>
  )
}

export default TeamMenuOption

//  
/* */