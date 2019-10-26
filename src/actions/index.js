import { FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR, FETCH_POSTS_STARTS } from '../constants/index';

export const fetchPostsStarts = () => ({
    type: FETCH_POSTS_STARTS,
});

export const FetchPostsSuccess = posts => ({
    type: FETCH_POSTS_SUCCESS,
    payload: {
        posts
    }
});

export const FetchPostsError = () => ({
    type: FETCH_POSTS_ERROR,
});