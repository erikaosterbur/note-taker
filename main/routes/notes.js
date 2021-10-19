const router = require('express').Router();

router.get('/api/notes', (req, res, next) => {
    //.......
  
    next();
   });
  
 
  router.post('/api/notes', (req, res, next) => {
   //.......
  
   next();
  });
  
  
  router.put('/api/notes', (req, res, next) => {
    //.......
  
    next();
  });
  
  
 
module.exports = router;