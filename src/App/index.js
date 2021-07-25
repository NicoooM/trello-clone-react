import Layout from "../components/Layout";
import Header from "../components/Header";
import List from "../components/List";
import styles from "./App.module.scss";
import { useState, useEffect } from "react";

export default function App() {
  let list_container = styles.list_container;
  const [lists, setLists] = useState([]);
  const [listKey, setListKey] = useState(1);
  const deleteList = (id) => {
    setLists((lists) => lists.filter((list) => list.props.id !== id));
  };
  const createList = () => {
    setListKey(listKey + 1);
    setLists((lists) => [
      ...lists,
      <List key={listKey} id={listKey} handleDelete={deleteList} />,
    ]);
  };
  useEffect(() => {
    const container = document.querySelector("." + list_container);
    let mouseDown = false;
    let pos = { left: 0, x: 0 };
    const mouseDownHandler = (e) => {
      mouseDown = true;
      console.log("down");
      pos = {
        left: container.scrollLeft,
        x: e.clientX,
      };
      document.addEventListener("mousemove", mouseMoveHandler);
    };
    const mouseMoveHandler = (e) => {
      if (mouseDown === true) {
        const dx = e.clientX - pos.x;
        container.scrollLeft = pos.left - dx;
      }
      if (mouseDown === false) {
        container.removeEventListener("mousemove", mouseMoveHandler);
      }
    };
    if (container !== null) {
      container.addEventListener("mousedown", mouseDownHandler);
      container.addEventListener("mouseup", () => (mouseDown = false));
    }
  });
  return (
    <Layout>
      <Header createList={createList} />
      {lists.length === 0 ? (
        <p className={styles.indication}>
          To add a list, click on the Add a list button
        </p>
      ) : (
        <ul className={list_container}>{lists}</ul>
      )}
    </Layout>
  );
}
