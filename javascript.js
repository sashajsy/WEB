document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.color-changing-link');
    let activeLink = null;
  
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        if (activeLink) {
          activeLink.classList.remove('active');
        }
  
        if (activeLink !== link) {
          link.classList.add('active');
          activeLink = link;
        } else {
          activeLink = null;
        }
      });
    });
  
    const sidebarLinks = document.querySelectorAll('.sidebar a');
  
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        const currentLink = document.querySelector('.sidebar a.active');
        if (currentLink) {
          currentLink.classList.remove('active');
        }
        this.classList.add('active');
      });
    });
  });
  
  
  