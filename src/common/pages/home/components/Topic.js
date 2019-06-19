import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TopicImg, TopicItem, TopicWrapper} from '../style';

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item) =>
                        (
                            <TopicItem key={item.get('id')}>
                                <TopicImg className="topic-pic" imgUrl={item.get('imgUrl')}/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    )
                }


            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.home.get('topicList')
})
export default connect(mapState, null)(Topic);