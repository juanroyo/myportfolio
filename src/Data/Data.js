const Products = {
    items: [

    ],
};

function initApp() {

  getMoviesFromMongo();

}

initApp()
function getMoviesFromMongo(){

  fetch("https://ancient-oasis-38770.herokuapp.com//shop")
      .then(res => res.json())
      .then(res => {
        Products.items = res;
      });
}


export default Products
