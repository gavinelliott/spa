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
	switch(req.query["radio-group"]) {
	  case "Never been married":
	    res.render("iteration1-v4/question2");
	  case "Married":
	    res.render("iteration1-v4/tel-number");
	  default:
	    //None of the above, go to error
	    res.redirect("iteration1-v4/error");
	}
	});


  app.post('/iteration1-v4/start_smart', function (req, res) {

    if(req.body["ni_number"] == "Yes"){  res.redirect("iteration1-v4/authenticate") }else{

        res.redirect("iteration1-v4/start_smart_error")
    }

    });


    app.get('/iteration1-v4/calculated', function (req, res) {
      if(req.query["radio-inline-group"] == "Yes"){
          res.redirect("iteration1-v4/error")
      }
      res.render('iteration1-v4/calculated.html');
    });

    app.get('/iteration1-v4/bank-details', function (req, res) {
      if(req.query["radio-indent-group"] == "No"){
          res.redirect("iteration1-v4/defer")
      }
      res.render('iteration1-v4/bank-details.html');
    });
  }
};
