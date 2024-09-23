// ======================== Donate and History =====================
const donateBtn = document.getElementById("donate-btn");
const historyBtn = document.getElementById("history-btn");
const donateArea = document.getElementById("donate-area");
const historySection = document.getElementById("history-section");
// =================================================================
donateBtn.addEventListener("click", ()=>{
  toggleSections(donateBtn, historyBtn, donateArea, historySection);
});
historyBtn.addEventListener("click", ()=>{
  toggleSections(historyBtn, donateBtn, historySection, donateArea);
});


// ====================== ( Donation Place Number-1 )  =========================

document.getElementById("donate-btn-1").addEventListener('click', (e)=>{
  e.preventDefault()
  donateCalculation("donate-balance-1", "donate-input-1","Donate for Flood at Noakhali, Bangladesh");
});
// ====================== ( Donation Place Number-2 )  =========================
document.getElementById("donate-btn-2").addEventListener('click', (e)=>{
  e.preventDefault();
  donateCalculation("donate-balance-2", "donate-input-2", "Donate for Flood Relief in Feni,Bangladesh");
});
// ====================== ( Donation Place Number-3 )  =========================
document.getElementById("donate-btn-3").addEventListener('click', (e)=>{
  e.preventDefault();
  donateCalculation("donate-balance-3", "donate-input-3", "Aid for Injured in the Quota Movement");
});

