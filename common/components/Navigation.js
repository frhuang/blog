import React, { Component } from 'react';
import  { Link } from 'react-router';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    eventCloseSidebar(e) {
        this.props.toggleSidebar(!this.props.layout.sidebarOpen);
    }
    render() {
        var svgString = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" \
                            xmlns:xlink="http://www.w3.org/1999/xlink" \
                            x="0px" y="0px" \
                        viewBox="0 0 115 800"  xml:space="preserve"> \
                            <polygon fill="#ffffff" id="nav-svg-poly" points="115,800,5 , 800,115,1,115,1">\
                            </polygon> \
                        </svg>';
        return (
            <nav id="gf-nav">
                <ul id="gf-nav-main-link">
                    <li><Link to="intro"
                              onClick={this.eventCloseSidebar.bind(this)}>Intro</Link>
                    </li>
                    <li>
                        <Link to="blog"
                              onClick={this.eventCloseSidebar.bind(this)}>Blog</Link>
                    </li>
                    <li>
                        <Link to="labs"
                              onClick={this.eventCloseSidebar.bind(this)}>Labs</Link>
                    </li>
                    <li>
                        <Link to="about"
                              onClick={this.eventCloseSidebar.bind(this)}>About</Link>
                    </li>
                </ul>
                <div id="nav-wrap" dangerouslySetInnerHTML={{__html: svgString }}></div>
            </nav>
        )
    }
}