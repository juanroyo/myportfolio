const initState = {
    items: [

    ],
};
function initApp() {
  console.log("initApp");
  //this.GetMovies();
  GetMoviesFromMongo();
}

initApp()
function GetMoviesFromMongo(){
  console.log("la funcion")
  fetch("http://localhost:8080/shop")
      .then(res => res.json())
      .then(res => {
        initState.items = res;
      });
}
export default initState
