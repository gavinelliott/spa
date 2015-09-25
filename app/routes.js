module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    /* redirect routes for v4 */
    app.get('/iteration1-v4/question2', function (req, res) {
      if(req.query["radio-group"] != "Never been married"){
          res.redirect("iteration1-v4/error")
      }
      res.render('iteration1-v4/question2.html');
    });

    app.get('/iteration1-v4/calculated', function (req, res) {
      if(req.query["radio-inline-group"] == "Yes"){
          res.redirect("iteration1-v4/error")
      }
      res.render('iteration1-v4/calculated.html');
    });

    app.get('/iteration1-v4/bank-details', function (req, res) {
      if(req.query["radio-indent-group"] == "No"){
          res.redirect("iteration1-v4/deffer")
      }
      res.render('iteration1-v4/bank-details.html');
    });
  }
};
