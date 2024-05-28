const activeSectionSelector = //function to show only one section of the HTML document at a time
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.sections section'); // access all sections in index.html
  
    sections.forEach(section => {
      section.addEventListener('click', () => { // add event listener (click) for the section
        sections.forEach(s => s.classList.remove('active')); // remove the active class from all sections within index.html
        section.classList.add('active'); // add the active class to the selected section in index.html
      });
    });
  });