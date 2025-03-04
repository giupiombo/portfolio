import { useMediaQuery } from 'react-responsive';
import DesktopView from './components/Desktop/DesktopView';
import MobileView from './components/Mobile/MobileView';
import { useEffect } from 'react';

function App() {
  // const isMobile = useMediaQuery({
  //   query: '(max-width: 1000px)',
  // });

  useEffect(() => {
    window.location.href = 'https://giupiombo-portfolio.vercel.app'; // Change to your new portfolio URL
  }, []);

  return <></>;
  // return <>{isMobile ? <MobileView /> : <DesktopView />}</>;
}

export default App;
