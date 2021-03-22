import React, { Component } from 'react'

class ClassComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        const { date } = this.state;
        return (
            <div>
                <h3>ClassComp</h3>
                <div>{date.toLocaleTimeString()}</div>
            </div>
        )
    }
}

export default ClassComp