import React, { useState } from "react";
import ListItemPopUp from "../ListItemPopUp";
import styles from "./ListItem.module.scss";

export default function ListItem(props) {
  const [createListItem, setcreateListItem] = useState(true);
  const [listItemTitle, setListItemTitle] = useState("");
  const [listItemDescription, setListItemDescription] = useState("");
  const [listItemCompleted, setListItemCompleted] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  if (createListItem) {
    return (
      <li className={styles.list_item}>
        <input autoFocus onChange={(e) => setListItemTitle(e.target.value)} />
        <div className={styles.button_container}>
          <button
            className={styles.button_primary}
            onClick={() => setcreateListItem(false)}
          >
            Add
          </button>
          <button
            className={styles.button_delete}
            onClick={() => props.handleDelete(props.id)}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.36401 6.36398L19.0919 19.0919"
                stroke="#838383"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.36401 19.0919L19.0919 6.36397"
                stroke="#838383"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </li>
    );
  }
  return (
    <li className={styles.list_item_created}>
      <div
        className={styles.list_item_container}
        onClick={() => setOpenPopUp(true)}
        style={{
          backgroundColor: listItemCompleted ? "#6cff47" : "",
        }}
      >
        <p>{listItemTitle}</p>
      </div>
      <div className={styles.button_container}>
        <button
          className={styles.button_success}
          onClick={() => setListItemCompleted(!listItemCompleted)}
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 1L6.9375 14L1 8.09091"
              stroke="#838383"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className={styles.button_delete}
          onClick={() => props.handleDelete(props.id)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.36401 6.36398L19.0919 19.0919"
              stroke="#838383"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.36401 19.0919L19.0919 6.36397"
              stroke="#838383"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {openPopUp === true ? (
        <ListItemPopUp
          setOpenPopUp={setOpenPopUp}
          listItemTitle={listItemTitle}
          setListItemTitle={setListItemTitle}
          listItemDescription={listItemDescription}
          setListItemDescription={setListItemDescription}
        />
      ) : null}
    </li>
  );
}
