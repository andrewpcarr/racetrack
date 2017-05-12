$(function() {
  $('.review-race').on('click', function() {
    $('.modal').fadeIn(500);
  });

  $('.cancel').on('click', function() {
    $('.modal').fadeOut(500);
  });

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
 