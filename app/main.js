import "./style.css";
// get data
// promises
//show data
const DOMSelectors = {
  container: document.querySelector(".container"),
};
async function getData() {
  try {
    //returns a promise
    const response = await fetch(
      "https://date.nager.at/api/v3/PublicHolidays/2024/US"
    );
    //guard clause
    if (response.status > 200) {
      throw new Error(response);
    } else {
      //converst response to json
      const data = await response.json();
      console.log(data);
      //unique to this api

      data.forEach((date) => console.log(date.name));
      addCards();
    }
  } catch (error) {
    alert("hey I could not find that agent");
  }
}

getData();

function addCards(event) {
  event.preventDefault();
  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `
    coj
    <div class="card">
    <h1> ${date.name}</h1>
    </div>
    `
  );
}

// test fetch call to get data
// if coors is yes try again?
