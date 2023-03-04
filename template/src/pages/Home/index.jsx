import React from 'react';
import "./home.modules.css"

function Home() {
  return (
    <div style={{ backgroundColor: 'beige' }}>
      <h1>Welcome to my website!</h1>
      <p>This is the home page.</p>
      <p>Explore src folder to know more</p>
      <p>get details about folder structure <a href="https://github.com/ishuha/cra-template-lite" target='_blank' >HERE</a></p>
    </div>
  );
}

export default Home;
