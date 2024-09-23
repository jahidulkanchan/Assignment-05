// Common Function for donate and history button =============================
function toggleSections(donateAdd, historyAdd, showSection, hideSection) {
  donateAdd.classList.add('bg-lime-300');
  donateAdd.classList.remove('bg-slate-100');
  historyAdd.classList.add('bg-slate-100');
  historyAdd.classList.remove('bg-lime-300');
  showSection.classList.remove('hidden');
  hideSection.classList.add('hidden');
}
