
import './css/App.scss';
import 'primereact/resources/themes/nova-accent/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Todos from './components/Todos';
import ProductContextProvider from './context/ProductContextJS';
import MainScreen from "./components/MainScreen";

function App() {

  return (

      <ProductContextProvider >
          <Todos/>
      </ProductContextProvider>

  );
}

export default App;
