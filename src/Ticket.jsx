// Presentational component
import TicketNum from "./TicketNum";
import "./Ticket.css"
export default function Ticket({ticket}){
   return (
    
    <div className="Ticket">
        <p>Ticket number</p>
     { ticket.map((num,idx) => (
            <TicketNum num ={num} key={idx}/>
        ))}
    </div>
   );
}