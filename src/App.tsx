import styles from './App.module.scss';
import { Newsletter } from './components/Newsletter/Newsletter';

function App() {
  return (
    <div className={styles.app}>
      <Newsletter />
    </div>
  );
}

export default App;
