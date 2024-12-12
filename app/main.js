import "./style.css";
// get data
// promises
//show data
//I did NOT create files via upload
// due tuesday!!

const DOMSelectors = {
  container: document.querySelector(".flex"),
  submit: document.querySelector(".submit"),
  id: document.querySelector(".id"),
  left: document.querySelector(".left"),
  right: document.querySelector(".right"),
};

let URL = "https://dummyjson.com/quotes/random/9";
let value = 0;

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
    <div class="card lg:w-[30rem] lg:h-[40rem] md:w-[15rem] md:h-[24rem] w-[12rem] md:h-[18rem] border-secondary my-10 border-8 bg-primary shadow-xl hover:animate-bounce animate-pulse">
    <h4 class="card-title underline text-center md:text-md lg:text-lg"> ${quote.author} </h4>
    <h5 class="card-normal text-center lg:text-xl md:text-lg"> ${quote.quote} </h5>
    <p class="card-id"> ID: ${quote.id} </p>
    </div>
    `
  );
}

function findCard(event) {
  event.preventDefault();
  if (DOMSelectors.id.value >= 1455) {
    alert("Our last quote is 1454.");
    return;
  }
  if (DOMSelectors.id.value > 0) {
    value = `${DOMSelectors.id.value}`;
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

function leftCard(event) {
  event.preventDefault();
  if (value === 0) {
    alert("Input an ID # first to use the arrows");
    return;
  } else {
    value--;
    console.log(value);
    if (value > 0) {
      DOMSelectors.container.innerHTML = "";
      nextData();
    } else {
      alert("min ID # is 1.");
      value = value + 1;
      return;
    }
  }
}

function rightCard(event) {
  event.preventDefault();
  if (value === 0) {
    alert("Input an ID # first to use the arrows");
    return;
  }
  value++;
  console.log(value);
  if (value < 1455) {
    DOMSelectors.container.innerHTML = "";
    nextData();
  } else {
    value = value - 1;
    alert("max ID # is 1454.");
    return;
  }
}

async function nextData() {
  let newURL = `https://dummyjson.com/quotes/${value}`;
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
DOMSelectors.left.addEventListener("click", leftCard);
DOMSelectors.right.addEventListener("click", rightCard);

// test fetch call to get data
// if coors is yes try again?

//js file w 60k line array
// how to filter
// learn includes, foreach, and filter
// next tuesday
