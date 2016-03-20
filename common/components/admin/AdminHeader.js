import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AdminHeader extends Component {
    render() {
        return (
            <div id="admin-header">
                <div className="admin-header-icon"><Link to="/">SAMEWII</Link></div>
                <p className="admin-header-title">Welcome to Samewii Blog</p>
            </div>
        )
    }
}