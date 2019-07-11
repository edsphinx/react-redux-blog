import React, { Component} from 'react';

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = e => {
        this.setState({ comment: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        
        //TODO: Call an action creator
        //And save the comment
        this.setState({ comment: '' });
    };

    render() {
        return (
            <form className='ui form' onSubmit={this.handleSubmit}>
                <div className = 'field'>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                </div>
                <div>
                    <button className='ui button'>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;