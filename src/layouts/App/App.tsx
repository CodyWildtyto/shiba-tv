import { ContextProvider } from '../../context';
import Main from '../Main/Main';
import ModalView from '../ModalView/ModalView';
import Nav from '../Nav/Nav';

import './App.css';

function App() {
    return (
        <div className="App">
            <ContextProvider>
                <Nav />
                <Main />
                <ModalView />
            </ContextProvider>
        </div>
    );
}

export default App;
