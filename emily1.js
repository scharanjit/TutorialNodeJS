/**
 * Created by charanjits on 28/6/16.
 */

var movies=require("./MoviesObjectFactory");
var emilyMovies=movies();
emilyMovies.favMovie="The Notebook";

console.log("Emily 1 fav movie :"+emilyMovies.favMovie)