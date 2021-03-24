import React, { Component } from 'react'

class SetState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }
    componentDidMount() {
        //生命周期中setState是异步的
        // this.changeValue(1);

        // setState在原生事件中是同步的
        document.getElementById('test').addEventListener('click', this.setCounter);
    }
    changeValue = (val) => {
        // 在合成事件和生命周期中，setState是异步的，批量更新，性能优化
        // 合并更新，仅执行setCounter中的this.changeValue(2)
        // this.setState({
        //     counter: this.state.counter + val
        // })
        // console.log(this.state.counter);

        // setState的第一个参数为函数的形式，可实现链式更新
        this.setState((state) => {
            return {
                counter: state.counter + val
            }
        })
        console.log(this.state.counter);
    }
    setCounter = () => {
        this.changeValue(1);
        this.changeValue(2);

        // setState在setTimeout中是同步的
        // setTimeout(() => {
        //     this.changeValue(2);
        // }, 0)
    }
    render() {
        return (
            <div>
                <div>setState的同步与异步探究</div>
                <button onClick={this.setCounter}>{this.state.counter}</button>
                <button id='test'>原生事件*{this.state.counter}</button>
            </div>
        )
    }
}

export default SetState