import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
    renderButton() {
        if(this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>
                    Sign In
                </button>
            )
        };
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post A Comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }

    render() {
        return (
            <div className = 'ui segment'>
                {this.renderHeader()}
                <div className='ui container'>
                    <Route path="/post" component={CommentBox} />
                </div>
                <div className='ui horizontal divider'></div>
                <div className='ui container'>
                    <Route path="/" exact component={CommentList} />
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);