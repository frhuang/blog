import React, { Component, PropTypes  } from 'react';
import { Link } from 'react-router';

export default class AdminNav extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor() {
        super();
    }
    clickCall(e){

    }
    render() {
        return (
            <ul className="admin-nav">
                <li className="admin-nav-title">后台</li>
                <li className="admin-nav-item active"><Link to="/admin">文章列表</Link></li>
                <li className="admin-nav-item"><Link to="/admin/labs">实验室</Link></li>
                <li className="admin-nav-item"><Link to="/admin/upload">上传</Link></li>
            </ul>
        )
    }
}
