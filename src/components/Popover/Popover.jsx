import {useStore} from "../../store";
import styles from "./Popover.module.sass";

const Popover = () => {
  const {err} = useStore();

  const handleCloseAttantion = (e) => {
    setinfoAttention("");
    setAttantion(false);
    e.stopPropagation();
  };

  const handleAttantionClick = (e) => {
    e.stopPropagation();
  };
  console.log("---err", err);
  return (
    <div className={styles.wrapper} onClick={(e) => handleCloseAttantion(e)}>
      <div
        className={styles.attention}
        onClick={(e) => handleAttantionClick(e)}
      >
        {err}
      </div>
    </div>
  );
};

export default Popover;
