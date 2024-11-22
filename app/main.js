import "./style.css";
// get data
// promises
//show data
//I did NOT create files via upload
const DOMSelectors = {
  container: document.querySelector(".card-body"),
};

async function getData() {
  try {
    //returns a promise
    const response = await fetch("https://dummyjson.com/quotes/random/10");
    console.log("response", response);
    //guard clause
    if (response.status > 200) {
      throw new Error(response);
    } else {
      //converst response to json
      const data = await response.json();
      console.log(data);
      //unique to this api

      data.forEach((quote) => addCards(quote));
    }
  } catch (error) {
    alert(error);
  }
}

getData();

function addCards(quote) {
  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card bg-neutral shadow-xl">
    <div class="card-title"> Random Quote </div>
    <h2 class="card-normal"> ${quote.quote} </h2>
    </div>
    `
  );
}

// test fetch call to get data
// if coors is yes try again?
