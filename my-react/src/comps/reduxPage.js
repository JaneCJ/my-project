import React, { Component } from 'react';
import store from '../store';

export default class ReduxPage extends Component {
    componentDidMount(){
        store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    render() {
        return (
            <div>
                <h3>reduxPage</h3>
                <p>{store.getState()}</p>
                <button onClick={()=>{store.dispatch({type:"ADD"})}}>add</button>
            </div>
        )
    }
}
