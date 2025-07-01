let ruleCount = 1;
let selectedTables = [];

document.addEventListener("DOMContentLoaded", () => {
  const rulesContainer = document.getElementById("rulesContainer");
  const tableOptions = document.getElementById("tableOptions");
  const selectedDiv = document.getElementById("selectedTables");
  const customSelect = document.getElementById("customSelect");

  function renderRules() {
    rulesContainer.innerHTML = "";

    for (let i = 1; i <= ruleCount; i++) {
      const ruleDiv = document.createElement("div");
      ruleDiv.className = "rule-box";

      const ruleTitle = document.createElement("h5");
      ruleTitle.textContent = `Rule ${i}`;
      ruleDiv.appendChild(ruleTitle);

  selectedTables.forEach(table => {
  const select = document.createElement("select");
  select.className = "form-select mb-2";

  select.innerHTML = `
    <option value="">Select column from ${table}</option>
    <option value="CUSTOMER_ID">CUSTOMER_ID</option>
    <option value="FIRST_NAME">FIRST_NAME</option>
    <option value="LAST_NAME">LAST_NAME</option>
    <option value="PHONE_NUMBER">PHONE_NUMBER</option>
    <option value="FULL_ADDRESS">FULL_ADDRESS</option>
    <option value="MAIL_ID">MAIL_ID</option>
    <option value="TIMESTAMP">TIMESTAMP</option>
    <option value="REFERRAL_SOURCE">REFERRAL_SOURCE</option>
    <option value="LOCATION">LOCATION</option>
    <option value="CUSTOMER_TYPE">CUSTOMER_TYPE</option>
    <option value="DEVICE_TYPE">DEVICE_TYPE</option>
    <option value="PURCHASES_LAST_30_DAYS">PURCHASES_LAST_30_DAYS</option>
    <option value="LIFETIME_VALUE">LIFETIME_VALUE</option>
    <option value="LAST_PURCHASE_DATE">LAST_PURCHASE_DATE</option>
    <option value="REPEAT_PURCHASE_RATE">REPEAT_PURCHASE_RATE</option>
    <option value="TOTAL_PURCHASES">TOTAL_PURCHASES</option>
    <option value="CUSTOMER_TENURE">CUSTOMER_TENURE</option>
    <option value="LOYALTY_PROGRAM_PARTICIPATION">LOYALTY_PROGRAM_PARTICIPATION</option>
    <option value="SUBSCRIPTION_STATUS">SUBSCRIPTION_STATUS</option>
    <option value="LOYALTY_TIER">LOYALTY_TIER</option>
    <option value="MOST_PREFERRED_PRODUCT">MOST_PREFERRED_PRODUCT</option>
    <option value="FAVORITE_PRODUCT">FAVORITE_PRODUCT</option>
    <option value="RECENT_PURCHASES">RECENT_PURCHASES</option>
  `;

  ruleDiv.appendChild(select);
});


      const matchSelect = document.createElement("select");
      matchSelect.className = "form-select mt-2";
      matchSelect.innerHTML = `
        <option value="">Select Match Type</option>
        <option value="exact">Exact</option>
        <option value="fuzzy">Fuzzy</option>
        <option value="Exact_normalized">Exact_Normalized</option>
      `;
      ruleDiv.appendChild(matchSelect);

      rulesContainer.appendChild(ruleDiv);
    }

    document.getElementById("ruleCount").textContent = ruleCount;
  }

  function updateSelectedTags() {
    selectedDiv.innerHTML = "";

    if (selectedTables.length === 0) {
      selectedDiv.classList.add("empty");
    } else {
      selectedDiv.classList.remove("empty");
      selectedTables.forEach(table => {
        const tag = document.createElement("div");
        tag.className = "tag";
        tag.innerHTML = `${table} <span class="remove-tag" data-value="${table}">×</span>`;
        selectedDiv.appendChild(tag);
      });

      document.querySelectorAll(".remove-tag").forEach(span => {
        span.addEventListener("click", (e) => {
          const val = e.target.getAttribute("data-value");
          selectedTables = selectedTables.filter(t => t !== val);
          updateSelectedTags();
          renderRules();
        });
      });
    }
  }

  customSelect.addEventListener("click", () => {
    const isVisible = tableOptions.style.display === "block";
    tableOptions.style.display = isVisible ? "none" : "block";
  });

  tableOptions.querySelectorAll("div").forEach(opt => {
    opt.addEventListener("click", () => {
      const value = opt.getAttribute("data-value");
      if (!selectedTables.includes(value)) {
        selectedTables.push(value);
        updateSelectedTags();
        renderRules();
      }
    });
  });

  document.getElementById("addRule").addEventListener("click", () => {
    ruleCount++;
    renderRules();
  });

  document.getElementById("removeRule").addEventListener("click", () => {
    if (ruleCount > 1) {
      ruleCount--;
      renderRules();
    }
  });

  updateSelectedTags();
  renderRules();
});

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
