import { fetchPostsStarts, FetchPostsSuccess, FetchPostsError } from '../actions';

const fetchPosts = () => dispatch => {

    dispatch(fetchPostsStarts());

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(result => dispatch(FetchPostsSuccess(result)))
        .catch(() => dispatch(FetchPostsError()));
}

export default fetchPosts;