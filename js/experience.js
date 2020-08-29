experience.forEach((e, idx) => {
    const $div = $('<div>');
    $div.html( 
        `${idx > 0 ? '<div class="timeline-vert"></div>' : ''}
        <div id="${e.id}-container" class="col-md-3 experience-container">
            <div class="service-item exp">
                <h4>
                    <strong>${e.companyName}</strong>
                </h4>
                <p>${e.role}<br>
                ${e.howLong}</p>
            </div>
        </div>`
    );
    $('.experiences-container').append($div);
})

$('.service-item').on('mouseover', function(e) {
    const companyId = $(e.currentTarget).parent().attr('id').replace('-container', '');
    const companyObj = experience.find(e => e.id === companyId);
    $(this).css('background', 'var(--tertiary)');
    $(this).css('color', 'var(--primary)');
    // $(this).html(backCopy);
    $('.skill-name-container').each(function() {
        if(companyObj.skills.includes($(this).text().trim().toLowerCase())) {
            $(this).addClass('found-skill-name faded-white');
            $(this).siblings('.skill-icon-container').addClass('faded-white');
        }
    });
})

// $('.service-item').flip({trigger: 'hover'});

$('.service-item').on('mouseout', function() {
    $(this).css('background', 'var(--secondary)');
    $(this).css('color', 'var(--tertiary)');
    $('.skill-name-container').each(function() {
        $(this).removeClass('found-skill-name faded-white');
        $(this).siblings('.skill-icon-container').removeClass('faded-white');
    });
})

const m = String.fromCodePoint(0x26F0);

console.log(`
${m}      ${m}  ${m}    ${m}${m}${m}${m}        ${m}        ${m}      ${m}
${m}${m}  ${m}${m}  ${m}  ${m}               ${m}${m}       ${m}      ${m}
${m} ${m}${m} ${m}  ${m}  ${m}              ${m}  ${m}      ${m}      ${m}
${m}  ${m}  ${m}  ${m}  ${m}             ${m}${m}${m}${m}     ${m}${m}${m}${m}${m}
${m}      ${m}  ${m}  ${m}            ${m}      ${m}    ${m}      ${m}
${m}      ${m}  ${m}  ${m}           ${m}        ${m}   ${m}      ${m}
${m}      ${m}  ${m}    ${m}${m}${m}${m}  ${m}          ${m}  ${m}      ${m}

If you'd like to chat, here's my resume: http://www.micahwierenga.com/micahwierenga_resume.pdf
`)