import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ListInfo, ListItem, LoadMore} from '../style';

class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <div>
                {
                    list.map((item)=>(
                        <ListItem key={item.get('id')}>
                            <img className="pic"
                                 src={item.get('imgUrl')}
                            alt=""/>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    ))
                }
                <LoadMore onClick={getMoreData}>更多内容</LoadMore>
            </div>


        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList'])
    // list:state.home.get('articleList')
})

const mapDispatch=(dispatch)=>{
    getMoreData(){

    }
}
export default connect(mapState, mapDispatch)(List);