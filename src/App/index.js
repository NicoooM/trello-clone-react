import Layout from "../components/Layout";
import Header from "../components/Header";
import List from "../components/List";
import styles from "./App.module.scss";
import { useState } from "react";

export default function App() {
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
  return (
    <Layout>
      <Header createList={createList} />
      {lists.length === 0 ? (
        <p className={styles.indication}>
          To add a list, click on the Add button
        </p>
      ) : (
        <ul className={styles.list_container}>{lists}</ul>
      )}
    </Layout>
  );
}
