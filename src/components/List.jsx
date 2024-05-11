import React from "react";
import Card from "./Card";

const List = (props) => {
  return (
    <>
      {props.UserInfo.map((info) => {
        return (
          <Card css={"card-mt"} key={info.email}>
            <div className="list">
              <p>Name: {info.name}</p>
              <p>Address: {info.address}</p>
              <p>Email: {info.email}</p>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default List;
