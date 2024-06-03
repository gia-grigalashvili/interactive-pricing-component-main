// let slider = document.querySelector(".liner");
// let bill = document.getElementById("bill");
// let pageviews = document.getElementById("pageviews");

// slider.addEventListener("input", function () {
//   const value = (slider.value - slider.min) / (slider.max - slider.min);
//   slider.style.background = `linear-gradient(to right, rgb(13, 183, 177) 0%, rgb(13, 183, 177) ${
//     value * 100
//   }%, #ecf0fb ${value * 100}%, #ecf0fb 100%)`;
// });

// slider.addEventListener("input", function () {
//   let currentValue = parseInt(slider.value);
//   let billAmount = 16;

//   // Update bill amount based on slider value
//   switch (currentValue) {
//     case 0:
//       pageViews.innerText = "1044K PAGEVIEWS";
//       billAmount = 8;
//       break;
//     case 25:
//       pageViews.innerText = "11231220K PAGEVIEWS";
//       billAmount = 12;
//       break;
//     case 50:
//       pageViews.innerText = "11230K PAGEVIEWS";
//       billAmount = 16;
//       break;
//     case 75:
//       pageViews.innerText = "1230K PAGEVIEWS";
//       billAmount = 24;
//       break;
//     case 100:
//       pageViews.innerText = "11110K PAGEVIEWS";
//       billAmount = 36;
//       break;
//   }

//   // Update bill text
//   bill.textContent = `$${billAmount}`;
// });
///////////////////////chatgpt qvevita
// let slider = document.querySelector(".liner");
// let bill = document.getElementById("bill");
// let pageviews = document.getElementById("pageviews");
// const checkbox = document.getElementById("check");

// slider.addEventListener("input", function () {
//   const value = (slider.value - slider.min) / (slider.max - slider.min);
//   slider.style.background = `linear-gradient(to right, rgb(13, 183, 177) 0%, rgb(13, 183, 177) ${
//     value * 100
//   }%, #ecf0fb ${value * 100}%, #ecf0fb 100%)`;
//   /////////////////////////parseInt ras nishvanvs
//   let currentValue = parseInt(slider.value);
//   let billAmount = 16;

//   switch (currentValue) {
//     case 0:
//       pageviews.innerText = "10K pageviews";
//       billAmount = 8;
//       break;
//     case 25:
//       pageviews.innerText = "50K PAGEVIEWS";
//       billAmount = 12;
//       break;
//     case 50:
//       pageviews.innerText = "100K PAGEVIEWS";
//       billAmount = 16;
//       break;
//     case 75:
//       pageviews.innerText = "500K PAGEVIEWS";
//       billAmount = 24;
//       break;
//     case 100:
//       pageviews.innerText = "1M PAGEVIEWS";
//       billAmount = 36;
//       break;
//   }
//   if (checkbox.checked) {
//     billAmount *= 0.75 * 12;
//   }
//   bill.textContent = `$${billAmount}`;
// });
// checkbox.addEventListener("change", currentValue);

let slider = document.querySelector(".liner");
let bill = document.getElementById("bill");
let pageviews = document.getElementById("pageviews");
const checkbox = document.getElementById("check");
let years = document.getElementById("month-year");

function updateBillAmount() {
  const value = (slider.value - slider.min) / (slider.max - slider.min);
  slider.style.background = `linear-gradient(to right, rgb(13, 183, 177) 0%, rgb(13, 183, 177) ${
    value * 100
  }%, #ecf0fb ${value * 100}%, #ecf0fb 100%)`;
  let currentValue = parseInt(slider.value);
  let billAmount = 16;

  switch (currentValue) {
    case 0:
      pageviews.innerText = "10K pageviews";
      billAmount = 8;
      break;
    case 25:
      pageviews.innerText = "50K PAGEVIEWS";
      billAmount = 12;
      break;
    case 50:
      pageviews.innerText = "100K PAGEVIEWS";
      billAmount = 16;
      break;
    case 75:
      pageviews.innerText = "500K PAGEVIEWS";
      billAmount = 24;
      break;
    case 100:
      pageviews.innerText = "1M PAGEVIEWS";
      billAmount = 36;
      break;
  }

  if (checkbox.checked) {
    billAmount *= 0.75 * 12;
    years.innerText = "/years";
  } else {
    years.innerText = "/month";
  }
  bill.textContent = `$${billAmount}`;
}

slider.addEventListener("input", updateBillAmount);

checkbox.addEventListener("change", updateBillAmount);
