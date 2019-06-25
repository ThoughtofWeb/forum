import React, {Component} from 'react';
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import {HomeLeft, HomeRight, HomeWrapper} from './style';
import {connect} from "react-redux";
import { actionCreators} from './store';
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>

                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeList()
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeHomeList(){
            console.log(actionCreators);
            dispatch(actionCreators.changeList())
        }
    }
}

export default connect(null, mapDispatch)(Home);