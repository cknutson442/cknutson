
function addCar(model, make, engine, trans, year, drivetrain) {
	Parse.initialize("MBfkHSHRIDp4ADroc0JyUznwI18CqyP0KgN59Hz3", "Xzbl6FzWBnUiOlgiHgo7xdBDyaFdPQ7SoZNIvf1R");

	var Car = Parse.Object.extend("Car");

	var car = new Car();

	car.set("model",model);
	car.set("make",make);
	car.set("engine",engine);
	car.set("trans",trans);
	car.set("year",year);
	car.set("drivetrain",drivetrain);

	car.save(null, {
	  success: function(car) {
	    // Execute any logic that should take place after the object is saved.
	    alert('New object created with objectId: ' + car.id);
	  },
	  error: function(car, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    alert('Failed to create new object, with error code: ' + error.message);
	  }
	});

}

function findCar(id) {
	Parse.initialize("MBfkHSHRIDp4ADroc0JyUznwI18CqyP0KgN59Hz3", "Xzbl6FzWBnUiOlgiHgo7xdBDyaFdPQ7SoZNIvf1R");
	var Car = Parse.Object.extend("Car");
	var query = new Parse.Query(Car);
	query.get(id, {
  		success: function(car) {
  		  // The object was retrieved successfully.
  		},
  		error: function(object, error) {
  		  // The object was not retrieved successfully.
  		  // error is a Parse.Error with an error code and message.
  		}
	});

	var model = car.get("model");
	var make = car.get("make");
	var engine = car.get("engine");
	var trans = car.get("trans");
	var year = car.get("year");
	var drivetrain = car.get("drivetrain");
}

function findCars(make) {
	Parse.initialize("MBfkHSHRIDp4ADroc0JyUznwI18CqyP0KgN59Hz3", "Xzbl6FzWBnUiOlgiHgo7xdBDyaFdPQ7SoZNIvf1R");
	var Car = Parse.Object.extend("Car");
	var query = new Parse.Query(Car);
	query.equalTo("make", make);
	query.find({
  		success: function(results) {
  		  alert("Successfully retrieved " + results.length + " cars.");
  		  // Do something with the returned Parse.Object values
  		  for (var i = 0; i < results.length; i++) { 
  		    var object = results[i];
  		    alert(object.id + ' - ' + object.get('model'));
  		  }
  		},
  		error: function(error) {
  		  alert("Error: " + error.code + " " + error.message);
  		}
	});
}

function updateCar(id) {
	Parse.initialize("MBfkHSHRIDp4ADroc0JyUznwI18CqyP0KgN59Hz3", "Xzbl6FzWBnUiOlgiHgo7xdBDyaFdPQ7SoZNIvf1R");

        var Car = Parse.Object.extend("Car");

        var car = new Car(id);

        car.set("model",model);
        car.set("make",make);
        car.set("engine",engine);
        car.set("trans",trans);
        car.set("year",year);
        car.set("drivetrain",drivetrain);

        car.save(null, {
          success: function(car) {
            // Execute any logic that should take place after the object is saved.
            alert('New object created with objectId: ' + car.id);
          },
          error: function(car, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
          }
        });
	
}

function deleteCar(id) {
	Parse.initialize("MBfkHSHRIDp4ADroc0JyUznwI18CqyP0KgN59Hz3", "Xzbl6FzWBnUiOlgiHgo7xdBDyaFdPQ7SoZNIvf1R");
	
	var Car = Parse.Object.extend("Car");

        var query = new Parse.Query(Car);
        query.equalTo("make", make);
	
	query.get(id, {
                success: function(car) {
                  // The object was retrieved successfully.
                },
                error: function(object, error) {
                  // The object was not retrieved successfully.
                  // error is a Parse.Error with an error code and message.
                }
        });

	query.destroy({
  		success: function(myObject) {
  		  // The object was deleted from the Parse Cloud.
  		},
  		error: function(myObject, error) {
  		  // The delete failed.
  		  // error is a Parse.Error with an error code and message.
  		}
	});
}

function signup(username, password) {
	Parse.initialize("MBfkHSHRIDp4ADroc0JyUznwI18CqyP0KgN59Hz3", "Xzbl6FzWBnUiOlgiHgo7xdBDyaFdPQ7SoZNIvf1R");
	var user = new Parse.User();
	user.set("username", username);
	user.set("password", password);
 
 
	user.signUp(null, {
	  success: function(user) {
	    // Hooray! Let them use the app now.
	    window.location = '#admin'
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}

function login(username, password) {
	Parse.initialize("MBfkHSHRIDp4ADroc0JyUznwI18CqyP0KgN59Hz3", "Xzbl6FzWBnUiOlgiHgo7xdBDyaFdPQ7SoZNIvf1R");
	Parse.User.logIn(username, password, {
	  success: function(user) {
	    // Do stuff after successful login.
	    window.location = '#admin';
	  },
	  error: function(user, error) {
	    // The login failed. Check error to see why.
	  }
	});	
}

function logout() {
	Parse.initialize("MBfkHSHRIDp4ADroc0JyUznwI18CqyP0KgN59Hz3", "Xzbl6FzWBnUiOlgiHgo7xdBDyaFdPQ7SoZNIvf1R");
	Parse.User.logOut();
	window.location = '#home';
}
