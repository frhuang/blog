import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
    render() {
        return (
            <div className="gf-view flex-conainer flex-row" id="gf-contact">
                <div className="social-link">
                    <div className="about-left-top"></div>
                    <div className="about-left-content">
                        <p>忆往昔</p>
                        <p>两三毛钱</p>
                        <p>一声笛鸣</p>
                        <p>半江笑语</p>
                        <p className="p-top">看今朝</p>
                        <p>三五基友</p>
                        <p>一声淫笑</p>
                        <p>半江无语</p>
                        <p className="name-tips p-top">--牛牛</p>
                    </div>
                    <div className="links">
                        <a className="link-icon icon-github" target="_blank" href="https://github.com/frhuang"></a>
                        <a className="link-icon icon-weibo" target="_blank" href="http://weibo.com/u/2784353282"></a>
                        <a className="link-icon icon-zhihu" target="_blank" href="https://www.zhihu.com/people/hfrun"></a>
                    </div>
                </div>
                <div className="flex contact-form">
                    <p>samewii  广州</p>
                    <p>furunsisi@qq.com</p>
                    <p>爱爬山、爱生活、摄影</p>
                    <p>码农</p>
                    <p>Live in the future and build what seems interesting.</p>
                </div>
            </div>
        )
    }
}