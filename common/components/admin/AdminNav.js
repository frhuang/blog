import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AdminNav extends Component {
    render() {
        return (
            <nav id="admin-nav">
                <ul>
                    <li className="admin-nav-item"><Link to="/admin" activeClassName="active">BLOGLISTS</Link></li>
                    <li className="admin-nav-item"><Link to="/admin/labs" activeClassName="active">LABS</Link></li>
                </ul>
            </nav>
        )
    }
}