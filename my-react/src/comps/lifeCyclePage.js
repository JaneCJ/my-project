import React, { Component } from 'react'

export default class LifeCyclePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log('constructor');
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return nextState.count !== 3;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    setCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        console.log('render');
        const { count } = this.state;
        return (
            <div>
                <h3>LifeCyclePage</h3>
                <p>{count}</p>
                <button onClick={this.setCount}>改变count</button>
                {count < 5 && <Child count={count} />}
            </div>
        )
    }
}
class Child extends Component {
    // 初次渲染不执行，仅父组件props改变时执行
    componentWillReceiveProps(props, state) {
        console.log('componentWillReceiveProps');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        console.log('child render');
        const { count } = this.props;
        return (
            <div>
                <h3>Child</h3>
                <p>{count}</p>
            </div>
        )
    }
}
