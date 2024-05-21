const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const getselect = document.querySelectorAll(".dropdown select");
const getbutton = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const getmsg = document.querySelector(".msg");

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
  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}

const updateflag = (element) => {
  currcode = element.value;
  //console.log(currcode)
  let countcode = countryList[currcode];
  console.log(countcode);
  newsrc = `https://flagsapi.com/${countcode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

getbutton.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let getenteramount = document.querySelector(".amount input");
  amount = getenteramount.value;
  console.log(amount);
  if (amount === "" || isNaN(amount) || Number(amount) < 0) {
    getenteramount.value = "1";
  }
 // Construct the URL for fetching conversion rate data
  const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.josn`;
  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    // Parse JSON response
    let datainfo = await response.json();
    let excrate = datainfo.value.toLowerCase();
    let finalamount = amount * excrate;

    // Display the result
    getmsg.innerText = `${amount} ${fromcurr.value} = ${finalamount} ${tocurr.value}`;
  } catch (error) {
     // Handle 404 errors specifically
    console.error('Error:', error);
    getmsg.innerText = 'Sorry, there was an issue with the currency conversion service |API NOT AVAILABLE|. Please try again later.';
  }
});
