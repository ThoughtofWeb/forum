import {fromJS} from "immutable";

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 2,
            title: '狗哥是嘿嘿嘿',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 3,
            title: '狗哥是嘿嘿嘿',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 4,
            title: '狗哥是嘿嘿嘿',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 5,
            title: '狗哥是嘿嘿嘿',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 6,
            title: '狗哥是嘿嘿嘿',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
    ]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}