// Import Styles
import './App.css';

// Import Pages
import IndexPage from './pages/IndexPage';
import ShowPage from './pages/ShowPage';

// Import Components
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
