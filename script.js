// Code goes here

angular.module("bookmyshowapp",[]).
controller("mycontroller",function($scope){
  $scope.movies=[{
    "name":"DDLJ",
    "Director":"Aditya Chopra",
    "Starcaste":"4"
  },{
    "image":"",
     "name":"Hacker",
    "Director":"Iain Softley",
    "Starcaste":"5"
    
  },{
    "image":"",
     "name":"Fast & Furious 7",
    "Director":"James Wan",
    "Starcaste":"3"
    
  }];
  $scope.imageurl="http://www.hindustantimes.com/rf/image_size_800x600/HT/p2/2015/10/20/Pictures/_ae1f2c00-76ee-11e5-9d61-41ab8e878edd.jpg";
 
});
