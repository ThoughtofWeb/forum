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
    border-bottom: 1px solid #f0f0f0;
`

export const TopicItem = styled.div`
    float:left;
    background-color:#f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #f0f0f0;
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

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    overflow: hidden;
    .pic {
      display: block;
      width: 125px;
      height: 100px;
      float: right;
      border-radius: 10px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
      font-size: 18px;
      line-height: 27px;
      font-weight: 700;
      color: #333;
    }
    .desc {
      color: #999;
      font-size: 13px;
      line-height: 24px;
    }
`

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size:contain;
`
export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    text-align: center;
    height: 300px;
    line-height: 300px;
`

export const WriterItem = styled.img.attrs({
    src: 'http://cdn2.jianshu.io/assets/ads/java-62d16127d94c8ca4c8a40ada899c97f4.png'
})`
    width: 278px;
    height: 300px;
`



