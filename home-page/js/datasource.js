// Populates customer behavior table with demo data
window.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('#data-table tbody');

  const customerData = [
    { id: 'C001', name: 'Ananya Rao', city: 'Bengaluru', orders: 5, lastActive: '2025-06-24' },
    { id: 'C002', name: 'Ravi Kumar', city: 'Hyderabad', orders: 3, lastActive: '2025-06-22' },
    { id: 'C003', name: 'Neha Singh', city: 'Delhi', orders: 9, lastActive: '2025-06-25' },
    { id: 'C004', name: 'Aditya Verma', city: 'Mumbai', orders: 2, lastActive: '2025-06-20' },
    { id: 'C005', name: 'Priya Nair', city: 'Chennai', orders: 7, lastActive: '2025-06-23' }
  ];

  customerData.forEach(c => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${c.id}</td>
      <td>${c.name}</td>
      <td>${c.city}</td>
      <td>${c.orders}</td>
      <td>${c.lastActive}</td>
    `;
    tableBody.appendChild(row);
  });
});
