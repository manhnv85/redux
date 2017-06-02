import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../components/Counter';

const mapStateToProps = state => ({
    count: state
})

const mapDispatchToProps = (dispatch) => ({
    cong: () => {dispatch({type: 'CONG'})},
    tru: () => {dispatch({type: 'TRU'})},
    lam_lai: () => {dispatch({type: 'LAM_LAI'})}
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)