import Footer from './Footer';
import './index.css';
// import img from './images/favicon-32x32.png';
import img_d from './images/background-pattern-desktop.svg';
import img_m from './images/background-pattern-mobile.svg';
import { useEffect, useState } from 'react';
import Card from './Card';


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the viewport matches a mobile device
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 700); // Assuming 768px is the threshold for mobile
    };

    // Initial check on component mount
    checkIsMobile();

    // Event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="App">
      <img className='img_up' src={isMobile ? img_m : img_d} alt="background" />
      <Card isMobile={isMobile}/>
      <Footer/>
    </div>
  );
}

export default App;
