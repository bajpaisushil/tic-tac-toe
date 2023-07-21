import React, { useCallback, useState } from "react";
import Card from "../card/card";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./grid.css";
import isWinner from "../../helpers/checkWinner";


function Grid({ numberOfCards }) {
    const [turn, setTurn]=useState(true);
    const [board, setBoard]=useState(Array(numberOfCards).fill(''));
    const [winner, setWinner]=useState(null);

    const play=useCallback(function playCallback(index){
        console.log('move clicked ', index);
        if(turn===true){
          board[index]='0';
        } else{
          board[index]='X';
        }
        const win=isWinner(board, turn ? '0': 'X');
        console.log('winner is ', win);
        if(win){
          setWinner(win);
          toast.success(`Congratulations! ${win} won the game`)
        }
        setBoard([...board]);
        setTurn(!turn);
    }, [turn])
    function reset(){
      setBoard(Array(numberOfCards).fill(""));
      setTurn(true);
      setWinner(null);
    }
  return (
    <div className="grid-wrapper">
      {winner && (
      <div><h1 className="texthighlight">Winner is {winner}</h1>
      <button className="reset" onClick={reset}>Reset Game</button>
      <ToastContainer position="top-center" />
      </div>)}
      <div>
        <h1 className="texthighlight">Current Turn: {(turn)? '0': 'X'}</h1>
      <div className="grid">
        {board.map((value, idx) => {
            return <Card onPlay={play} gameEnd={winner? true: false} player={value} key={idx} index={idx} />;
          })}
      </div>
    </div>
    </div>
  );
}

export default Grid;
