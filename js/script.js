$(document).ready(function(){

// ==========================================================
// Declaration of an array of objects
// ==========================================================
var music = [
      {
        id : 101 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 102 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 103 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 104 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 105 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 106 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 107 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 108 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 109 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 110 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 111 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 112 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 113 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 114 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },
      {
        id : 115 ,
        title : 'JT',
        artist : 'Justin Timberlake',
        genre : 'hiphop',
        year : 2000,
        photo : 'jt.jpeg'
      },




];




// ==========================================================
// Function call to display all items
// ==========================================================

allMusic(); //displays all items on home page

$('#refresh').click(function(){
  allMusic();
});



// ==========================================================
// Display items as per user's input - breed filter call
// ==========================================================
//
// $('#showChoice').click(function(){
//   var inputArray = [];

  // read input of users and store
  // var rock = $('#rock:checked').val();
  // var rap = $('#rap:checked').val();
  // var pop = $('#pop:checked').val();

  //push user's choice into an array
  // if (rock === 'checked') {
  //       inputArray.push('Rock');
  //       console.log(inputArray);
  // }
  //
  // if (rap === 'checked') {
  //       inputArray.push('Rap');
  //       console.log(inputArray);
  // }
  //
  // if (hiphop === 'checked') {
  //       inputArray.push('Hip hop');
  //       console.log(inputArray);
  // }

  //call the function to filter user's choice
//   filteredMusic(inputArray);
//
// });//showChoice click function



// ==========================================================
// Behaviour filter call
// ==========================================================

// $('#showSelection').click(function(){
//   var behaviour = $('#behaviour').val();
//   console.log(behaviour);
//   filteredBehaviour(behaviour);
// });


// ==========================================================
// Function to display all items
// ==========================================================

function allMusic(){
  var i = 0;
  for (i = 0 ; i < music.length; i++){

    // own style
    // $('#result').append('<div class="row clearfix border border-danger m-2 p-2">' +
    //
    //                     '<div class="col-md-6">' +
    //                       '<h1>' + music[i].title +   '</h1>' +
    //                       '<h2>' + cats[i].breed + '</h2>' +
    //                        '<h3>' + cats[i].color + '</h3>' +
    //                        '<h5>' + cats[i].behaviour + '</h5>' +
    //
    //                     '</div>' +
    //
    //                     '<div class="col-md-6">' +
    //                       '<img src="images/' + cats[i].photo + '" alt=" ' + cats[i].breed + '" class="img-thumbnail" > ' +
    //                     '</div>' +
    //
    //                     '</div>'
    // ); //append ends here
    //

    //bootstrap cards to $display
    displayCards(i);
    // cardModal();
  } //end of for loop
} //end of allMusic function



// ==========================================================
// Modal
// ==========================================================

  // function cardModal(){
  //
  //   $('.moreDetails').click(function(){
  //     $('#imageCover').text(' '); //clearing the content
      // console.log(this.id);
      // var breed = '';
      // var i=0;
      // for (i = 0; i < cats.length; i++) {
      //   console.log(parseInt(this.id), cats[i].id);
      //   if (parseInt(this.id) === cats[i].id) {
      //     breed = cats[i].breed;
      //     console.log(breed);
      //     console.log(cats[i].id, cats[i].name, cats[i].breed);
      //       $('#exampleModalLabel').text(cats[i].breed);
            //append will keep  adding to existing content, so clear if you want
            //or else use html to replace existing content
        //     $('#imageCover').append('<img class="img-fluid" src="images/' + music[i].photo + '" alt="' + music[i].title + '"/>');
        //
        //
        // } //end of if statement


      // }//end of for statement
      // console.log(breed);
      // catCarousel(breed);





    // }); // end of moreDetails click event

  // } //cardModal



// ==========================================================
// Carousel
// ==========================================================

  // function musicCarousel(coverBack){
  //   var breedArray = [];
  //   $('#imageCover').text('');
  //   for (i = 0; i < music.length; i++) {
  //
  //     if (music[i].breed === coverBack) {
  //       breedArray.push(music[i].photo);
        // console.log(cats[i].description);
      //   $('#imageCover').append('<p class="text-danger lead">' + music[i].title + music[i].genre + music[i].year + music[i].description + '<p>' );
      // } //end of if
    // } //end of for

    // console.log(breedArray);
    // $('#imageCat').append(
    //   '  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">' +
    //   '  <ol class="carousel-indicators">' +
    //   '    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>' +
    //   '    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>' +
    //   '    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>' +
    //   '  </ol>' +
    //   '  <div class="carousel-inner">' +
    //   '    <div class="carousel-item active">' +
    //   '      <img class="d-block w-100" src="images/' + musicArray[0] + '" alt="First slide">' +
    //   '    </div>' +
    //   '    <div class="carousel-item">' +
    //   '      <img class="d-block w-100" src="images/' + musicArray[1] + '"alt="Second slide">' +
    //   '    </div>' +
    //   '  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">' +
    //   '    <span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    //   '    <span class="sr-only">Previous</span>' +
    //   '  </a>' +
    //   '  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">' +
    //   '    <span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    //   '    <span class="sr-only">Next</span>' +
    //   '  </a>' +
    //   '</div>'); //end of imageCover html

  // } //end of musicCarousel



// ==========================================================
// Filter by music type
// ==========================================================

// function filteredCats(catBreed){
//   console.log(catBreed);
//   var i,j;
//   $('#result').text(' ');
//   for(i = 0 ; i < cats.length; i++) {
//     for (j = 0 ; j < catBreed.length; j++){
//       if (catBreed[j] === cats[i].breed) {
//         displayCards(i);
//         cardModal();
//       }//if
//     }//for j
//   }//for i
// }//filteredCats


// ==========================================================
// Filter by cat behaviour
// ==========================================================

// function filteredBehaviour(catBehaviour){
//   console.log(catBehaviour);
//   var i,j;
//   $('#result').text(' ');
//   for(i = 0 ; i < cats.length; i++) {
//     for (j = 0 ; j < catBehaviour.length; j++){
//       console.log(catBehaviour[j], cats[i].behaviour)
//       if (catBehaviour[j] === cats[i].behaviour) {
//         displayCards(i);
//         cardModal();
//
//       }//if
//
//     }//for j
//   }//for i
// }//filteredBehaviour



// ==========================================================
// Display cards
// ==========================================================

function displayCards(j){
  //access properties of objects using index number
  $('#result').append( '<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-2">' +
                          '<div class="card text-danger" style="width: 18rem;">' +
                             '<img src="images/' + music[j].photo + '" class="card-img-top" alt="' + music[j].genre + '">' +
                             '<div class="card-body">' +
                              '<h1 class="card-title">'+ music[j].title + '</h1>' +
                              '<p class="card-text text-dark">Genre : ' + ' ' + '<span class="text-primary">' + music[j].genre+ '</span> <br></p>' +
                               '<p class="card-text text-dark">Artist : ' + ' ' + '<span class="text-primary">' + music[j].artist + '</span> <br></p>' +
                               '<p class="card-text text-dark">Year : ' + ' ' + '<span class="text-primary">' + music[j].year + '</span> <br></p>' +

                              '<button id="' + music[j].id + '" type="button" class="btn btn-primary moreDetails" data-toggle="modal" data-target="#exampleModal">More'+ " " + music[j].genre + '</button>' +
                            '</div>' +
                          '</div>' +
                      '</div>'
                  ); //append ends here


  }; //displayCards



}); //document.ready()
