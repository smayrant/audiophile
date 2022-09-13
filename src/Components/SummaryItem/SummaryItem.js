import classes from "./SummaryItem.module.scss";
import zx7 from "../../Assets/Images/zx7-cart.jpg";

function SummaryItem() {
  return (
    <div className={classes.summaryItem}>
      <div className={classes.summaryItem_container}>
        <img src={zx7} alt="Cart item icon" />
        <div className={classes.summaryItem_infoContainer}>
          <div className={classes.summaryItem_info}>
            <span className={classes.summaryItem_title}>xx99 MK II</span>
            <span className={classes.summaryItem_qty}>x1</span>
          </div>
          <div>
            <span className={classes.summaryItem_price}>$2,999</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryItem;
