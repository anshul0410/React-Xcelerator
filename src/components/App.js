import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { ordersFetchData, usersFetchData , loginUser ,instrumentsFetchData , pushNotification} from '../actions/actions';
// import {LoginComponent} from './login/Login.component';
import  '../styles/common.css';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/actions';
import MainComponent from './MainComponent';
const mapStateToProps = (state) => {
    // console.log(state,'drtdr')
    return {
        // items: state.items,
        // hasErrored: state.itemsHasErrored,
        // isLoading: state.itemsIsLoading,
        // users: state.users,
        // currentUser: state.currentUser,
        // orders: state.orders,
        // dialogReducer: state.dialogReducer,
        // dialog : state.dialog,
        // instruments:state.instruments
        myposts: state.posts,
        mycomments: state.comments
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
        // fetchPostData: (url) => dispatch(postFetchData(url)),
        // loginUser: (user) =>  dispatch(loginUser(user)),
        // fetchOrdersData: (url,method,data) => dispatch(ordersFetchData(url,method,data)),
        // fetchInstrumentsData: (url) => dispatch(instrumentsFetchData(url)),
        // pushNotification : (msg,data) => dispatch(pushNotification(msg,data))              
    };


export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
