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

	/* redirect routes for v2 */
    app.get('/iteration2-v2/question2', function (req, res) {
	switch(req.query["radio-group"]) {
	  case "Never been married":
	    res.render("iteration2-v2/question2");
	  case "Married":
	    res.render("iteration2-v2/year-of-marriage");
	  case "Other":
	    res.render("iteration2-v2/error");
	  default:
	    //None of the above, go to error
	    res.redirect("iteration2-v2/question2");
	}
	});

	/* redirect routes for v2 */
    app.get('/iteration3-v1/question2', function (req, res) {
	switch(req.query["radio-group"]) {
	  case "Never been married":
	    res.render("iteration3-v1/question2");
	  case "Married":
	    res.render("iteration3-v1/year-of-marriage");
	  case "Other":
	    res.render("iteration3-v1/error");
	  default:
	    //None of the above, go to error
	    res.redirect("iteration3-v1/question2");
	}
	});


  app.get('/iteration2-v2/marriage-year', function (req, res) {

	switch(req.query["marriage_year"]) {
    case "1973":
    	  res.redirect("iteration2-v2/overseas");
    default:
	    //None of the above, go to error
	    res.redirect("iteration2-v2/wrong-marriage-year");
    }
    });


	app.get('/iteration2-v2/overseas', function (req, res) {
      res.render('iteration2-v2/question2');
    });


    app.post('/iteration2-v2/start_smart', function (req, res) {

    if(req.body["ni_number"].replace( /\s/g, "") == "1234567843218765"){  res.redirect("iteration2-v2/authenticate") }else{

        res.redirect("iteration2-v2/start_smart_error")
    }

    });

    app.post('/iteration3-v1/start_smart', function (req, res) {

    if(req.body["ni_number"].replace( /\s/g, "") == "1234567843218765"){  res.redirect("iteration3-v1/question1") }else{

        res.redirect("iteration3-v1/start_smart_error")
    }

    });




    app.get('/iteration2-v2/calculated', function (req, res) {
      if(req.query["radio-inline-group"] == "Yes"){
          res.redirect("iteration2-v2/error")
      }
      res.render('iteration2-v2/calculated.html');
    });

    app.get('/iteration2-v2/bank-details', function (req, res) {
      if(req.query["radio-indent-group"] == "No"){
          res.redirect("iteration2-v2/defer")
      }
      res.render('iteration2-v2/bank-details.html');
    });


    app.get('/iteration3-v1/marriage-year', function (req, res) {

  	switch(req.query["marriage_year"]) {
      case "1973":
      	  res.redirect("iteration3-v1/overseas");
      default:
  	    //None of the above, go to error
  	    res.redirect("iteration3-v1/wrong-marriage-year");
      }
      });

      app.get('/iteration3-v1/overseas', function (req, res) {
          res.render('iteration2-v2/question2');
        });




        /* Routes for Iteration3-v2 */



		app.post('/iteration3-v2/start_smart', function (req, res) {
			if(req.body["ni_number"].replace( /\s/g, "") == "1234567843218765"){  res.redirect("iteration3-v2/work") }else{
				res.redirect("iteration3-v2/start_smart_error")
	    	}
		});


		app.get('/iteration3-v2/overseas', function (req, res) {
          res.render('iteration3-v2/question2');
        });


		/* redirect routes for v2 */
	    app.get('/iteration3-v2/question2', function (req, res) {

        if(req.query["radio-inline-group"]== "Yes"){
	          res.redirect("iteration3-v2/error")
	      }else if(req.query["radio-inline-group"]== "No"){
	      res.render('iteration3-v1/question1');}

    switch(req.query["radio-group"]) {
		  case "Never been married":
		    res.render("iteration3-v2/calculated");
		  case "Married":
		    res.render("iteration3-v2/year-of-marriage");
		  case "Other":
		    res.render("iteration3-v2/error");
		  default:
		    //None of the above, go to error
		    res.redirect("iteration3-v2/error");
			}
		});

		app.get('/iteration3-v2/marriage-year', function (req, res) {
		switch(req.query["marriage_year"]) {
			case "1973":
				res.redirect("iteration3-v2/calculated");
			default:
				//None of the above, go to error
				res.redirect("iteration3-v2/error");
    		}
    	});


  }
};
