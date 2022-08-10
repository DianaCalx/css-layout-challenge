import './App.css';
import Aside from './components/Aside';
import Information from './components/Information';
import Main from './components/Main/index';
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
