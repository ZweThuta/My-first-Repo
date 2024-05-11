import { useState } from "react";
import FormBox from "./Form";
import List from "./List";

const Main = () => {
  const [UserInfo, setUserInfo] = useState([]);
  const getUserInfo = (userInfoObj) =>{
    console.log(userInfoObj)
    setUserInfo([...UserInfo,userInfoObj]);
  };
  return (
    <section className="main">
      <FormBox getUserInfo={getUserInfo}/>
      <List UserInfo={UserInfo}/>
    </section>
  );
};

export default Main;
