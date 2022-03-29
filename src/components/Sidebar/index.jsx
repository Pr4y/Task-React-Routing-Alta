import { Link, useLocation } from "react-router-dom"

import styles from "./style.module.css"

const Sidebar = () => {
    const location = useLocation();

    return(
        <div className={styles.sidebar}>
            {location.pathname === "/" &&
                <ul>
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/about"><li>About</li></Link>
                </ul>
            }
            {location.pathname !== "/" &&
                <ul>
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/about-app"><li>About App</li></Link>
                    <Link to="/about-author"><li>About Author</li></Link>
                </ul>
            }

        </div>
    )
}

export default Sidebar