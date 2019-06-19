import React, {Component} from 'react';
import {WriterItem, WriterWrapper} from "../style";
import {connect} from 'react-redux';

class Writer extends Component {
    render() {
        const {list} = this.props;
        return (
            <WriterWrapper>
                <WriterItem></WriterItem>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.home.get('topicList')
})
export default connect(mapState, null)(Writer);