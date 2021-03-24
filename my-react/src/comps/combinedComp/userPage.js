import React, { Component } from 'react'
import Layout from './layout'

export default class UserPage extends Component {
    render() {
        return (
            <Layout showTopBar={true} showBottomBar={true} title='用户中心'>
                {
                    {
                        content:(
                            <div>UserPage</div>
                        ),
                        txt: "这是一个文本",
                        btnClick: ()=>{console.log('hahahha');}
                    }
                }
            </Layout>
        )
    }
}
