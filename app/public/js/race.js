$(function() {
  $('.btn.btn-warning.submit-review').on('click', function() {
    createNewReview();
    $('.modal').fadeOut(500);
  });

  function Review(name, atmosphere, swag, aid_stations, clarity, sighting, transition, road_surface, run_hills, bike_hills, run_shade, overall_rating, race_again, highlight, comments) {
    this.name = name;
    this.atmosphere = atmosphere;
    this.swag = swag;
    this.aid_stations = aid_stations;
    this.clarity = clarity;
    this.sighting = sighting;
    this.transition - transition;
    this.road_surface = road_surface;
    this.run_hills = run_hills;
    this.bike_hills = bike_hills;
    this.run_shade = run_shade;
    this.overall_rating = overall_rating;
    this.race_again = race_again;
    this.highlight = highlight;
    this.comments = comments;
    this.printInfo = function() {
      console.log();
    };
  }

  function createNewReview() {
    const name = $('#name').val();
    const atmosphere = $('#atmosphere option:selected').text();
    const swag = $('#swag option:selected').text();
    const aid_stations = $('#aid_stations option:selected').text();
    const clarity = $('#clarity option:selected').text();
    const sighting = $('#sighting option:selected').text();
    const transition = $('#transition option:selected').text();
    const road_surface = $('#road_surface option:selected').text();
    const run_hills = $('#run_hills option:selected').text();
    const bike_hills = $('#bike_hills option:selected').text();
    const run_shade = $('#run_shade option:selected').text();
    const overall_rating = $('#overall_rating option:selected').text();
    const race_again = $('#race_again option:selected').text();
    const highlight = $('#highlight').val();
    const comments = $('#comments').val();

    return new Review(name, atmosphere, swag, aid_stations, clarity, sighting, transition, road_surface, run_hills, bike_hills, run_shade, overall_rating, race_again, highlight, comments);

    console.log(review);
  }

  //Function to get weather from API
  const race_city = $(".race-details").data("city");
  const race_state = $(".race-details").data("state");
  const race_month = moment().month($(".race-details").data("month")).format("MM");
  console.log("Getting info for weatherunderground API call: " + race_month + ", " + race_city + ", " + race_state);
  /*TH NOTE:  trying to use moment.js.  It gives not defined message in browser console, but still converts
  the date to a numeric format so not sure what is going on */
  /*TH note:  taking a "hacky" route with the days range for the weather API call. The below works for all months
  and gets pretty much the full month */
  const queryDate = race_month + "01" + race_month + "28";
  console.log("Moment seems to be working and converting month: " + race_month);
  //VARs to capture the weather objects for the race city. each object has name, description, percentage

  function getWeather() {
    const queryUrl = "https://api.wunderground.com/api/8daf99af10e08773/planner_" +
      queryDate + "/q/" + race_state + "/" + race_city + ".json";
    console.log(queryUrl);

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).done(function(res) {
      const chanceHumid = res.trip.chance_of.chanceofhumidday;
      const chanceRain = res.trip.chance_of.chanceofrainday;
      const chanceSweltering = res.trip.chance_of.chanceofsultryday;
      const chanceWindy = res.trip.chance_of.chanceofwindyday;

      console.log("test to see if this working? " + "Chance of Humid Day: " + chanceHumid.name + ", " +
        chanceHumid.percentage + " percent");
      $('#weather-div').html("Chance of Humid Day: " +
        chanceHumid.percentage + "%");
    });
  }

  getWeather();
});
