import classes from "./Summary.module.scss";
import SummaryItem from "../SummaryItem/SummaryItem";

function Summary() {
  return (
    <div className={classes.summary}>
      <h5>summary</h5>
      <SummaryItem />
    </div>
  );
}

export default Summary;
