import styled from 'styled-components';
import banner from '../../../static/banner.jpg';
// import topic from '';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    width: 625px;
    float:left;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img {
        width: 625px;
        height: 270px;
         ${props => props.padding || '0'};
        background: url(${banner});
        background-size: 625px 270px;
    }
`

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0 ;
    overflow: hidden;
    margin-left: -18px;
`

export const TopicItem = styled.div`
    float:left;
    background-color:#f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 10px;
`
export const TopicImg = styled.img.attrs({
    src: props => props.imgUrl || '../../../static/topic.jpg'
})`
    width: 32px;
    height: 32px;
    display: block;
    float:left;
    margin-right: 10px;
`
