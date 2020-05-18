const Products = {
    items: [

    ],
};

function initApp() {
  console.log("initApp");
  //this.GetMovies();
  getMoviesFromMongo();

}

initApp()
function getMoviesFromMongo(){
  console.log("la funcion")
  fetch("http://localhost:8080/shop")
      .then(res => res.json())
      .then(res => {
        Products.items = res;
      });
}


export default Products
