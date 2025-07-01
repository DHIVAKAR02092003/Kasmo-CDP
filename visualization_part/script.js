// Highlight active icon & scroll to section
const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Remove active from all
    icons.forEach(i => i.classList.remove('active'));
    // Add to clicked
    icon.classList.add('active');

    // Scroll to section if data-target exists
    const targetId = icon.getAttribute('data-target');
    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Toggle sidebar visibility (for future use or collapsible behavior)
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
}

document.getElementById('toggleSidebar').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('expanded');
});

const lineOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    x: { display: false },
    y: { display: false },
  }
};

new Chart(document.getElementById("loyaltyChart"), {
  type: 'bar',
  data: {
    labels: ['Gold', 'Platinum', 'Silver'],
    datasets: [{
      label: 'Number of Customers',
      data: [1245, 1202, 1183],
      backgroundColor: [
        'rgba(255, 215, 0, 0.7)',
        'rgba(192, 192, 192, 0.7)',
        'rgba(169, 169, 169, 0.7)'
      ],
      borderColor: [
        'rgba(255, 215, 0, 1)',
        'rgba(192, 192, 192, 1)',
        'rgba(169, 169, 169, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return ` ${context.parsed.y} customers`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Customers'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Loyalty Tier'
        }
      }
    }
  }
});

// Top Countries Bar Chart
const countryCtx = document.getElementById('countryChart').getContext('2d');
new Chart(countryCtx, {
  type: 'bar',
  data: {
    labels: ['USA', 'India', 'Germany', 'UK', 'Canada', 'Australia'],
    datasets: [{
      label: 'Users',
      data: [220, 190, 160, 135, 110, 90],
      backgroundColor: '#007bff',
      borderRadius: 4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 250,
        title: {
          display: true,
          text: 'User Count'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return ` Users: ${context.parsed.y}`;
          }
        }
      }
    }
  }
});

// Platform User Pie Chart
const platformCtx = document.getElementById('platformChart').getContext('2d');
new Chart(platformCtx, {
  type: 'pie',
  data: {
    labels: ['Android', 'iOS', 'Website'],
    datasets: [{
      label: 'Users',
      data: [3364, 3363, 3273],
      backgroundColor: [
        '#e63946', // Android
        '#457b9d', // iOS
        '#f4a261'  // Website
      ],
      borderColor: '#fff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return ` ${label}: ${value} users`;
          }
        }
      }
    }
  }
});

// Monthly Line Chart (Blue + Black)
const lineCtx = document.getElementById('lineChart').getContext('2d');

new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Users',
      data: [120, 200, 180, 220, 300, 280],
      backgroundColor: 'rgba(0, 123, 255, 0.1)',   // light fill
      borderColor: '#007bff',                     // primary blue
      pointBorderColor: 'black',                  // black border
      pointBackgroundColor: '#fff',
      borderWidth: 2,
      pointRadius: 5,
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => `${ctx.parsed.y} users`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#000' },
        grid: { color: '#eee' }
      },
      x: {
        ticks: { color: '#000' },
        grid: { display: false }
      }
    }
  }
});