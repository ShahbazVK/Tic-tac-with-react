import React, { useEffect, useState } from 'react'
import './App.css'
import reactDom from 'react-dom'
import forDisabling from './ForDisabling'
import winningMoment from './WinningMoment'
const App = () => {

  const [winner, setWinner] = useState('');
  const [step, setStep] = useState(0);
  const [box0, setBox0] = useState('');
  const [box1, setBox1] = useState('');
  const [box2, setBox2] = useState('');
  const [box3, setBox3] = useState('');
  const [box4, setBox4] = useState('');
  const [box5, setBox5] = useState('');
  const [box6, setBox6] = useState('');
  const [box7, setBox7] = useState('');
  const [box8, setBox8] = useState('');

  const tictac = (item) => {//pass perimeter. Problem solve for multiple functions
    //console.log(123);
    if (item == 0 && (step % 2) == 0) {
      setBox0('X');
      // console.log(item,"ka X chala")
      document.getElementById("box0").disabled = true;
    }
    else if (item == 0 && (step % 2) == 1) {
      setBox0('O');
      // console.log(item,"ka O chala")
      document.getElementById("box0").disabled = true;
    }
    if (item == 1 && (step % 2) == 0) {
      setBox1('X');
      // console.log(item,"ka X chala")
      document.getElementById("box1").disabled = true;

    }
    else if (item == 1 && (step % 2) == 1) {
      setBox1('O');
      // console.log(item,"ka O chala")
      document.getElementById("box1").disabled = true;


    }
    if (item == 2 && (step % 2) == 0) {
      setBox2('X');
      // console.log(item,"ka X chala")
      document.getElementById("box2").disabled = true;


    }
    else if (item == 2 && (step % 2) == 1) {
      setBox2('O');
      // console.log(item,"ka O chala")
      document.getElementById("box2").disabled = true;


    }
    if (item == 3 && (step % 2) == 0) {
      setBox3('X');
      // console.log(item,"ka X chala")
      document.getElementById("box3").disabled = true;


    }
    else if (item == 3 && (step % 2) == 1) {
      setBox3('O');
      // console.log(item,"ka O chala")
      document.getElementById("box3").disabled = true;


    }
    if (item == 4 && (step % 2) == 0) {
      setBox4('X');
      // console.log(item,"ka X chala")
      document.getElementById("box4").disabled = true;


    }
    else if (item == 4 && (step % 2) == 1) {
      setBox4('O');
      // console.log(item,"ka O chala")
      document.getElementById("box4").disabled = true;


    }
    if (item == 5 && (step % 2) == 0) {
      setBox5('X');
      // console.log(item,"ka X chala")
      document.getElementById("box5").disabled = true;


    }
    else if (item == 5 && (step % 2) == 1) {
      setBox5('O');
      // console.log(item,"ka O chala")
      document.getElementById("box5").disabled = true;


    }
    if (item == 6 && (step % 2) == 0) {
      setBox6('X');
      // console.log(item,"ka X chala")
      document.getElementById("box6").disabled = true;


    }
    else if (item == 6 && (step % 2) == 1) {
      setBox6('O');
      // console.log(item,"ka O chala")
      document.getElementById("box6").disabled = true;


    }
    if (item == 7 && (step % 2) == 0) {
      setBox7('X');
      // console.log(item,"ka X chala")
      document.getElementById("box7").disabled = true;


    }
    else if (item == 7 && (step % 2) == 1) {
      setBox7('O');
      // console.log(item,"ka O chala")
      document.getElementById("box7").disabled = true;


    }
    if (item == 8 && (step % 2) == 0) {
      setBox8('X');
      // console.log(item,"ka X chala")
      document.getElementById("box8").disabled = true;


    }
    else if (item == 8 && (step % 2) == 1) {
      setBox8('O');
      // console.log(item,"ka O chala")
      document.getElementById("box8").disabled = true;


    }
    setStep(step + 1);
    // console.log(step," step");
    return (
      <>


      </>
    )
  }
  useEffect(() => {
    if (box0 === box1 && box1 === box2 && box1 == 'X') {
      console.log("X winner")
      setWinner('Winner is X');
      forDisabling();
      winningMoment("box0", "box1", "box2");
      return {

      };
    }
    if (box0 === box1 && box1 === box2 && box1 == 'O') {
      console.log("O winner")
      setWinner('Winner is O');
      forDisabling();
      winningMoment("box0", "box1", "box2");

      return {

      };
    }
    if (box0 === box3 && box3 === box6 && box0 == 'X') {
      console.log("X winner")
      setWinner('Winner is X');
      forDisabling();
      winningMoment("box0", "box3", "box6");

      return {

      };
    }
    if (box0 === box3 && box3 === box6 && box0 == 'O') {
      console.log("O winner")
      setWinner('Winner is O');
      forDisabling();
      winningMoment("box0", "box3", "box6");

      return {

      };
    }
    if (box2 === box5 && box5 === box8 && box2 == 'X') {
      console.log("X winner")
      setWinner('Winner is X');
      forDisabling();
      winningMoment("box2", "box5", "box8");

      return {

      };
    }
    if (box2 === box5 && box5 === box8 && box2 == 'O') {
      console.log("O winner")
      setWinner('Winner is O');
      forDisabling();
      winningMoment("box2", "box5", "box8");

      return {

      };
    }
    if (box2 === box5 && box5 === box8 && box2 == 'X') {
      console.log("X winner")
      setWinner('Winner is X');
      forDisabling();
      winningMoment("box2", "box5", "box8");

      return {

      };
    }
    if (box2 === box5 && box5 === box8 && box2 == 'O') {
      console.log("O winner")
      setWinner('Winner is O');
      forDisabling();
      winningMoment("box2", "box5", "box8");

      return {

      };
    }
    if (box6 === box7 && box7 === box8 && box6 == 'X') {
      console.log("X winner")
      setWinner('Winner is X');
      forDisabling();
      winningMoment("box6", "box7", "box8");

      return {

      };
    }
    if (box6 === box7 && box7 === box8 && box6 == 'O') {
      console.log("O winner")
      setWinner('Winner is O');
      forDisabling();
      winningMoment("box6", "box7", "box2");

      return {

      };
    }
    if (box0 === box4 && box4 === box8 && box4 == 'X') {
      console.log("X winner")
      setWinner('Winner is X');
      forDisabling();
      winningMoment("box0", "box4", "box8");

      return {

      };
    }
    if (box0 === box4 && box4 === box8 && box4 == 'O') {
      console.log("O winner")
      setWinner('Winner is O');
      forDisabling();
      winningMoment("box0", "box4", "box8");

      return {

      };
    }
    if (box2 === box4 && box4 === box6 && box2 == 'X') {
      console.log("X winner")
      setWinner('Winner is X');
      forDisabling();
      winningMoment("box2", "box4", "box6");

      return {

      };
    }
    if (box2 === box4 && box4 === box6 && box2 == 'O') {
      console.log("O winner")
      setWinner('Winner is O');
      forDisabling();
      winningMoment("box2", "box4", "box6");

      return {

      };
    }
    if (box3 === box4 && box4 === box5 && box3 == 'X') {
      console.log("X winner")
      setWinner('Winner is X');
      forDisabling();
      winningMoment("box3", "box4", "box5");

      return {

      };
    }
    if (box3 === box4 && box4 === box5 && box3 == 'O') {
      console.log("O winner")
      setWinner('Winner is O');
      forDisabling();
      winningMoment("box3", "box4", "box5");

      return {

      };
    }
    if (box1 === box4 && box4 === box7 && box1 == 'X') {
      console.log("X winner")
      setWinner('Winner is X');
      forDisabling();
      winningMoment("box1", "box4", "box7");

      return {

      };
    }
    if (box1 === box4 && box4 === box7 && box1 == 'O') {
      console.log("O winner")
      setWinner('Winner is O');
      forDisabling();
      winningMoment("box1", "box4", "box7");

      return {

      };
    }
    if (step == 9) {
      setWinner("DRAW");
    }
    console.log("box0", box0, "box1", box1, "box2", box2)

  })
  return (
    <div className='container1'>
      <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Tic Tac Toe</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#"></a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
  </div>
</nav>
      <div className='game'>
        <button onClick={() => tictac(0)} className='btn btn-danger only1' id='box0'>{box0}</button>
        <button onClick={() => tictac(1)} className='btn btn-danger' id='box1'>{box1}</button>
        <button onClick={() => tictac(2)} className='btn btn-danger only2' id='box2'>{box2}</button>
        <button onClick={() => tictac(3)} className='btn btn-danger only1' id='box3'>{box3}</button>
        <button onClick={() => tictac(4)} className='btn btn-danger' id='box4'>{box4}</button>
        <button onClick={() => tictac(5)} className='btn btn-danger only2' id='box5'>{box5}</button>
        <button onClick={() => tictac(6)} className='btn btn-danger only1' id='box6'>{box6}</button>
        <button onClick={() => tictac(7)} className='btn btn-danger' id='box7'>{box7}</button>
        <button onClick={() => tictac(8)} className='btn btn-danger only2' id='box8'>{box8}</button>
        <h1>{winner}</h1>
      </div>
    </div>
  )

}
export default App;
