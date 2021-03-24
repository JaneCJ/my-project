import React, { Component } from 'react'
import BottomBar from './bottomBar'
import TopBar from './topBar'

export default class Layout extends Component {
    componentDidMount() {
        const { title = "商城" } = this.props;
        document.title = title;
    }
    render() {
        const { children, showTopBar, showBottomBar } = this.props;
        return (
            <div>
                {showTopBar && <TopBar />}
                {children.content}
                {children.txt}
                <button onClick={children.btnClick}>Btn</button>
                {showBottomBar && <BottomBar />}
            </div>
        )
    }
}
