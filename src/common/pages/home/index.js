import React, {Component} from 'react';
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import {HomeWrapper,HomeLeft ,HomeRight} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img"/>
                    <Topic></Topic>
                    <Recommend></Recommend>
                </HomeLeft>
                <HomeRight>
                    <List></List>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;