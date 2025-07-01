// Existing logic
window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1024) {
    document.getElementById('mobile-blocker').style.display = 'flex';
    return;
  }

  document.getElementById('total-users').textContent = '10,240';
  document.getElementById('avg-order-value').textContent = '₹345.60';
  document.getElementById('repeat-rate').textContent = '62.4%';
});

function openModal(section) {
  const modal = document.getElementById(`${section}Modal`);
  const backdrop = document.getElementById(`${section}Backdrop`);
  if (modal) modal.style.display = 'block';
  if (backdrop) backdrop.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal(section) {
  const modal = document.getElementById(`${section}Modal`);
  const backdrop = document.getElementById(`${section}Backdrop`);
  if (modal) modal.style.display = 'none';
  if (backdrop) backdrop.style.display = 'none';
  document.body.style.overflow = '';
}

function selectCard(element, group) {
  document.querySelectorAll(`.${group}-group .card`).forEach(card => {
    card.classList.remove('selected');
  });
  element.classList.add('selected');
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  if (passwordInput) {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }
}

function handleSnowflakeLogin(e) {
  e.preventDefault();
  alert("❄️ Snowflake login submitted!");
}

function handleConnectCrmSubmit(e) {
  e.preventDefault();
  const selectedCard = document.querySelector('.connect-crm-group .card.selected');
  const crm = selectedCard ? selectedCard.textContent : '';
  const instance = document.getElementById('salesforceInstance')?.value || '';
  const objectName = document.getElementById('objectName')?.value || '';

  if (!crm || !instance || !objectName) {
    alert('Please complete all fields.');
    return;
  }

  alert(`✅ CRM: ${crm}\n🌍 Instance: ${instance}\n📦 Object: ${objectName}`);
  closeModal('connectCrm');
}

function handleFileUpload(files) {
  const maxSize = 1 * 1024 * 1024 * 1024;
  const file = files[0];
  if (file && file.size > maxSize) {
    alert("❌ File size exceeds 1GB limit.");
    return;
  }

  const fileSelect = document.getElementById('csvFileSelect');
  const option = document.createElement('option');
  option.value = file.name;
  option.textContent = file.name;
  fileSelect.appendChild(option);

  alert(`✅ File '${file.name}' uploaded successfully.`);
}

document.getElementById('dropzone').addEventListener('dragover', function (e) {
  e.preventDefault();
  this.classList.add('dragging');
});

document.getElementById('dropzone').addEventListener('dragleave', function () {
  this.classList.remove('dragging');
});

document.getElementById('dropzone').addEventListener('drop', function (e) {
  e.preventDefault();
  this.classList.remove('dragging');
  const files = e.dataTransfer.files;
  handleFileUpload(files);
});

document.getElementById('dropzone').addEventListener('click', () => {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function () {
  handleFileUpload(this.files);
});

function handleLoadCsvToSnowflake() {
  const file = document.getElementById('csvFileSelect').value;
  if (!file) {
    alert("⚠️ Please select a CSV file to load.");
    return;
  }
  alert(`📥 Loading '${file}' to Snowflake...`);
}

function handleConnectDbSubmit(e) {
  e.preventDefault();
  const selectedCard = document.querySelector('.connect-db-group .card.selected');
  const db = selectedCard ? selectedCard.textContent : '';
  const table = document.getElementById('tableSelect')?.value || '';

  if (!db || !table) {
    alert('Please complete all fields.');
    return;
  }

  alert(`🔗 Connected to ${db} and table '${table}' selected.`);
  closeModal('connectDb');
}


// Feature carousel logic
const features = [
  {
    title: "Dynamic Configuration",
    desc: "Load flexible settings from configuration files.",
    image: "images/features/feature1.png"
  },
  {
    title: "Snowflake Integration",
    desc: "Push data seamlessly with error handling.",
    image: "images/features/feature2.png"
  },
  {
    title: "Multi-Source Support",
    desc: "Integrate data from CRMs, databases, and flat files.",
    image: "images/features/feature3.png"
  },
  {
    title: "Real-Time Insights",
    desc: "Visualize customer metrics in real time.",
    image: "images/features/feature4.png"
  },
  {
    title: "Secure Authentication",
    desc: "Manage access with role-based permissions.",
    image: "images/features/feature5.png"
  },
  {
    title: "Scalable Architecture",
    desc: "Built for enterprise-level growth and performance.",
    image: "images/features/feature6.png"
  }
];

let featureIndex = 0;

function showFeature(index) {
  const featureTitle = document.getElementById("featureTitle");
  const featureDesc = document.getElementById("featureDesc");
  const featureImage = document.getElementById("featureImage");
  if (!featureTitle || !featureDesc || !featureImage) return;

  const { title, desc, image } = features[index];
  featureTitle.textContent = title;
  featureDesc.textContent = desc;
  featureImage.src = image;
}

function handleNextFeature() {
  featureIndex = (featureIndex + 1) % features.length;
  showFeature(featureIndex);
}

function openFeatureModal() {
  featureIndex = 0;
  showFeature(featureIndex);
  openModal('feature');
}
