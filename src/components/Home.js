import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const Home = ({ setProgress }) => {
  useEffect(() => {
    setProgress(30);
    // Simulate loading progress
    setTimeout(() => setProgress(60), 500);
    setTimeout(() => setProgress(100), 1000);
  }, [setProgress]);
  
  return (
    <div className="container" style={{ marginTop: '150px', fontFamily: 'Georgia, serif', color: '#2F2626' }}>
      <div className="jumbotron" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 0 10px rgba(0,0,0,1)' }}>
        <h1 className="display-4">Welcome to NewsFlash</h1>
        <p className="lead">
          Stay updated with the latest news from around the world. We provide timely and accurate news across various categories including business, entertainment, general news, health, science, sports, and technology.
        </p>
        <hr className="my-4" />
        <p>
          At NewsFlash, we are committed to delivering news that matters to you. Explore our site to find the latest stories and insights.
        </p>
        <Link className="btn btn-primary btn-lg"  style={{ backgroundColor: '#5F4C4C'}}to="/general" role="button">Explore News</Link>
      </div>
    </div>
  );
};

export default Home;
