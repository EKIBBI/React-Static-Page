import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Story Header */}
      <Header />

      {/* Story Content */}
      <Content />

      {/* Story Footer */}
      <Footer />
    </div>
  );
}

export default App;
