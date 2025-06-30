import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'omnidimension-web-widget';
    script.async = true;
    script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=54d01dbcae8c1a9ea2de9c996e43bae6';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="main-bg">
      <div className="centered-container">
        <div className="card">
          <h1 className="main-title">EV Finder</h1>
          <p className="subtitle">Find the best EV charging stations near you, powered by Omnidimension AI.</p>
          <div className="widget-section">
            <p className="widget-info">Need help? Use the ChargeFinder Assistant in the bottom right corner!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
