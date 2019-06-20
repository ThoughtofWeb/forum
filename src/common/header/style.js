import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
   position: relative;
   height: 56px;
   border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;
    background:url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    height: 100%;
    width: 960px;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color:#333;
    &.left{float:left;}
    &.right{
        float:right;
        color: #969696;
    }
    &.active {
    color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    float:left;
    position: relative;
    .slide-enter{
    transition: all .2s ease-out;
    }
    .slide-enter-active {
    width: 240px;
    }
    .slide-exit {
    transition: all .2s ease-out;
    }
     .slide-exit-active {
    width: 160px;
    }
    .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    background-color:#777;
    color: #fff;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: 0;
    outline: none;
    border-radius: 19px;
    background-color:#eee;
    margin-top: 9px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    margin-left: 20px;
    &::placeholder {
        color: #777;
    }
    &.focused{
    width: 240px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    z-index: 100;
    overflow:hidden;
    background: #fff;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    color: #969696;
    font-size: 14px;
    overflow:hidden;
`

export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
    cursor:pointer;
`

export const SearchInfoItem = styled.a`
    font-size: 12px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    display: block;
    float:left;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
`

// export const SearchInfoItem = styled.div`
//
// `


export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    padding: 0 20px ;
    border: 1px solid #ec6149;
    margin-top: 9px;
    margin-right: 20px;
    font-size: 14px;
    &.reg {
      color:#ec6149;
    }
    &.writing {
    color: #fff;
    background-color:#ec6149;
    }
`;



















