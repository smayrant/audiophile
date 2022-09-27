import classes from "./SummaryItem.module.scss";

function SummaryItem(props) {
  return (
    <div className={classes.summaryItem}>
      <div className={classes.summaryItem_container}>
        <img src={props.img} alt="Cart item icon" />
        <div className={classes.summaryItem_infoContainer}>
          <div className={classes.summaryItem_info}>
            <span className={classes.summaryItem_title}>{props.name}</span>
            <span
              className={classes.summaryItem_qty}
            >{`x${props.quantity}`}</span>
          </div>
          <div>
            <span
              className={classes.summaryItem_price}
            >{`$${props.price}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryItem;
