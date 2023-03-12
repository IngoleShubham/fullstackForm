import React from "react";
import { useState, useEffect } from "react";
import styles from "@/styles/users.module.css";

const users = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    console.log("useeffect is running");
    fetch("http://localhost:8080/api/users")
      .then((a) => {
        // setName(response)
        // console.log(a)
        return a.json();
      })
      .then((parsed) => {
        setName(parsed);
      });
  }, []);


  return (
    <>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableBody}>Name</th>
              <th className={styles.tableBody}>Gender</th>
              <th className={styles.tableBody}>Address</th>
              <th className={styles.tableBody}>Education</th>
            </tr>
          </thead>
        </table>
        {name.map((item, key) => {
          return (
            <div>
              <table className={styles.table}>
                <tbody>
                  <tr key={key}>
                    <td className={styles.tableBody}>{item.name}</td>
                    <td className={styles.tableBody}>{item.gender}</td>
                    <td className={styles.tableBody}>{item.address}</td>
                    <td className={styles.tableBody}>{item.education}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default users;
