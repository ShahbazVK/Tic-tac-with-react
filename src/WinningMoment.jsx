const winningMoment = (item0, item1, item2) => {
    document.getElementById(item0).disabled = false;
    document.getElementById(item0).classList.add("winnerclass");
    document.getElementById(item0).disabled = true;
    document.getElementById(item1).disabled = false;
    document.getElementById(item1).classList.add("winnerclass");
    document.getElementById(item1).disabled = true;
    document.getElementById(item2).disabled = false;
    document.getElementById(item2).classList.add("winnerclass");
    document.getElementById(item2).disabled = true;
    console.log("working");
  }
  export default winningMoment;