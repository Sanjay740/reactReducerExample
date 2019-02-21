import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPost } from '../action/postAction';

class Posts extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {      
        this.props.dispatch(fetchPost());
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost)
        {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postItem = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                {post.body}
            </div>
        ))
        return (
            <div>
                <h1>POST</h1>
                {postItem}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts.items, 
    newPost : state.posts.item
})

const mapDispatchToProps = (dispatch) => ({
    dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(Posts)