import About from './About';
import Menu from './Menu';
import Reservation from './Reservation';
import OrderOnline from './OrderOnline';
import Login from './Login';
import Homepage from './Homepage';


import logo from './icons_assets/Logo.svg'
import {Routes,Route, Link} from 'react-router-dom';


function Nav() {
    return (
        <div class="nav">
            <ul class="navli"><img src={logo} alt='Logo' />
                <li><Link to="/Homepage">Homepage</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/Reservation">Reservation</Link></li>
                <li><Link to="/OrderOnline">Order Online</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
            <Routes>
                <Route path="/Homepage" element= {<Homepage/>} />
                <Route path="/About" element= {<About/>} />
                <Route path="/Menu" element= {<Menu/>} />
                <Route path="/Reservation" element= {<Reservation/>} />
                <Route path="/OrderOnline" element= {<OrderOnline/>} />
                <Route path="/Login" element= {<Login/>} />
            </Routes>
        </div>
    );
}

export default Nav;
