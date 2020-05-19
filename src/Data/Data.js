const Products = {
    items: [

    ],
};

function initApp() {

  getMoviesFromMongo();

}

initApp()
function getMoviesFromMongo(){

  fetch("https://git.heroku.com/polar-meadow-31783.git/shop")
      .then(res => res.json())
      .then(res => {
        Products.items = res;
      });
}


export default Products
