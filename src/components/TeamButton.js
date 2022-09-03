import React from "react";

const TeamButton = ({ obj, selected, setSelected, active, setActive }) => {
  return (
    <>
      <img
        className="teamButton"
        alt=""
        onMouseDownCapture={() => setSelected({ teamId: obj.teamId,
        triCode: obj.triCode,
        teamName: obj.teamName,
        simpleName: obj.simpleName,
        location: obj.location,
        logo : obj.logo })}
        src={obj.logo}
        onMouseEnter={() => setActive(obj.triCode)}
        onMouseLeave={() => setActive("")}
        style={{
          filter:
            active === obj.triCode
              ? "grayscale(0%)"
              : selected.triCode === obj.triCode && active.length === 0
              ? "grayscale(0%)"
              : "grayscale(100%) opacity(50%)",
          height:
            '70px',
          width: obj.triCode === "ORL" || obj.triCode === "OKC" || obj.triCode === 'UTA'
          ? "90px"
          :  obj.triCode === "PHX"
          ? '80px'
          : "70px",
          objectFit: "scale-down",
          padding: obj.triCode === "ORL" || obj.triCode === "OKC" || obj.triCode === 'UTA' || obj.triCode === 'PHX' ? '8px' : "16px",
          margin: "0 10px",
          display: "inline-flex",
          transform: selected.triCode === obj.triCode ? "scale(1.1)" : void 0,
        }}
      ></img>
    </>
  );
};

export default TeamButton;

/* new
 active === obj.triCode ? "grayscale(0%)" : selected === obj.triCode && active.length === 0 ? "grayscale(0%)" : "grayscale(100%) opacity(50%)" 
   */

/* old
 active === obj.triCode
              ? "grayscale(0%)"
              : selected === obj.triCode
              ? "grayscale(0%)"
              : "grayscale(100%) opacity(50%)", */

//{/* <div style={{maxWidth: '80vw'}}>{teamCodes.map(x => <TeamButton obj={x} key={x.teamId} selected={selected} setSelected={setSelected} active={active} setActive={setActive} /> )}</div> */}

/* import ATL_logo from '../images/logos/ATL.png'
import BOS_logo from '../images/logos/BOS.png'
import BKN_logo from '../images/logos/BKN.png'
import CHA_logo from '../images/logos/CHA.png'
import CHI_logo from '../images/logos/CHI.png'
import CLE_logo from '../images/logos/CLE.png'
import DAL_logo from '../images/logos/DAL.png'
import DEN_logo from '../images/logos/DEN.png'
import DET_logo from '../images/logos/DET.png'
import GSW_logo from '../images/logos/GSW.png'
import HOU_logo from '../images/logos/HOU.png'
import IND_logo from '../images/logos/IND.png'
import LAC_logo from '../images/logos/LAC.png'
import LAL_logo from '../images/logos/LAL.png'
import MEM_logo from '../images/logos/MEM.png'
import MIA_logo from '../images/logos/MIA.png'
import MIL_logo from '../images/logos/MIL.png'
import MIN_logo from '../images/logos/MIN.png'
import NOP_logo from '../images/logos/NOP.png'
import NYK_logo from '../images/logos/NYK.png'
import OKC_logo from '../images/logos/OKC.png'
import ORL_logo from '../images/logos/ORL.png'
import PHI_logo from '../images/logos/PHI.png'
import PHX_logo from '../images/logos/PHX.png'
import POR_logo from '../images/logos/POR.png'
import SAC_logo from '../images/logos/SAC.png'
import SAS_logo from '../images/logos/SAS.png'
import TOR_logo from '../images/logos/TOR.png'
import UTA_logo from '../images/logos/UTA.png'
import WAS_logo from '../images/logos/WAS.png' */

// const [active, setActive] = useState('')