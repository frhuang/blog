import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as LoginActions from '../../actions/login';
import { bindActionCreators } from 'redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentWillMount() {
        const { loginInfo } = this.props;
        console.log('wilMount');
        const { bl , msg , error  } = loginInfo;
        if(bl == "1" && !error) {
            return this.props.history.push("/admin");
        }
    }
    componentWillReceiveProps(nextProps){
        const { loginInfo } = nextProps;
        const { bl , msg , error  } = loginInfo.data;
        console.log(bl, msg, error);
        if(bl == "1" && !error){
            //登录成功
            return this.props.history.push("/admin");
        }
        this.setState({
            bl ,
            msg ,
            error
        });

    }
    handlerClick(e) {
        e.preventDefault();
        var { nameInput, pswInput} = this.refs;
        const [ name , password ] = [nameInput.value,pswInput.value];
        this.props.actions.doLogin({name, password});
    }
    render() {
        const { bl , msg , error } = this.state;
        let errorMsg ;
        if(bl == "0" && error){
            errorMsg = (
                <p>{msg}</p>
            );
        }
        return (
            <div>
                <div>
                    <input type="text" placeholder="请输入密码" name="name" ref="nameInput" />
                </div>
                <div>
                    <input type="password"  placeholder="请输入密码" name="password" ref="pswInput" />
                </div>
                <div>
                    <button className="login-button" onClick={this.handlerClick.bind(this)}>登录</button>
                </div>
                { errorMsg }
            </div>
        )
    }
}

export default connect(
    state => ({
        loginInfo: state.login
    }),
    dispatch => ({
        actions: bindActionCreators(LoginActions, dispatch)
    })
)(Login);