// code solution
function superbowlWin(record) {
    const win = record.find((game) => game.result === "W");
    return win ? win.year : undefined;
  }
  superbowlWin(record);