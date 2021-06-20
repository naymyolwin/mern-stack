import React from "react";
import PropTypes from "prop-types";
import classes from "./MessageHistoryComp.module.css";

const MessageHistoryComp = ({ msg }) => {
  if (!msg) {
    return null;
  } else {
    console.log(msg);
  }

  return msg.map((row, i) => (
    <div key={i} className={[`${classes.messagehistory} mt-3`]}>
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className={classes.message}>{row.message}</div>
    </div>
  ));
};

export default MessageHistoryComp;

MessageHistoryComp.propTypes = {
  msg: PropTypes.array.isRequired,
};
