import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as publishActions from '../../actions/article';
import { bindActionCreators } from 'redux';

class CreateArticle extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var editor = new mditor(document.getElementById('md_editor'));
    }

    componentWillReceiveProps(nextProps){
        const { blogInfo } = nextProps;
        console.log(nextProps);
        const { success  } = blogInfo.data;
        if(success){
            //publish success
            return this.context.router.push("/admin");
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { titleInput, desInput, contentInput } = this.refs;
        const [title, describe, content] = [titleInput.value, desInput.value, contentInput.value];
        if(title.trim() == '' || describe.trim() == '' || content == ''){
            return;
        }
        this.props.actions.doPublish({title, describe, content});
    }
    render() {
        return (
            <div className="blog-create-content">
                <h1>新文章</h1>
                <div className="form-group">
                    <input type="text" name="title" placeholder="标题" ref="titleInput" />
                </div>
                <div className="form-group">
                    <input type="text" name="describe" placeholder="描述" ref="desInput" />
                </div>
                <div className="form-group">
                    <textarea placeholder="内容" name="content" id="md_editor" ref="contentInput"></textarea>
                </div>
                <div className="admin-form">
                    <a href="javascript:void(0)" onClick={this.handleSubmit.bind(this)}>发表</a>
                </div>
            </div>
        )
    }
}
CreateArticle.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default connect(
        state => ({
        blogInfo: state.publish
    }),
        dispatch => ({
        actions: bindActionCreators(publishActions, dispatch)
    })
)(CreateArticle);