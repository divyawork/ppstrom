// JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');
  
    projects.forEach((project, index) => {
      project.addEventListener('click', () => {
        // Toggle a class to show or hide project details
        project.classList.toggle('show-details');
  
        // Close other open project details
        projects.forEach((p, i) => {
          if (i !== index) {
            p.classList.remove('show-details');
          }
        });
      });
    });
  });
  