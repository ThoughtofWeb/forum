import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import {connect} from 'react-redux';
import {
    Addition,
    Button,
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoItem,
    SearchInfoSwitch,
    SearchInfoTitle,
    SearchWrapper
} from './style';
import {actionCreators} from './store';

class Header extends Component {

    getListArea() {
        const {focused, headerList, page, mouseIn, totalPage} = this.props;
        const pageList = [];
        // 将immutable数组转化为普通数组
        const newList = headerList.toJS();
        if(newList.length){
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={this.props.handleMouseEnter}
                            onMouseLeave={this.props.handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                        onClick={ ()=>this.props.handleChangePage(page, totalPage,this.spinIcon)}>
                            <i ref={(icon)=> this.spinIcon=icon} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}

                    </div>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render() {
        const {focused,headerList} = this.props;
        return (
            <HeaderWrapper>
                <Logo href="/"/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={200} classNames="slide">
                            <NavSearch onFocus={()=>this.props.handleInputFocus(headerList)}
                                       onBlur={this.props.handleInputBlur}
                                       className={focused ? 'focused' : ''}></NavSearch>
                        </CSSTransition>

                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>

                        {this.getListArea()}
                    </SearchWrapper>

                    <Addition>
                        <Button className="writing">
                            <i className="iconfont">&#xe615;</i>
                            写文章</Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        headerList: state.getIn(['header', 'headerList']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(headerList) {
            headerList.size==0&&dispatch(actionCreators.getList())
            
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage,spinIcon) {
            console.log(spinIcon.style.transform)
            let angel=spinIcon.style.transform.replace(/[^0-9]/ig,"");
            // console.log(angel)
            if(angel){
angel=parseInt(angel,10)+360;
            }else{
                angel=360;
            }
spinIcon.style.transform='rotate('+angel+'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page+1))
            } else {
                dispatch(actionCreators.changePage(1))

            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);