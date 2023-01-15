import styles from "./Drawer.module.css";

const Drawer = () => {
  return (
    <div className={styles.drawer}>
      <div className={styles.sectioncontainer}>
        <div className={styles.sectionitem}>
          <img
            className={styles.mailfilledIcon}
            alt=""
            src="../mailfilled.svg"
          />
          <div className={styles.inbox}>Inbox</div>
          <div className={styles.div}>5</div>
        </div>
        <div className={styles.sectionitem1}>
          <img
            className={styles.mailfilledIcon}
            alt=""
            src="../favoritefilled.svg"
          />
          <div className={styles.personal}>Personal</div>
          <div className={styles.div1}>2</div>
        </div>
        <div className={styles.sectionitem1}>
          <img
            className={styles.mailfilledIcon}
            alt=""
            src="../folderfilled.svg"
          />
          <div className={styles.inbox}>Work</div>
          <div className={styles.div1}>1</div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
