import React, { useState } from "react";

function TicketApp() {
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTicket = () => {
    if (!title || !description) {
      alert("Please provide both title and description.");
      return;
    }
    const newTicket = {
      id: Date.now(),
      title,
      description,
    };
    setTickets([...tickets, newTicket]);
    setTitle("");
    setDescription("");
  };

  const deleteTicket = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  return (
    <div className="ticketing-app">
      <div className="header">
        <h1>Ticketing System</h1>
      </div>

      <div className="ticket-form">
        <input
          type="text"
          placeholder="Enter Ticket Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter Ticket Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTicket}>Create Ticket</button>
      </div>

      <div className="ticket-list">
        <h2>Active Tickets</h2>
        {tickets.length === 0 ? (
          <p>No tickets available. Add some tickets!</p>
        ) : (
          <ul>
            {tickets.map((ticket) => (
              <li key={ticket.id} className="ticket-item">
                <div className="ticket-card">
                  <h3>{ticket.title}</h3>
                  <p>{ticket.description}</p>
                  <button onClick={() => deleteTicket(ticket.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TicketApp;
