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
    const response = await fetch("https://api.disneyapi.dev/character");
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //converst response to json
      const data = await response.json();
      console.log(data.data);
      //unique to this api
      data.data.forEach((show) => console.log(show.films));

      DOMSelectors.container.insertAdjacentHTML(
        "afterbegin",
        `<h1> ${show.films}</h1>`
      );
    }
  } catch (error) {
    alert("hey I could not find that agent");
  }
}

getData();

// test fetch call to get data
// if coors is yes try again?
