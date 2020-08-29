skills.forEach(skill => {
    const div = document.createElement('div');
    div.innerHTML = 
        `<div class="skill-container">
            <div id="${skill.name.toLowerCase()}-icon" class="skill-icon-container">
                <img class="skill-icon" src="${skill.imagePath}" alt="${skill.name} icon">
            </div>
            <div id="${skill.name.toLowerCase()}-name" class="skill-name-container">
                ${skill.name}
            </div>
        </div>`;
    document.querySelector('.skills-container').appendChild(div);
})
