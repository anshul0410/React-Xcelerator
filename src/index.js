import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import configureStore from './store/configureStore';
// import TraderDesktopComponent from './components/trader_desktop/TraderDesktop.component'
import App from './components/App';
// import {LoginComponent} from './components/login/Login.component';
import {AlbumComponent} from './components/album.component';
import {MainComponent} from './components/MainComponent';
import {PhotoComponent} from './components/photo.component';
export const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={AlbumComponent}/>
                <Route path="/view/:id" component={PhotoComponent}></Route>
            </Route>
            
    </Router>
 
    </Provider>,
      document.getElementById('app')
);
