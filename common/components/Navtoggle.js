import React, { Component } from 'react';
import classNames from 'classNames';

export default class Navtoggle extends Component {
    constructor(props) {
        super(props);
    }
    eventOpenSidebar(e) {
        this.props.toggleSidebar(!this.props.layout.sidebarOpen);
    }
    render() {
        var closeClass = classNames("sidebar-nav", {close: this.props.layout.sidebarOpen});
        return (
            <div className={closeClass} onClick={this.eventOpenSidebar.bind(this)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}