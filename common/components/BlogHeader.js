import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BlogHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, createTime } = this.props;
        return (
            <div className="blog-header">
                <div className="blog-back"><Link to="/blog">samewii's blog</Link></div>
                <div className="blog-header-content">
                    <span>{title}</span>
                    <hr />
                    <span>{createTime}</span>
                </div>
            </div>
        )
    }
}