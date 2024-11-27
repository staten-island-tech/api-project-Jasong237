import "./style.css";
// get data
// promises
//show data
//I did NOT create files via upload
const DOMSelectors = {
  container: document.querySelector(".card-body"),
  submit: document.querySelector(".submit"),
  id: document.querySelector(".id"),
};

let URL = "https://dummyjson.com/quotes/random/10";

async function getData() {
  try {
    //returns a promise
    const response = await fetch(URL);
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
    "beforeend",
    `
    <div class="card bg-neutral shadow-xl">
    <h1 class="card-title"> ${quote.author} </h1>
    <h2 class="card-normal"> ${quote.quote} </h2>
    <p class="card-id"> ID: ${quote.id} </p>
    </div>
    `
  );
}

function findCard(event) {
  event.preventDefault();
  if (DOMSelectors.id.value > 1455) {
    alert("Our last quote is 1454.");
    return;
  }
  if (DOMSelectors.id.value > 0) {
    DOMSelectors.container.innerHTML = "";
    searchData();
  } else {
    alert("Please enter a number above 0");
  }
}

async function searchData() {
  let newURL = `https://dummyjson.com/quotes/${DOMSelectors.id.value}`;
  try {
    const response = await fetch(newURL);
    console.log("response", response);

    if (response.status > 200) {
      throw new Error(response);
    } else {
      const newData = await response.json();
      console.log(newData);
      addCards(newData);
    }
  } catch (error) {
    alert(error);
  }
}

DOMSelectors.submit.addEventListener("click", findCard);

// test fetch call to get data
// if coors is yes try again?
