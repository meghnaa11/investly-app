// For modularization and centralization

import investmentRoute from './investments.js';
import stockRoutes from './stocks.js';
import riskAssessmentRoutes from './riskAssessments.js';
import userRoutes from './users.js';


const constructorMethod = (app) => {
    //app.use('/', homeRoutes); - static
    // error - dynamic - route? 
    app.use('/user', userRoutes);
    app.use('/stocks', stockRoutes);
    app.use('/risk-assessment', riskAssessmentRoutes);
    app.use('/investments', investmentRoute);
    app.use('*', (req, res) => {
        // TODO - add error page
        res.status(404).render('error', { title: '404 Error', statusCode: 404, error: 'Page Not Found' });
    });
};

export default constructorMethod;
