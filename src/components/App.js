/* eslint-disable jsx-a11y/anchor-is-valid */
import Menu from "./Menu";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as MenuIcon } from "../images/icon-menu.svg";
import databizIcon from "../images/client-databiz.svg";
import audioPhileIcon from "../images/client-audiophile.svg";
import meetIcon from "../images/client-meet.svg";
import makerIcon from "../images/client-maker.svg";
import desktopHeroImage from "../images/image-hero-desktop.png";
import mobileHeroImage from "../images/image-hero-mobile.png";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

const App = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 930 && showSideMenu) {
        setShowSideMenu(false);
      }
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [showSideMenu]);

  return (
    <div className={styles.container}>
      {showSideMenu && (
        <div className={styles.overlay}>
          <div
            className={styles.overlayEmptySpace}
            onClick={() => setShowSideMenu(false)}
          ></div>
          <Menu closeMenu={() => setShowSideMenu(false)} />
        </div>
      )}
      <header className={styles.header}>
        <div className={styles.icon}>
          <Logo />
        </div>
        <div className={styles.menuContainer}>
          <Menu />
        </div>
        <div className={styles.menuIcon} onClick={() => setShowSideMenu(true)}>
          <MenuIcon />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mobileHeroContainer}>
          <img
            className={styles.mobileHero}
            src={mobileHeroImage}
            alt="mobile-hero"
          />
        </div>
        <article>
          <h1>{"Make\nremote work"}</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <a className={styles.learnMoreButton} href="#">
            Learn more
          </a>
          <footer>
            <img src={databizIcon} alt="databiz icon" />
            <img src={audioPhileIcon} alt="audiophile icon" />
            <img src={meetIcon} alt="meet icon" />
            <img src={makerIcon} alt="maker icon" />
          </footer>
        </article>
        <img
          className={styles.desktopHero}
          src={desktopHeroImage}
          alt="desktop-hero"
        />
      </main>
    </div>
  );
};
export default App;
