import React from 'react';

import { connect } from "react-redux";

import fetchingPosts from "../middlewares/fetchingPosts";


class PostsList extends React.Component {

    componentDidMount() {
        this.props.fetchingPosts();
    }

    render() {
        switch (this.props.status) {
            case "Loading":
                return (
                    <div>Loading...</div>
                )
            case "Success":
                return (
                    <div className="posts-list">
                        {this.props.posts.map((post, index) => (
                            <div key={index} className="post">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>)
                        )}
                    </div>
                )
            case "Error":
                return (
                    <div className="error">ERROR</div>
                )
            default:
                return <div></div>
        }
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        status: state.status
    }
}

export default connect(mapStateToProps, { fetchingPosts })(PostsList);