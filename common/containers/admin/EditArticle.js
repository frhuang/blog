import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as editActions from '../../actions/article';
import { bindActionCreators } from 'redux';

class EditArticle extends Component {
    static ContextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        var editor = new mditor(document.getElementById('edit_editor'));
        const { id } = this.props.params;
        this.props.actions.getArticleById({id: id});
    }

    componentWillReceiveProps(nextProps){
        const { blogInfo, editInfo } = nextProps;
        const { editSuccess } = editInfo;
        if(editSuccess) {
            return this.context.router.push('/admin');
        }
        const { success, article, isFetching } = blogInfo;
        if(success) {
            var title = document.getElementById('edit_title');
            var describe = document.getElementById('edit_describe');
            var content = document.getElementById('edit_editor');
            title.value = article.title;
            describe.value = article.describe;
            content.value = article.content;
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        const { titleInput, desInput, contentInput } = this.refs;
        const [title, describe, content] = [titleInput.value, desInput.value, contentInput.value];
        if(title.trim() == '' || describe.trim() == '' || content == ''){
            return;
        }
        const {id} = this.props.params;
        this.props.actions.doEdit({
            id: id,
            title: title,
            describe: describe,
            content: content
        });
    }
    render() {
        return (
            <div className="blog-create-content">
                <h1>edit article</h1>
                <div className="form-group">
                    <input type="text"
                           name="title"
                           id="edit_title"
                           ref="titleInput" />
                </div>
                <div className="form-group">
                    <input type="text"
                           name="describe"
                           id="edit_describe"
                           ref="desInput" />
                </div>
                <div className="form-group">
                    <textarea name="content"
                              id="edit_editor"
                              ref="contentInput"></textarea>
                </div>
                <div className="admin-form">
                    <button onClick={this.handleSubmit.bind(this)}>update</button>
                </div>
            </div>
        )
    }
}
EditArticle.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default connect(
        state => ({
        blogInfo: state.articleDetail,
        editInfo: state.articleEdit
    }),
        dispatch => ({
        actions: bindActionCreators(editActions, dispatch)
    })
)(EditArticle);