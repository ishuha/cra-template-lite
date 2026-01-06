// import logo from './logo.svg';
import './App.css';
import RouteMap from './routes';

import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <RouteMap />
      </ErrorBoundary>
    </div>
  );
}

export default App;
