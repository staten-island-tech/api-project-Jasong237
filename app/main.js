import "./style.css";
// get data
// promises
//show data

async function getData() {
  try {
    //returns a promise
    const response = await fetch("https://valorant-api.com/v1/agents");
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //converst response to json
      const data = await response.json();
      console.log(data.data);
      //unique to this api
      data.data
        .forEach((agent) => console.log(agent.displayName))
        .document.querySelector("div")
        .insertAdjacentHTML("afterbegin", `<h1> ${agent.displayName}</h1>`);
    }
  } catch (error) {
    alert("hey I could not find that agent");
  }
}

getData();
