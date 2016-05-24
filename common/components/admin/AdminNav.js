import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AdminNav extends Component {
    render() {
        return (
            <ul className="admin-nav">
                <li className="admin-nav-title">后台</li>
                <li className="admin-nav-item active"><Link to="/admin">文章列表</Link></li>
            </ul>
        )
    }
}