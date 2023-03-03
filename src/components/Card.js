import * as React from "react";
import { CardItem } from "./CardItem";
import "./Card.css";

export const Card = () => {
  const data = [
    {
      userId: 1,
      name: "Shammi Anand",
      email: "shammi.a@rently.com",
      stepsWalked: 2547,
      stepsTarget: 4000,
    },

    {
      userId: 2,
      name: "Shammi Anand",
      email: "shammi.a@rently.com",
      stepsWalked: 2547,
      stepsTarget: 4000,
    },
  ];

  return (
    <div className="card">
      {/* BEGIN NAVBAR */}
      <div className="card__navbar">
        <div className="card__navbar__item">
          <span style={{ color: "white", fontWeight: "800" }}>Steps</span>
          <img
            src={process.env.PUBLIC_URL + "/steps.png"}
            style={{ marginLeft: "0.5rem" }}
          />
        </div>
        <div className="card__navbar__item">
          <span style={{ color: "white", fontWeight: "800" }}>Workout</span>
          <img
            src={process.env.PUBLIC_URL + "/workout.png"}
            style={{ marginLeft: "0.5rem" }}
          />
        </div>
        <div className="card__navbar__item">
          <span style={{ color: "white", fontWeight: "800" }}>Nutrition</span>
          <img
            src={process.env.PUBLIC_URL + "/nutrition.png"}
            style={{ marginLeft: "0.5rem" }}
          />
        </div>
      </div>
      {/* END NAVBAR */}

      {/* USER CARDS */}
      <div className="card__userCards">
        {data.map((user) => (
          <CardItem key={user.userId} user={user} />
        ))}
      </div>
    </div>
  );
};
