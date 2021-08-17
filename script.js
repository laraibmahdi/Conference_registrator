const name = document.getElementById("name");
// adds focus on name field as soon as the webpage loads
name.focus();
const check = document.querySelectorAll("[type='checkbox']")
const email = document.getElementById("email");
const creditNum = document.getElementById("cc-num")
const creditZip = document.getElementById("zip")
const creditCvv = document.getElementById("cvv")


const otherJob = document.getElementById("other-job-role")
// sets the display of other job role to none unless selected in the drop down menu
otherJob.style.display = "none";
const select = document.querySelector("#title");
select.addEventListener("change", (e) => {
    otherJob.style.display = "none";
    if(e.target.value === "other"){
         otherJob.style.display = "block";
   }

});
const color = document.querySelector("#color");
color.style.display = "none";

// displays the shirt style that has been selected by the user
design.addEventListener("change", (e)=>{
    const punsJs = color.querySelectorAll("[data-theme = 'js puns']");
    const heartJs = color.querySelectorAll("[data-theme = 'heart js']");
    color.style.display = "block";
    
    if(e.target.value === "js puns") {
        for (let i =0; i < punsJs.length; i++){
        heartJs[i].style.display = "none";
        punsJs[i].style.display = "block";
        }
      } else if (e.target.value === "heart js"){
        for (let i =0; i < heartJs.length; i++){
        punsJs[i].style.display = "none";
        heartJs[i].style.display = "block";
        }
      }
        
})

const activity = document.querySelector("#activities");
let totalCost = document.querySelector("#activities-cost")
let totalValue = totalCost.value =0;


activity.addEventListener("change", (e)=>{
  const checkbox = e.target;
  const activityCost = checkbox.getAttribute("data-cost");
  const checked = checkbox.checked;
// adds each activity cost to the total if selected
if(checked){
  
  totalValue += parseInt(activityCost);
  totalCost.textContent = `\$ ${totalValue}`;
// subtracts the activity cost from the total 
} else if(checked === false) { 
  totalValue -= parseInt(activityCost);
  totalCost.textContent = `\$ ${totalValue}`;
  
};
});
const paymentMethods = document.querySelector(".payment-method-box");
const selectPaymentMethod = document.querySelector("#payment")
selectPaymentMethod.value = "credit-card"
const expirationMonth = document.querySelector(".month-box")
expirationMonth.style.display = "none";
const expirationYear = document.querySelector(".year-box")
expirationYear.style.display = "none";
const creditCardNum = document.querySelector(".num-box")
creditCardNum.style.display = "none";
const creditCardZip = document.querySelector(".zip-box")
creditCardZip.style.display = "none";
const creditCardCvv = document.querySelector(".cvv-box")
creditCardCvv.style.display = "none";
const paypal = document.querySelector(".paypal")
paypal.style.display = "none";
const bitcoin = document.querySelector(".bitcoin")
// hides the display of payment methods until user selects an option
   bitcoin.style.display = "none";
   expirationMonth.style.display = "block";
   expirationYear.style.display = "block";
   creditCardNum.style.display = "block";
   creditCardZip.style.display = "block";
   creditCardCvv.style.display = "block";

