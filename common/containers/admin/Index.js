import React, { Component } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import AdminHeader from '../../components/admin/AdminHeader';


export default class Index extends Component {
    render() {
        return (
            <div id="admin-index">
                <AdminHeader />
                <AdminNav />
                <div id="admin-main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}