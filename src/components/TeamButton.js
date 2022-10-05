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