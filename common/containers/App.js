import React, { Component, PropTypes } from 'react';
import Navigation from '../components/Navigation';
import classNames from 'classNames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navtoggle from '../components/Navtoggle';
import * as layoutActions from '../actions/layout';

class App extends Component {
    constructor(props) {
        super(props);
    }
    eventToggleSidebar(e) {
        e.preventDefault();
        this.props.actions.toggleSidebar(!this.props.layout.sidebarOpen);
    }
    render() {
        const { layout, actions } = this.props;
        const { sidebarOpen } = layout;
        const layoutClass = classNames({open: sidebarOpen});
        const activeClass = classNames({active: sidebarOpen});
        return (
            <div id="gf-app" className={layoutClass}>
                <div id="gf-main">
                    {this.props.children}
                </div>
                <Navigation layout={layout} toggleSidebar={actions.toggleSidebar} />
                <div id="nav-mask" className={activeClass}></div>
                <Navtoggle layout={layout} toggleSidebar={actions.toggleSidebar} />
            </div>
        )
    }
}



export default connect(
    state => ({
        layout: state.layout
    }),
        dispatch => ({
        actions: bindActionCreators(layoutActions, dispatch)
    })
)(App);