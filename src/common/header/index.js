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

    getListArea(show){
        if (show) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索 <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        <SearchInfoItem>教育</SearchInfoItem>
                    </div>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
        const headerProps=this.props;
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
                        <CSSTransition in={headerProps.focused} timeout={200} classNames="slide">
                            <NavSearch onFocus={headerProps.handleInputFocus}
                                       onBlur={headerProps.handleInputBlur}
                                       className={headerProps.focused ? 'focused' : ''}></NavSearch>
                        </CSSTransition>

                        <i className={headerProps.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                        {this.getListArea(headerProps.focused)}
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
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);