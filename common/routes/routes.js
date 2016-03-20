import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import Intro from '../containers/Intro';
import About from '../containers/About';
import Labs from '../containers/Labs';
import Blog from '../containers/Blog';
import BlogDetail from '../containers/BlogDetail';
import NoFound from '../containers/NoFound';

import AdminIndex from '../containers/admin/Index';
import ArticleLists from '../containers/admin/ArticleLists';
import Login from '../containers/admin/LoginPage';
import Register from '../containers/admin/Register';
import CreateArticle from '../containers/admin/CreateArticle';
import AdminLabs from '../containers/admin/AdminLabs';
import EditArticle from '../containers/admin/EditArticle';

export default (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Intro} />
            <Route path="intro" component={Intro} />
            <Route path="blog" component={Blog} />
            <Route path="labs" component={Labs} />
            <Route path="about" component={About} />
            <Route path="login" component={Login} />
            <Route path="register" component={Register} />
            <Route path="blogDetail/:id" component={BlogDetail} />
        </Route>
        <Route path="/admin" component={AdminIndex}>
            <IndexRoute component={ArticleLists} />
            <Route path="/admin/create" component={CreateArticle} />
            <Route path="/admin/edit/:id" component={EditArticle} />
            <Route path="/admin/labs" component={AdminLabs} />
        </Route>
        <Route path="*" component={NoFound} />
    </Router>
);