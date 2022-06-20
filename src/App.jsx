import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OnePage from './pages/OnePage';

/**
 * Main Component Website
 * @return {Element} Returns the Main Component of the Website.
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/onepage" element={(<OnePage />)}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
