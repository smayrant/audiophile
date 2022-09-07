import classes from "./InTheBoxItem.module.scss";

function InTheBoxItem(props) {
  return (
    <div className={classes.inTheBoxItem}>
      <div className={classes.inTheBoxItem_qty}>{props.qty}x</div>
      <div className={classes.inTheBoxItem_item}>{props.boxItem}</div>
    </div>
  );
}

export default InTheBoxItem;
