$(document).ready(function() {

$(function() {
  // $('.review-race').on('click', function() {
  //   $('.modal').fadeIn(500);
  // });
  //
  // $('.cancel').on('click', function() {
  //   $('.modal').fadeOut(500);
  // });

  // $('.btn-warning').on('click', function() {
  //  $('.btn-secondary').append($("<div class='w3-container w3-center w3-animate-bottom review-confirmation'>\
  //         <h1>Review submitted!</h1>\
  //       </div>"));
  // });
  //

  $('.btn.btn-warning.submit-review').on('click', function() {
    createNewReview();
    $('.modal').fadeOut(500);
  });

  let name;
  let atmosphere;
  let swag;
  let aid_stations;
  let clarity;
  let sighting;
  let transition;
  let road_surface;
  let run_hills;
  let bike_hills;
  let run_shade;
  let overall_rating;
  let race_again;
  let highlight;
  let comments;
  let review;

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
    name = $('#name').val();
    atmosphere = $('#atmosphere option:selected').text();
    swag = $('#swag option:selected').text();
    aid_stations = $('#aid_stations option:selected').text();
    clarity = $('#clarity option:selected').text();
    sighting = $('#sighting option:selected').text();
    transition = $('#transition option:selected').text();
    road_surface = $('#road_surface option:selected').text();
    run_hills = $('#run_hills option:selected').text();
    bike_hills = $('#bike_hills option:selected').text();
    run_shade = $('#run_shade option:selected').text();
    overall_rating = $('#overall_rating option:selected').text();
    race_again = $('#race_again option:selected').text();
    highlight = $('#highlight').val();
    comments = $('#comments').val();

    review = new Review(name, atmosphere, swag, aid_stations, clarity, sighting, transition, road_surface, run_hills, bike_hills, run_shade, overall_rating, race_again, highlight, comments);

    console.log(review);
  }

});


//Function to get weather from API

var race_city=$(".race-details").data("city");
var race_month=$(".race-details").data("month");
var race_state=$(".race-details").data("state");
console.log("Getting info for weatherunderground API call: " + race_month + ", " + race_city + ", " + race_state);
/*TH NOTE:  trying to use moment.js.  It gives not defined message in browser console, but still converts
the date to a numeric format so not sure what is going on */
race_month = moment().month(race_month).format("MM");
/*TH note:  taking a "hacky" route with the days range for the weather API call. The below works for all months
and gets pretty much the full month */
var queryDate=race_month+"01" + race_month+"28";
console.log("Moment seems to be working and converting month: " + race_month);
//VARs to capture the weather objects for the race city. each object has name, description, percentage
var chanceHumid;
var chanceRain;
var chanceSweltering;
var chanceWindy;

  function getWeather () {
      var queryUrl="https://api.wunderground.com/api/8daf99af10e08773/planner_" +
       queryDate + "/q/"+race_state+"/" + race_city + ".json";
       console.log(queryUrl);

        $.ajax({
          url: queryUrl,
          method: "GET"
        }).done(function(res) {
           chanceHumid=res.trip.chance_of.chanceofhumidday;
           chanceRain=res.trip.chance_of.chanceofrainday;
           chanceSweltering=res.trip.chance_of.chanceofsultryday;
          chanceWindy=res.trip.chance_of.chanceofwindyday;
     console.log("test to see if this working? " + "Chance of Humid Day: " + chanceHumid.name + ", " +
     chanceHumid.percentage + " percent");
     $('#weather-div').html("Chance of Humid Day: " +
     chanceHumid.percentage + "%");
          });
  }
getWeather();



}) // end of doc  ready

