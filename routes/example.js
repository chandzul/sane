const express = require('express');

function exampleApi(app) {
  const router = express.Router();
  app.use('/api/example', router);

  // eslint-disable-next-line consistent-return
  router.get('/', async (req, res, next) => {
    try {
      console.log('none');
      return res.status(200).json({
        status: 'success',
        message: 'Endpoint example success',
        data: [],
      });
    } catch (error) {
      next(error);
    }
  });
}
module.exports = exampleApi;
