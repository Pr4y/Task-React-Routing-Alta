import React from 'react';
import {Link} from 'react-router-dom';

import style from './style.module.css'

const NotFound = () => {
    return (  
        <div className={style.container}>
            <h1>Page Not Found!</h1>
            <p>
                <strong>Opps! Something went wrong</strong>
            </p>

            <button>
                <Link to="/">Back to Home</Link>
            </button>
        </div>
    );
}
 
export default NotFound;