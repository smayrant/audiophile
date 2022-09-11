import classes from "./SummaryItem.module.scss";
import zx7 from "../../Assets/Images/zx7-cart.jpg";

function SummaryItem() {
  return (
    <div className={classes.summaryItem}>
      <div className={classes.summaryItem_container}>
        <img src={zx7} alt="" />
        <div className={classes.summaryItem_infoContainer}>
          <div className={classes.summaryItem_info}>
            <span>xx99 MK II</span>
            <span>$2,999</span>
          </div>
          <div>
            <span>x1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryItem;
