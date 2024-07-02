import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="Box" style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>To-Do Application</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "600px",
    padding: "20px",
    backgroundColor: "#f0f4f7",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  container: {
    textAlign: "center",
  },
  title: {
    fontSize: "2.5em",
    marginBottom: "20px",
    color: "#333",
  },
};

export default App;
