import React from "react";
import styles from "./spinner.module.css";
export default function Spinner({ size = "full" }) {
  return (
    <div className={styles.loaderContainer}
      style={{
        width: size === "full" ? "100vw" : size,
        height: size === "full" ? "100vh" : size,
      }}
    >
      <span className={styles.loader}></span>
    </div>
  );
}
