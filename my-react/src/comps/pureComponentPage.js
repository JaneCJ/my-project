import React, { PureComponent } from 'react'
// 浅比较，自动实现shouldComponentUpdate生命周期
export default class PureComponentPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            obj: {num:0}
        }
    }
    setCount = ()=>{
        this.setState({
            count: 100,
            // obj:{num:1000}  只能浅比较
        })
    }
    render() {
        console.log('render');
        const {count} = this.state;
        return (
            <div>
                <h3>PureComponentPage</h3>
                <button onClick={this.setCount}>{count}</button>
            </div>
        )
    }
}

