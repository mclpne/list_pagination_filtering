// Declare global variables.
const students = document.getElementsByClassName('student-item cf');
const showStudents = 10;

// Function that hides all students except for ten depending on the page link clicked.
const showPage = (list, page) => {
  const start = (page * showStudents) - showStudents;
  const end = (page * showStudents) - 1;
  for (let i = 0; i < list.length; i++) {
    if (i >= start && i <= end) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

// Function that adds functioning page links.
const appendPageLinks = (list) => {
  
  // Number of pages needed depending on list size.
  const pages = Math.ceil(list.length / showStudents);

  // Creates the HTML structure for page links.
  const listDiv = document.createElement('div');
  listDiv.className = 'pagination';
  const mainDiv = document.querySelector('.page');
  mainDiv.appendChild(listDiv);
  const ul = document.createElement('ul');
  listDiv.appendChild(ul);
  for (let i = 1; i <= pages; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = `${i}`;
    a.href = '#';
    li.appendChild(a);
    ul.appendChild(li);
  }
  
  // Adds an event listener to each page link that calls the showPage function upon being clicked.
  const pageLinks = document.getElementsByTagName('a');
  for (let i = 0; i < pageLinks.length; i++) {
    pageLinks[i].addEventListener('click', () => {
      showPage(students, (i + 1)); 
    })
  }

  // Removes the 'active' class from all page links.
  for (let i = 0; i < pageLinks.length; i++) {
    pageLinks[i].className = '';
  }

  // Adds the 'active' class to the first page link when page first loads.
  pageLinks[0].className = 'active';

  // When a page link is clicked, the 'active' class is added to that link and removed from all others.
  listDiv.addEventListener('click', (e) => {
    const activeButton = e.target;
    for (let i = 0; i < pageLinks.length; i++) {
      pageLinks[i].className = '';
    }
    activeButton.className = 'active';
  });
}

showPage(students, 1);
appendPageLinks(students);