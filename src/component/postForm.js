import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../action/postAction';

class postForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }

        this.onChanged = this.onChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChanged(e)
    {
        this.setState({ [e.target.name] : e.target.value})
    }

    onSubmit(e)
    {
        e.preventDefault();
        
        const post ={
            title :this.state.title,
            body : this.state.body
        }
        this.props.dispatch(createPost(post));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <h3> Add Form</h3>

                <div>
                    <label>Title</label>
                    <input type="text" name="title" onChange={this.onChanged} value={this.state.title} />
                </div>
                <div>
                    <label>Body</label>
                    <textarea name="body" onChange={this.onChanged} value={this.state.body} />
                </div>
                <div>
                    <input type="submit" name="SUBMIT" />
                </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
})
export default connect( mapDispatchToProps)(postForm)
