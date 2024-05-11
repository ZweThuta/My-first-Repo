import { useState } from "react";
import Card from "./Card";
const Form = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (event) => {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      address.trim().length === 0 ||
      email.trim().length === 0
    ) {
      window.confirm("Please fill the correct data.");
      return;
    }
    const UserInfo={
        name,
        address,
        email
    }
    props.getUserInfo(UserInfo);
    setName("");
    setAddress("");
    setEmail("");
  };

  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <label htmlFor="mail">Email</label>
          <input
            type="text"
            id="mail"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn">
          Add user
        </button>
      </form>
    </Card>
  );
};

export default Form;
