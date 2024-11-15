function filterProjects(category) {
    const projects = document.querySelectorAll('.project-box');


    if (category === 'all') {
        projects.forEach(project => {
            project.style.display = 'flex';
        });
    } else {
 
        projects.forEach(project => {
            if (project.classList.contains(category)) {
                project.style.display = 'flex'; 
            } else {
                project.style.display = 'none';
            }
        });
    }
}
