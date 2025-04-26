import { useState, useEffect } from "react";
// import "./Lottery.css";
import { genRandomNumber, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n,winningSum}) {
    let [ticket, setTicket] = useState(genRandomNumber(n));
    let [winningTickets, setWinningTickets] = useState([]);
    let isWinning = sum(ticket) === winningSum;

    useEffect(() => {
        if (isWinning) {
            setWinningTickets([...winningTickets, ticket]);
        }
    }, [isWinning]);
    

    let buyTicket = () => {
        setTicket(genRandomNumber(n));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, You Won!"}</h3>
            <h3>{!isWinning && "Try Again!"}</h3>
            {winningTickets.length > 0 && (
                <div className="winning-tickets">
                    <h4>Winning Tickets:</h4>
                    <ul>
                        {winningTickets.map((t, index) => (
                            <li key={index}>{t.join(', ')}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
