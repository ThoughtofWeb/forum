import {fromJS} from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_LIST:
        return state.merge({
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList)
        })
        case constants.ARTICLE_LIST:
        return state
        default:
            return state
    }
}