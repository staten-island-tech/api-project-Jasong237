import "./style.css";
// get data
// promises
//show data
//I did NOT add files upon upload
const DOMSelectors = {
  container: document.querySelector(".container"),
};
async function getData() {
  try {
    //returns a promise
    const response = await fetch("https://dummyjson.com/quotes/random/10");
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
    alert("hey I could not find that agent");
  }
}

getData();

function addCards(quote) {
  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card">
    <h2 class="quote"> ${quote.quote} </h2>
    </div>
    `
  );
}

// test fetch call to get data
// if coors is yes try again?
