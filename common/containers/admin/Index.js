import React, { Component } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import AdminHeader from '../../components/admin/AdminHeader';


export default class Index extends Component {
    render() {
        return (
            <div className="admin-index">
                <AdminNav />
                <div className="admin-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}