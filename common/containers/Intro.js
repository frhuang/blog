import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
    render() {
        return (
            <section className="gf-view">
                <div className="gf-centered-wraper">
                    <div className="avatar"></div>
                    <div className="intro-content">
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
