// Change Html file Location ====================
document.getElementById('home-btn').addEventListener('click', ()=>{
  window.location.href = "./index.html";
});


// Faq Items Js code ============================
function toggleFaq(id) {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  for (let i = 1; i <= 4; i++) {
    if (i !== id) {
      document.getElementById(`content-${i}`).classList.add('hidden');
      document.getElementById(`icon-${i}`).innerHTML = `<i class="fa-solid fa-plus text-lg"></i>`;
    }
  }
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.innerHTML = `<i class="fa-solid fa-minus text-lg"></i>`;
    icon.classList.add("rotate-180");
  } else {
    content.classList.add('hidden');
    icon.innerHTML = `<i class="fa-solid fa-plus text-lg"></i>`;
    icon.classList.remove("rotate-180");
  }
}
