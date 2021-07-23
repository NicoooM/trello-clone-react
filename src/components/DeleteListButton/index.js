import React, { useState } from "react";
import styles from "./DeleteListButton.module.scss";

export default function DeleteListButton(props) {
  return (
    <button
      className={styles.delete_button}
      onClick={() => props.handleDelete(props.id)}
    >
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.452 5.90735V18.6666H2.74512V5.90735"
          stroke="#F0F0F0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.1973 1H1V5.90741H20.1973V1Z"
          stroke="#F0F0F0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.85352 9.83337H12.3439"
          stroke="#F0F0F0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p>Delete</p>
    </button>
  );
}
