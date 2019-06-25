import axios from 'axios';
import * as constants from './constants';

const actionList = (result) => ({
    type: constants.CHANGE_HOME_LIST,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

export const changeList = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((data) => {
            const result = data.data.data;
            dispatch(actionList(result))
        })
    }
}