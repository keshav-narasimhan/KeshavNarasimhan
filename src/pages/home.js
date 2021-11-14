  
import React from 'react';

const Home = () => {
  return (
    <div style={{backgroundColor: 'black'}}>
      <div style={{
        fontSize: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '7vh'
      }}>
        <h1 style={{color: 'white'}}>Keshav Narasimhan</h1>
      </div>
      <div style={{
        color: 'black',
        fontSize: 35,
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'normal',
        height: '10vh'
      }}>
        <p>
          <br /> <br /> <br /> <br />
          Welcome to my Personal Website! 
          <br /><br /><br />
        </p>
      </div>
    </div>
  );
};

export default Home;