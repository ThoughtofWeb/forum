import React, {Component} from 'react';
import {GlobalStyle} from './style';
import {IconFont} from './static/iconfont/iconfont.js';
import {BrowserRouter ,Route} from "react-router-dom";
import store from './store/index';
import {Provider} from 'react-redux';
import Header from './common/header';
import Home from './common/pages/home';
import Detail from './common/pages/detail';


class App extends Component {
    render() {
        return (
            <div className="App">
                <GlobalStyle></GlobalStyle>
                <IconFont></IconFont>
                <Provider store={store}>
                    <div>
                        <Header/>
                        <BrowserRouter>
                            <div>
                                <Route path="/" exact component={Home}></Route>
                                <Route path="/detail" exact component={Detail}></Route>
                            </div>
                        </BrowserRouter>
                    </div>

                </Provider>

            </div>
        );
    }
}

export default App;
