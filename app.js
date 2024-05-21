// Base URL for currency conversion API
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// Selecting dropdown elements
const getselect = document.querySelectorAll(".dropdown select");

// Selecting form button
const getbutton = document.querySelector("form button");

// Selecting "from" and "to" dropdowns
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");

// Selecting message element
const getmsg = document.querySelector(".msg");

// Populating dropdowns with country codes
for (let select of getselect) {
  for (councode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = councode;
    newoption.value = councode;
    select.append(newoption);
    if (select.name === "from" && councode === "PKR") {
      newoption.selected = "selected";
    } else if (select.name === "to" && councode === "AT") {
      newoption.selected = "selected";
    }
  }
  // Adding change event listener to dropdowns
  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}

// Function to update flag image based on selected country
const updateflag = (element) => {
  currcode = element.value;
  let countcode = countryList[currcode];
  newsrc = `https://flagsapi.com/${countcode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

// Adding click event listener to form button
getbutton.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let getenteramount = document.querySelector(".amount input");
  amount = getenteramount.value;
  if (amount === "" || isNaN(amount) || Number(amount) < 0) {
    getenteramount.value = "1";
  }
  // Constructing URL for fetching conversion rate data
  const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
  try {
    // Fetching conversion rate data
    let response = await fetch(URL);
    if (!response.ok) {
      // Handling 404 errors
      throw new Error("Failed to fetch data");
    }
    // Parsing JSON response
    let datainfo = await response.json();
    let excrate = datainfo.value.toLowerCase();
    let finalamount = amount * excrate;
    // Displaying the result
    getmsg.innerText = `${amount} ${fromcurr.value} = ${finalamount} ${tocurr.value}`;
  } catch (error) {
    // Handling 404 errors specifically
    console.error("Error:", error);
    getmsg.innerText =
      "Sorry, there was an issue with the currency conversion service |API NOT AVAILABLE|. Please try again later.";
  }
});
