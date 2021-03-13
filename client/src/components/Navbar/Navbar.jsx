import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profiles" activeClassName={s.activeLink}>Profiles</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
        </div>
    </nav>
}

export default Navbar;