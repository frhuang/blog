import React from 'react';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';
import configureStore from '../../common/store/configureStore';
import routes from '../../common/routes/routes';
import { match, RouterContext, createMemoryHistory } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';


function handleRender(req, res) {
    const memoryHistory = createMemoryHistory(req.url)
    const store = configureStore(memoryHistory)
    const history = syncHistoryWithStore(memoryHistory, store);
    match({history, routes, location: req.url}, (err, redirectLocation, renderProps) => {
        if(err) {
            return res.status(500).send(err.message)
        }
        if(!renderProps) {
            return res.status(404).send('the pages is not found');
        }
        var store = configureStore();

        const html = renderToString(
            <Provider store={store}>
                { <RouterContext {...renderProps} /> }
            </Provider>
        );
        const initialState = store.getState();
        res.status(200).end(renderFullPage(html, initialState));

    })
}

const renderFullPage = (html, initialState) => {
    return `
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>samewii-blog</title>
          </head>
          <body>
            <div id="app">${html}</div>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
            </script>
            <script src="/js/jquery.min.js"></script>
            <script src="/js/mditor.js"></script>
            <script src="/build/bundle.js"></script>
          </body>
        </html>
    `
}

export default function(app, config) {
    const compiler = webpack(webpackConfig);
    app.use(WebpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));
    app.use(WebpackHotMiddleware(compiler));
    app.use(handleRender);

}