// display only the selected payment method 
paymentMethods.addEventListener("change", (e)=>{
  if (e.target.value === "credit-card"){
    bitcoin.style.display = "none";
    paypal.style.display = "none";
   expirationMonth.style.display = "block";
   expirationYear.style.display = "block";
   creditCardNum.style.display = "block";
   creditCardZip.style.display = "block";
   creditCardCvv.style.display = "block";
  } else if (e.target.value === "paypal"){
    paypal.style.display = "block";
    bitcoin.style.display = "none";
    expirationMonth.style.display = "none";
    expirationYear.style.display = "none";
    creditCardNum.style.display = "none";
    creditCardZip.style.display = "none";
    creditCardCvv.style.display = "none";
  } else {
    bitcoin.style.display = "block";
    paypal.style.display = "none";
    expirationMonth.style.display = "none";
   expirationYear.style.display = "none";
   creditCardNum.style.display = "none";
   creditCardZip.style.display = "none";
   creditCardCvv.style.display = "none";
  }
});
// functions to validate the fields 
function validateName(text) {
    return /^[\s]+$/.test(text);
};
function validateEmail(text) {
  return /^[^@]+@[^@.]+\.com$/i.test(text);
}
function validateCardNum(text) {
  return /[\d]{13,16}/.test(text);
};
function validateZipNum (text) {
  return /[\d]{5}/.test(text);
}
function validateCvvNum(text) {
  return /[\d]{3}/.test(text);
}
const form = document.getElementsByTagName("form")[0];
// uses the function to add validation to the desired fields
form.addEventListener("submit",(e)=>{
   e.preventDefault();
   const validName = validateName(name.value);
  if (name.value === "" || validName) {
    const label = name.parentNode;
  label.classList.add("not-valid");
  const hint = name.nextElementSibling;
  hint.style.display = "block";
  } else {
    const label = name.parentNode;
    label.classList.remove("not-valid");
    label.classList.add("valid");
    const hint = name.nextElementSibling;
    hint.style.display = "none";
  };
  const validEmail = validateEmail(email.value);
  if (email.value === "" || !validEmail){
  const label = email.parentNode;
  label.classList.add("not-valid");
  const hint = email.nextElementSibling;
  hint.style.display = "block";
  } else {
    const label = email.parentNode;
    label.classList.remove("not-valid");
    label.classList.add("valid");
    const hint = email.nextElementSibling;
    hint.style.display = "none";
  }
  // if no activity is selected displays an error message asking the user to select an activity
  if (check[0].checked === false &&
      check[1].checked === false &&
      check[2].checked === false &&
      check[3].checked === false &&
      check[4].checked === false &&
      check[5].checked === false &&
      check[6].checked === false   ) {
        for(let i=0; i<check.length; i++){
    activity.classList.add("not-valid");
    const hint = activity.lastElementChild;
  hint.style.display = "block";
        }
} else {
    activity.classList.remove("not-valid")
    activity.classList.add("valid");
    const hint = activity.lastElementChild;
    hint.style.display = "none";
}
const validCardNum = validateCardNum(creditNum.value);
const validCardZip = validateZipNum(creditZip.value)
const validCardCvv = validateCvvNum(creditCvv.value);
// adds desired error message if fields are not valid
if(!validCardNum){
  const label = creditNum.parentNode;
  label.classList.add("not-valid");
  const hint = creditNum.nextElementSibling;
  hint.style.display = "block";
} else {
  const label = creditNum.parentNode;
  label.classList.remove("not-valid");
  label.classList.add("valid");
  const hint = creditNum.nextElementSibling;
  hint.style.display = "none";
}
if (!validCardZip) {
  const label = creditZip.parentNode;
  label.classList.add("not-valid");
  const hint = creditZip.nextElementSibling;
  hint.style.display = "block";
} else {
  const label = creditZip.parentNode;
  label.classList.remove("not-valid");
  label.classList.add("valid");
  const hint = creditZip.nextElementSibling;
  hint.style.display = "none";
}
if(!validCardCvv) {
  const label = creditCvv.parentNode;
  label.classList.add("not-valid");
  const hint = creditCvv.nextElementSibling;
  hint.style.display = "block";
} else {
  const label = creditCvv.parentNode;
  label.classList.remove("not-valid");
  label.classList.add("valid");
  const hint = creditCvv.nextElementSibling;
  hint.style.display = "none";
}

});
// allows user to use the "TAB" key to switch between activities
for (let i =0; i<check.length; i++)
check[i].addEventListener("focus",(e)=>{
  const label = check[i].parentNode;
   label.classList.add("focus");
 
});
for (let i =0; i<check.length; i++)
check[i].addEventListener("blur",(e)=>{
  const label = check[i].parentNode;
   label.classList.remove("focus");
 
});


  

