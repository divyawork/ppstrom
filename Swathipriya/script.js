document.addEventListener('DOMContentLoaded', function () {
    showTab('about');
  
    const tabs = document.querySelectorAll('nav a');
    tabs.forEach(tab => {
      tab.addEventListener('click', function (event) {
        event.preventDefault();
        const tabId = this.getAttribute('href').substring(1);
        showTab(tabId);
      });
    });
  });
  
  function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.style.display = 'none';
    });
  
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.style.display = 'block';
    }
  }
  