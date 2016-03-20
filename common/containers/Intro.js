import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
    render() {
        return (
            <section className="gf-view" id="gf-intro">
                <div className="gf-centered-wraper">
                    <div id="avatar"></div>
                    <div id="intro-content">
                        <h1>小狮子</h1>
                        <h2>samewii</h2>
                        <p>----全栈开发爱好者</p>
                    </div>
                </div>
                <div className="intro-cover"></div>
                <div className="intro-bg"></div>
            </section>
        )
    }
}
