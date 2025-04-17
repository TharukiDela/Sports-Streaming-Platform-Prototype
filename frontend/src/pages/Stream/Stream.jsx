import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Stream.css";

const Stream = () => {
  const [date, setDate] = useState(new Date());
  const [expandedCategory, setExpandedCategory] = useState("Soccer");

  const matchData = {
    Soccer: [
      {
        league: "England - Premier League",
        matches: [
          {
            time: "12:00 AM",
            home: "Newcastle United",
            score: "5-0",
            away: "Crystal Palace",
          },
        ],
      },
      {
        league: "International - Champions League",
        matches: [
          {
            time: "12:30 AM",
            home: "Real Madrid",
            score: "1-2",
            away: "Arsenal",
          },
          {
            time: "12:30 AM",
            home: "Internazionale",
            score: "2-2",
            away: "Bayern München",
          },
        ],
      },
    ],
    Tennis: [],
    IceHockey: [],
    Handball: [],
    Basketball: [],
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="stream-layout">
      {/* Left Sidebar */}
      <div className="sidebar">
        {/* Live Chat */}
        <div className="live-chat">
          <h4>Live Chat</h4>
          <div className="chat-box">
             <img src="/src/images/live-chat-icon.png" alt="Live Chat" />
            <p>Live chat will appear here</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <h2>
            {date.toLocaleString("default", { month: "long" })}{" "}
            {date.getFullYear()}
          </h2>
          <div className="date-strip">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => {
              const d = new Date(date);
              d.setDate(d.getDate() - d.getDay() + i);
              return (
                <div
                  key={day}
                  className={`day-box ${
                    d.toDateString() === date.toDateString() ? "selected" : ""
                  }`}
                  onClick={() => setDate(d)}
                >
                  <span>{day}</span>
                  <strong>{d.getDate()}</strong>
                </div>
              );
            })}
          </div>
        </div>

        
        {Object.entries(matchData).map(([category, leagues]) => (
          <div key={category} className="match-category">
            <div
              className="category-header"
              onClick={() => toggleCategory(category)}
            >
              {category}{" "}
              <span className="live-tag">
                LIVE({leagues.reduce((sum, l) => sum + l.matches.length, 0)})
              </span>
            </div>

            {expandedCategory === category && (
              <div className="category-content">
                {leagues.map((league, i) => (
                  <div key={i} className="league-block">
                    <h4>{league.league}</h4>
                    {league.matches.map((m, idx) => (
                      <div key={idx} className="match-row">
                        <span className="time">{m.time}</span>
                        <span className="teams">{m.home}</span>
                        <span className="score">{m.score}</span>
                        <span className="teams">{m.away}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

     
      <div className="calendar-panel">
        <h3>Match Settings ⚙️</h3>
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export default Stream;