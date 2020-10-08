import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer2 from './Components/CakeContainer2';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    {/* <div className="App">
      <ItemContainer cake/>
      <ItemContainer />
      <
    <CakeContainer2 />
     <NewCakeContainer />
    </div> */}
<UserContainer />




    
    </Provider>
  );
}

export default App;
