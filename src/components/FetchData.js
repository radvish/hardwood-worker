
  
// sends request for each of the valid dates and keeps it in an array ; then returns the array
export const setData = (calendar) => {

    const temp = new Date();
    console.log('temp', temp)

    const date = ''.concat(temp.getMonth() < 9 ? ''.concat('0',temp.getMonth() + 1) : temp.getMonth() +1, temp.getDate() < 10 ? ''.concat('0',temp.getDate()) : temp.getDate());
    console.log('date', date)

        // gets the array of valid dates
        const getDates = (date, calendar) => {
                        
            //console.log('temp ', temp)
            const arr = [];
            let count = 0;
            for(var i = temp.getFullYear(); i >2016; i--) {
            if(calendar[''.concat(i,date)] > 0) {
              arr.push(''.concat(i, date)); 
              count++;
            }
          }
          return arr;
        }
    
    // returns value of the request from server
    const fetchData = async (x) => {
        let gameArray = [];
        try {
          const res = await fetch(`https://data.nba.net/10s/prod/v2/${x}/scoreboard.json`);
          const result = await res.json();
          console.log('result.games', result, result.games)
          result.games.forEach(async game => {
            const gameId = game.gameId;
            console.log('gameid', game.gameId)
            const res1 = await fetch(`https://data.nba.net/10s/prod/v1/${x}/${gameId}_boxscore.json`);
            const completeData = await res1.json();
            console.log('complete data', completeData);
            completeData.basicGameData.previousMatchup = completeData.previousMatchup;
            completeData.basicGameData.stats = completeData.stats;
            gameArray.push(completeData.basicGameData);             
        })
          return gameArray;
          
          //console.log('res1', res);
          // access gameid
          //return result.games;
        }
        catch(err) {
          console.log(err);
        }
    }

    let tArr = getDates(date, calendar);
    
    const arr1 = [];
    tArr.forEach(async y => {
      const res = await fetchData(y);
      // console.log('res2', res);
      arr1.push(res);
    }) 

    console.log('arr1', arr1)
           
    return arr1;
};