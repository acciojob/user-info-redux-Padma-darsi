import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail } from "./store";

const UserInfo = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);

  return (
    <div>
      <h1>User Information</h1>

      {/* Name Input */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
          placeholder="Enter your name"
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          placeholder="Enter your email"
        />
      </div>

      {/* Output Section */}
      <div className="output" style={{ marginTop: "20px" }}>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
