import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {postsFetchData, increment, decrement} from '../actions/actions';
import  '../styles/common.css';
// import {bindActionCreators} from 'redux';
// import * as actionCreators from '../actions/actions';
import MainComponent from './MainComponent';
const mapStateToProps = (state) => {
    // console.log(state,'drtdr')
    return {
        
        myposts: state.posts,
        mycomments: state.comments
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // bindActionCreators(actionCreators, dispatch),
        fetchPosts:(url) => dispatch(postsFetchData(url)),
        fetchIncrementLike:(index) => dispatch(increment(index)),
        fetchDecrementLike: (index) => dispatch(decrement(index))
    }
        // fetchPosts:(url) => dispatch(postsFetchData(url)),
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
