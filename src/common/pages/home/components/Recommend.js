import React, {Component} from 'react';
import {RecommendItem, RecommendWrapper} from "../style";
import {connect} from 'react-redux';

class Recommend extends Component {
    render() {
        const {list} = this.props;
        console.log(list);
        return (
            <RecommendWrapper>
                {
                    list.map(item => (
                        <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}>

                        </RecommendItem>
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.home.get('recommendList')
})
export default connect(mapState, null)(Recommend);