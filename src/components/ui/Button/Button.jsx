import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";
function Button({ children ="Submit" , to = '/', moreClasses, disabled, type = "button", handleClick = null, moreStyles }) {
  if (type === "link")
    return (
      <Link to={to} style={moreStyles} className={`${moreClasses} ${styles.button}`}>
        {children}
      </Link>
    );
  return <button onClick={handleClick} disabled={disabled} className={`${moreClasses} ${styles.button}`}>{children}</button>;
}

export default Button;
