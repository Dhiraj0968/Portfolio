document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');
  const sidebarMore = document.querySelector('.sidebar-info_more');
  const sidebar = document.querySelector('[data-sidebar]');

  const activatePage = (targetName) => {
    pages.forEach((page) => {
      const match = page.dataset.page === targetName;
      page.classList.toggle('active', match);
    });

    navButtons.forEach((button) => {
      const active = button.textContent.trim().toLowerCase() === targetName;
      button.classList.toggle('active', active);
    });
  };

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.textContent.trim().toLowerCase();
      const pageName = target === 'about'
        ? 'about'
        : target === 'resume'
          ? 'resume'
          : target === 'portfolio'
            ? 'portfolio'
            : 'contact';

      activatePage(pageName);
    });
  });

  if (sidebarBtn && sidebarMore) {
    sidebarBtn.addEventListener('click', () => {
      const isOpen = sidebarMore.classList.toggle('active');
      sidebarBtn.setAttribute('aria-expanded', String(isOpen));
      sidebarBtn.querySelector('span').textContent = isOpen ? 'Hide Contacts' : 'Show Contacts';
    });
  }

  if (sidebar) {
    const mediaQuery = window.matchMedia('(max-width: 980px)');
    const handleSidebar = () => {
      if (!mediaQuery.matches) {
        sidebarMore.classList.add('active');
      }
    };

    handleSidebar();
    mediaQuery.addEventListener('change', handleSidebar);
  }
});
