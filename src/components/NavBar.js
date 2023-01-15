import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftsection}>
        <div className={styles.menufilled}>
          <img className={styles.vectorIcon} alt="" src="../vector.svg" />
        </div>
        <div className={styles.typography}>Todoapp</div>
      </div>
      <div className={styles.rightsection}>
        <img
          className={styles.accountcirclefilledIcon}
          alt=""
          src="../accountcirclefilled.svg"
        />
      </div>
    </div>
  );
};

export default NavBar;
