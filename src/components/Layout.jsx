import { NavLink, Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Usermenu } from "./UserMenu/UserMenu";

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.auth.selectIsLoggedIn);
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={styles.navLink}>
                Home
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/contacts" className={styles.navLink}>
                    Contacts
                  </NavLink>
                </li>
                {UserMenu}
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/register" className={styles.navLink}>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className={styles.navLink}>
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
