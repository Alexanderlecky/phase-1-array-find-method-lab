
function superbowlWin(record) {
    for (let obj of record) {
      
      if (obj.result === "W") {
        
        return obj.year;
      }
    }
    
    return undefined;
  }
  