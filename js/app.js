let app;

import Portfolio from '/classes/portfolio';

//load the portfolio class into the app
if (!app.Portfolio) window.Portfolio = Portfolio();
Portfolio();