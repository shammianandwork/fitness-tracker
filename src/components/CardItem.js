import * as React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CardItem.css";

export const CardItem = ({ user }) => {
  const [targetSteps, setTargetSteps] = React.useState(0);

  React.useEffect(() => {
    setTargetSteps(user.stepsTarget);
  }, [user]);

  const handleIncrement = () => {
    setTargetSteps(targetSteps + 500);
  };

  const handleDecrement = () => {
    setTargetSteps(targetSteps > 500 ? targetSteps - 500 : 0);
  };

  return (
    <div className="carditem">
      <div className="carditem__userinfo">
        <img
          src={process.env.PUBLIC_URL + "/user_photo.png"}
          style={{ width: "2.5rem", height: "2.5rem", marginLeft: "1rem" }}
        />
        <div
          style={{
            marginLeft: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ color: "white", fontWeight: "600" }}>
            {" "}
            {user.name}{" "}
          </span>
          <span style={{ color: "white", fontWeight: "200" }}>
            {" "}
            {user.email}{" "}
          </span>
        </div>
      </div>

      <div className="carditem__stepsinfo">
        <div style={{ width: "4rem", marginLeft: "3rem" }}>
          <CircularProgressbarWithChildren
            value={`${(user.stepsWalked / targetSteps) * 100}`}
            animate={true}
          >
            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "1rem", fontWeight: "800" }}>
                {user.stepsWalked}
              </span>
              <span style={{ fontSize: "0.6rem", fontWeight: "300" }}>
                walked
              </span>
            </div>
          </CircularProgressbarWithChildren>
        </div>

        {/* manipulate steps */}

        <div
          style={{
            marginLeft: "1rem",
            marginRight: "1rem",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "2rem",
              height: "1rem",
              borderRadius: "22%",
              backgroundColor: "#101317",
            }}
            onClick={handleIncrement}
          >
            <img src={process.env.PUBLIC_URL + "/plus.png"} />
          </div>
          <div
            style={{
              marginTop: "0.2rem",
              marginBottom: "0.2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "1.2rem", fontWeight: "800", width: "2rem" }}
            >
              {targetSteps / 1000}k
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: "300",
                marginTop: "-0.2rem",
              }}
            >
              target
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "2rem",
              height: "1rem",
              borderRadius: "22%",
              backgroundColor: "#101317",
            }}
            onClick={handleDecrement}
          >
            <img src={process.env.PUBLIC_URL + "/minus.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};
