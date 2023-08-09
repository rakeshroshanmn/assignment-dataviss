import React from "react";
import styles from '../Css/floatingbtn.module.css'
import MessageIcon from "@mui/icons-material/Message";
import Fab from "@mui/material/Fab";

function Floatingbtn() {
  return (
    <div className={styles["floating-button"]}>
      <Fab color="primary" aria-label="message">
        <MessageIcon />
      </Fab>
    </div>
  );
}

export default Floatingbtn;
