import classes from "./InTheBox.module.scss";

function InTheBox(props) {
  return (
    <div className={classes.inTheBox}>
      <h5>in the box</h5>
      <ul>
        {Array(props.itemsInBox).fill(<li>{`${props.qt}x ${props.item}`}</li>)}
      </ul>
    </div>
  );
}

export default InTheBox;
