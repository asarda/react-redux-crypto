import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import CryptoList from './components/CryptoList';

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <CryptoList></CryptoList>
    </Provider>
  );
}

export default App;