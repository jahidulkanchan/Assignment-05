// Common Function for donate and history button =============================
function toggleSections(donateAdd, historyAdd, showSection, hideSection) {
  donateAdd.classList.add('bg-lime-300');
  donateAdd.classList.remove('bg-slate-100');
  historyAdd.classList.add('bg-slate-100');
  historyAdd.classList.remove('bg-lime-300');
  showSection.classList.remove('hidden');
  hideSection.classList.add('hidden');
}

  
  // common Function for donation area ===============================
  function donateCalculation(DonateBalanceId, donateInputId, effectedPlace){
  const reserveBalance = parseFloat(document.getElementById("reserve-balance").innerText);
  const donateBalance = parseFloat(document.getElementById(DonateBalanceId).innerText);
  const donateInputvalue = parseFloat(document.getElementById(donateInputId).value);
  const updateDonateInputValue = donateInputvalue.toFixed(2);
  if(reserveBalance < donateInputvalue){
    alert('Insufficient funds');  
    return;
  }
  // condition validation ==========================
  if(!isNaN(donateInputvalue) && donateInputvalue > 0) {
  const newDonateBalance = donateBalance + donateInputvalue;
  modal.classList.remove('hidden');
  document.getElementById("reserve-balance").innerText = (reserveBalance - donateInputvalue).toFixed(2);
  document.getElementById(DonateBalanceId).innerText = newDonateBalance.toFixed(2);
  document.getElementById(donateInputId).value = '';

  const historyItem = document.getElementById("history-item");
  const div = document.createElement("div");
  const currentDate = new Date();
  const formatedDate = currentDate.toString();

  div.innerHTML = `
  <div class="content bg-sky-50 border mb-10 py-4 px-8 rounded-xl">
    <h1 class="text-xl font-bold">${updateDonateInputValue} Taka is Donated for ${effectedPlace}</h1>
    <p class="font-light mt-3 text-slate-700">${formatedDate}</p>
    </div>
  `
  historyItem.appendChild(div);
  // =============================================
  }
  else{
    alert("Something is wrong");
  }
}