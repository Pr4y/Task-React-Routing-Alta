import React from 'react';
import Sidebar from "../../components/Sidebar";
import style from "./style.module.css"

const AboutApp = () => {
    return (  
        <div className={style.container}>
            
            <h1>About the App</h1>
            <p>
            in this app, you can add, delete, submit, and edit item. To edit item simpy dobule click on it. 
            Once you are done. press the enter key to resubmit. 
            This app will persist your data in the broweser local storage. 
            So wheteher you reload. close your app or reoppende ti you still have accsess to your to dos items.
            </p>
            
        </div>
    );
}
 
export default AboutApp;