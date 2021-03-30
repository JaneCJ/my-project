import React, { Component } from 'react';
import { connect } from 'react-redux'

// connect([mapStateToProps](object),[mapDispatchToProps](object or function))
export default connect(
    state => { return { num: state }},
    {
        add: ()=>({type:'ADD'})
    }
)(
    class ReactReduxPage extends Component {
        render() {
            const { num, dispatch,add } = this.props;
            return (
                <div>
                    <h3>ReactReduxPage</h3>
                    <p>{num}</p>
                    {/* <button onClick={()=>{dispatch({type:'ADD'})}}>add</button> */}
                    <button onClick={add}>add</button>
                </div>
            )
        }
    }

)
