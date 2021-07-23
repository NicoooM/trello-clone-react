import React, { Component, useState } from "react";
import styles from "./Header.module.scss";

export default function Header(props) {
  let [count, setCount] = useState(1);
  return (
    <header>
      <button
        className={styles.container}
        onClick={() => {
          props.createList();
        }}
      >
        <div className={styles.cross}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1V19"
              stroke="#F0F0F0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 10H19"
              stroke="#F0F0F0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p>Add a list</p>
      </button>
    </header>
  );
}
