// Handles CRM and DB card selections
window.addEventListener('DOMContentLoaded', () => {
  const crmCards = document.querySelectorAll('#crm-options .config-card');
  const dbCards = document.querySelectorAll('#db-options .config-card');

  crmCards.forEach(card => {
    card.addEventListener('click', () => {
      crmCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  dbCards.forEach(card => {
    card.addEventListener('click', () => {
      dbCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  document.getElementById('save-btn').addEventListener('click', () => {
    const selectedCRM = document.querySelector('#crm-options .selected')?.dataset.value;
    const selectedDB = document.querySelector('#db-options .selected')?.dataset.value;

    if (!selectedCRM || !selectedDB) {
      alert('Please select both CRM and Database options.');
      return;
    }

    // Simulate save (send to backend via fetch if needed)
    console.log('Saving Configuration:', { CRM: selectedCRM, DB: selectedDB });
    alert(`Configuration saved:\nCRM: ${selectedCRM}\nDatabase: ${selectedDB}`);
  });
});
