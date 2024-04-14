import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from './containers/Application';
import { Grid } from '@material-ui/core';
import logo from'./dilSeDigital.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='Dil se Digital' width={160} height={40} />
        <h1>Generate Content</h1>
      </header>
      <Grid container direction="row" justifyContent='center' style={{padding:'1rem 2rem'}}>
        <Grid item xs={12}>
          <Application />
          {/* <BrowserRouter>
            <Routes>
              <Route path="/" element={<Application />} />
              <Route path="/about" element={<h3>This is the About page</h3>} />
            </Routes>
          </BrowserRouter> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
