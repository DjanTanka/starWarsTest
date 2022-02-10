import {useStore} from "../../store";
import styles from "./Popover.module.sass";

const Popover = ({success, setSuccess}) => {
  const {err, setErr} = useStore();

  const handleCloseAttantion = (e) => {
    setErr('');
    if(success) {
      setSuccess('')
    }
    e.stopPropagation();
  };
  const handleAttantionClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={styles.wrapper} onClick={(e) => handleCloseAttantion(e)}>
      <div
        className={styles.attention}
        onClick={(e) => handleAttantionClick(e)}
      >
        <div className={styles.message}>{success || err}</div>
      </div>
    </div>
  );
};

export default Popover;
