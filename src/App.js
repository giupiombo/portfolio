import { useMediaQuery } from 'react-responsive';
import DesktopView from './components/Desktop/DesktopView';
import MobileView from './components/Mobile/MobileView';

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)',
  });

  return <>{isMobile ? <MobileView /> : <DesktopView />}</>;
}

export default App;
