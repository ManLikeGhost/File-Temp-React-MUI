import React from 'react';
import MarbleBackground from './img/MarbleBackground.png';
import Button from '@material-ui/core/Button';
import './App.css';

const styles = {
    paperContainer: {
        height: "100vh",
        backgroundImage: `url(${MarbleBackground})`
    }
};

function App() {
    return (
    <div style={styles.paperContainer}> 
    
    <Button variant="contained">Welcome to Terrel Davies</Button>
    </div>
        
    );
}

export default App;