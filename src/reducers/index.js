import { FETCH_POSTS_SUCCESS, FETCH_POSTS_STARTS, FETCH_POSTS_ERROR } from "../constants/index";

const initialState = { posts: [], status: "" };

function FetchingPosts(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_STARTS:
            return { ...state, status: "Loading" };
        case FETCH_POSTS_SUCCESS:
            return { ...state, status: "Success", posts: action.payload.posts }
        case FETCH_POSTS_ERROR:
            return { ...state, status: "Error" };
        default:
            return state;
    }
}



export default FetchingPosts;


