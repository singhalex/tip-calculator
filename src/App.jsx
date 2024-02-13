import Calculator from "./components/calculator/calculator";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <img src="images\logo.svg" alt="Splitter" className={styles.logo} />
      <Calculator />
    </>
  );
}

export default App;
