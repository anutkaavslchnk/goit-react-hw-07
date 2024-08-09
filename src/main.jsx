import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './components/App/App.jsx';
import { Provider } from 'react-redux';


import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>

<App></App>

</Provider>
  

)
