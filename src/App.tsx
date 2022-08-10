import './App.css';
import Aside from './components/aside';
import Information from './components/information';
import Main from './components/main/index';
import { AppContent} from './styles/components';

function App() {
  return (
    <AppContent>
     <Aside/>
     <Main/>
     <Information/>
    </AppContent>
  );
}

export default App;
