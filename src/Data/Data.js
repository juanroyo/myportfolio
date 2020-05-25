const Products = {
    items: [

    ],
};

function initApp() {

  getMoviesFromMongo();

}

initApp()
function getMoviesFromMongo(){

  fetch("https://myportfolionode.herokuapp.com/data")
      .then(res => res.json())
      .then(res => {
        Products.items = res;
      });
}


export default Products
