import { Link } from "react-router-dom"

const Header = () => {
    return(
        <nav className="nav">
            {/* previously <<a href="http://localhost:3000"> 
                <div>People App</div>
            </a>> */}

            <Link to='/'>
                <div>People App</div>
            </Link>

        </nav>
    )
}

export default Header