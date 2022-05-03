/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback, useEffect, useRef, useState } from "react";
import { ReactComponent as ArrowUp } from "../images/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../images/icon-arrow-down.svg";
import todoIcon from "../images/icon-todo.svg";
import calendarIcon from "../images/icon-calendar.svg";
import remindersIcon from "../images/icon-reminders.svg";
import planningIcon from "../images/icon-planning.svg";
import closeIcon from "../images/icon-close-menu.svg";

import styles from "./Menu.module.css";

const Menu = ({ closeMenu }) => {
  const [menu, setMenu] = useState("");
  const featuresButtonRef = useRef();
  const featuresMenuRef = useRef();
  const companyButtonRef = useRef();
  const companyMenuRef = useRef();

  const toggleMenu = useCallback(
    (menuName) => {
      if (menu === menuName) {
        setMenu("");
      } else {
        setMenu(menuName);
      }
    },
    [menu]
  );

  useEffect(() => {
    const handleClickEvent = (event) => {
      if (event.target === featuresButtonRef.current) {
        toggleMenu("features");
      } else if (event.target === companyButtonRef.current) {
        toggleMenu("company");
      } else if (menu !== "") {
        if (
          (featuresMenuRef.current &&
            !featuresMenuRef.current.contains(event.target)) ||
          (companyMenuRef.current &&
            !companyMenuRef.current.contains(event.target))
        ) {
          setMenu("");
        }
      }
    };

    document.addEventListener("mousedown", handleClickEvent);

    return () => document.removeEventListener("mousedown", handleClickEvent);
  }, [
    featuresButtonRef,
    featuresMenuRef,
    companyButtonRef,
    companyMenuRef,
    toggleMenu,
    menu,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.closeButtonContainer}>
        <img src={closeIcon} alt="close button" onClick={closeMenu} />
      </div>
      <div className={styles.menuGroup}>
        <div className={styles.subMenu} ref={featuresMenuRef}>
          <div
            className={menu === "features" ? styles.active : null}
            ref={featuresButtonRef}
          >
            Features
            <div className={styles.arrow}>
              {menu === "features" ? <ArrowUp /> : <ArrowDown />}
            </div>
          </div>
          {menu === "features" && (
            <div
              className={styles.subMenuList}
              style={{ right: 0, width: "17rem" }}
              ref={featuresMenuRef}
            >
              <ul>
                <li>
                  <img src={todoIcon} alt="todo icon" />
                  <a href="#">Todo List</a>
                </li>
                <li>
                  <img src={calendarIcon} alt="calendar icon" />{" "}
                  <a href="#">Calendar</a>
                </li>
                <li>
                  <img src={remindersIcon} alt="reminders icon" />{" "}
                  <a href="#">Reminders</a>
                </li>
                <li>
                  <img src={planningIcon} alt="planning icon" />{" "}
                  <a href="#">Planning</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.subMenu} ref={companyMenuRef}>
          <div
            className={menu === "company" ? styles.active : null}
            ref={companyButtonRef}
          >
            Company
            <div className={styles.arrow}>
              {menu === "company" ? <ArrowUp /> : <ArrowDown />}
            </div>
          </div>
          {menu === "company" && (
            <div
              className={styles.subMenuList}
              style={{ left: 0, width: "10rem" }}
              ref={companyMenuRef}
            >
              <ul>
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.subMenu}>
          <a href="#">Careers</a>
        </div>
        <div className={styles.subMenu}>
          <a href="#">About</a>
        </div>
      </div>
      <div className={styles.menuGroup}>
        <div className={styles.subMenu}>
          <a href="#">Login</a>
        </div>
        <div className={styles.subMenu}>
          <a href="#" className={styles.registerButton}>
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
