import React, { useEffect } from 'react';

const About = ({ setProgress }) => {
    useEffect(() => {
      setProgress(30);
      // Simulate loading progress
      setTimeout(() => setProgress(60), 500);
      setTimeout(() => setProgress(100), 1000);
    }, [setProgress]);

    return (
        <div className="container" style={{ marginTop: '150px', fontFamily: 'Georgia, serif', color: '#2F2626' }}>
            <div className="jumbotron" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 0 10px rgba(0,0,0,1)' }}>
                <h3 className="display-4">About NewsFlash</h3>
                <p className="my-4">
                    Welcome to NewsFlash, your go-to source for the latest news and updates from around the world.
                    Our mission is to provide timely and accurate news across a wide range of categories,
                    including business, entertainment, general news, health, science, sports, and technology.
                </p>
                <hr className="my-4" />
                <p>
                    At NewsFlash, we are committed to delivering news that matters to you.
                    Our team of dedicated journalists and editors work around the clock to bring you the most important stories,
                    whether it's breaking news, in-depth analysis, or insightful commentary.
                </p>
                <hr className="my-4" />
                <p>
                    Thank you for choosing NewsFlash as your trusted news source.
                    We value your readership and look forward to keeping you informed about the latest developments in the world.
                </p>
            </div>
        </div>
    );
};

export default About;
