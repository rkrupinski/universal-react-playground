import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Resolver } from "react-resolver";

import routes from './routes';
import NotFound from './components/notFound';

const app = new Express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => match({
  routes,
  location: req.url
}, (err, redirectLocation, renderProps) => {
  if (err) {
    return res.status(500).send(err.message);
  }

  if (redirectLocation) {
    return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
  }

  if (renderProps) {
    Resolver.resolve(() => <RouterContext {...renderProps} />)
        .then(({ Resolved, data }) => {
          res.render('index', {
            markup: renderToString(<Resolved />),
            data: JSON.stringify(data),
          });
        })
        .catch(err => res.status(500).send(err.message));
  } else {
    res.render('index', {
      markup: renderToString(<NotFound />),
    });
  }
   
  // let markup;

  // if (renderProps) {
  //   markup = renderToString(<RouterContext {...renderProps}/>);
  // } else {
  //   markup = renderToString(<NotFound />);
  //   res.status(404);
  // }

  // return res.render('index', { markup });
}));

app.listen(3000, function () {
  console.log('\nGo go go!');
});
