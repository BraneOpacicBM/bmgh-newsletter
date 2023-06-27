import styles from './App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsletterPage from './pages/NewsletterPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path='/' element={<NewsletterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
