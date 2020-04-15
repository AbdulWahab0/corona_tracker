import React from "react";
import { Typography } from "@material-ui/core";
import cx from "classnames";

import styles from "./Source.module.css";

const Source = () => {
  return (
    <div className={styles.container}>
      <Typography style={{ color: "blue" }} color="textSecondary" gutterBottom>
        Source : https://covid19.mathdro.id/api
      </Typography>
      <Typography style={{ color: "green" }} color="textSecondary" gutterBottom>
        WHO : https://www.who.int/data/gho/info/gho-odata-api
      </Typography>

      <Typography style={{ color: "red" }} color="textSecondary" gutterBottom>
        Devlelped by Abdul Wahab
      </Typography>
    </div>
  );
};

export default Source;
