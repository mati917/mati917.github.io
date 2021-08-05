// WebDev
var servicesWebdevModal = document.getElementById('services__webdev-modal');
var servicesWebdevInput = document.getElementById('services__webdev-input');

servicesWebdevModal.addEventListener('shown.bs.modal', function () {
  servicesWebdevInput.focus()
});

// Mecanic
var servicesMecModal = document.getElementById('services__mec-modal');
var servicesMecInput = document.getElementById('services__mec-input');

servicesMecModal.addEventListener('shown.bs.modal', function () {
  servicesMecInput.focus()
});