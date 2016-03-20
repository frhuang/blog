import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as RegActions from '../../actions/register';
import { bindActionCreators } from 'redux';

class Register extends Component {
    constructor() {
        super();
    }
    componentWithReceiveProps(nextProps) {
        const { registerInfo } = nextProps;

        console.log('componentWithReceiveProps');
        const {bl, msg, error } = registerInfo.data;

        if(bl == "1" && !error) {
            return this.props.history.push("/admin");
        }
    }
    handlerClick(e) {
        e.preventDefault();
        var { nameInput, pswInput} = this.refs;
        const [ name , password ] = [nameInput.value,pswInput.value];
        this.props.actions.register({name, password});
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="请输入名字" name="name" ref="nameInput" />
                </div>
                <div>
                    <input type="password"  placeholder="请输入密码" name="password" ref="pswInput" />
                </div>
                <div>
                    <button className="login-button" onClick={this.handlerClick.bind(this)}>登录</button>
                </div>
            </div>
        )
    }
}

export default connect(
        state => ({
            registerInfo:state.register
    }),
        dispatch => ({
        actions: bindActionCreators(RegActions, dispatch)
    })
)(Register);