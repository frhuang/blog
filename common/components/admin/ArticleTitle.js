import React, { Component } from 'react';

export default class ArticleTitle extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }
    constructor(props){
        super(props);
    }
    handleEdit(e) {
        e.preventDefault();
        const { article } = this.props;
        this.context.router.push("/admin/edit/"+article._id);
    }
    handleDelete(e) {
        e.preventDefault();
        var isOk = confirm('delete is ok?');
        if(isOk) {

        }
    }
    render() {
        const { article,  doDelete} = this.props;
        return (
            <div className="article-block">
                <div className="list-title">
                    <p>{article.title}</p>
                    <p>{article.create_time}</p>
                </div>
                <div className="list-button">
                    <button onClick={this.handleEdit.bind(this)}>edit</button>
                    <button onClick={doDelete.bind(this, {id:article._id})}>delete</button>
                </div>
            </div>
        )
    }
}