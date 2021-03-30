import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


export default class ReactRoutePage extends Component {
    render() {
        return (
            <div>
                <h3>ReactRoutePage</h3>
                <Router>
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>

                    <Switch>{/*switch表示仅匹配一个 */}
                        {/* 优先级children(func)>component(comp)>render(func)且三者互斥，children不与location匹配，component和render与location匹配*/}
                        <Route exact path="/"
                            // component={HomePage}
                            children={() => <div>children</div>}
                        // render={()=><div>render</div>}
                        />
                        <Route path="/user" component={UserPage} />
                        <Route component={EmptyPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

class HomePage extends Component {
    render() {
        return (
            <div>
                首页
            </div>
        )
    }
}
class UserPage extends Component {
    render() {
        return (
            <div>
                用户中心
            </div>
        )
    }
}
class EmptyPage extends Component {
    render() {
        return (
            <div>
                EmptyPage-404
            </div>
        )
    }
}
