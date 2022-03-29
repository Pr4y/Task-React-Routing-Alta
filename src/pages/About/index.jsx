import React from "react";
import style from "./style.module.css";
import Sidebar from "../../components/Sidebar";
import AboutApp from "../AboutApp";

const About = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
      <Sidebar />
      </div>
      <div className={style.right}>
      <AboutApp />
      </div>
    </div>
  );
};

export default About;