skills.forEach(skill => {
    const div = document.createElement('div');
    div.innerHTML = 
        `<div class="skill-container">
            <div id="${skill.name.toLowerCase()}-icon" class="skill-icon-container">
                <i class="${skill.deviconClass} devicon-icon"></i>
            </div>
            <div id="${skill.name.toLowerCase()}-name" class="skill-name-container">
                ${skill.name}
            </div>
        </div>`;
    document.querySelector('.skills-container').appendChild(div);
})
