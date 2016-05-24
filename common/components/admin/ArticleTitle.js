import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ArticleTitle extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    handleEdit(e) {
        e.preventDefault();
        var isOk = confirm('确定编辑?');
        const { article } = this.props;
        if(isOk){
            this.context.router.push("/admin/edit/"+article._id);
        }
    }
    handleDelete(e) {
        e.preventDefault();
        var isOk = confirm('确认删除?');
        const { article, doDelete } = this.props;
        if(isOk) {
            doDelete({id: article._id});
        }
    }

    render() {
        const { article } = this.props;
        return (
            <div className="article-block">
                <div className="list-title">
                    <Link to={"/blog/"+article._id}>{article.title}</Link>
                    <p>{article.create_time}</p>
                </div>
                <div className="list-button">
                    <button onClick={this.handleEdit.bind(this)}>edit</button>
                    <button onClick={this.handleDelete.bind(this)}>delete</button>
                </div>
            </div>
        )
    }
}