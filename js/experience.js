experience.forEach((e, idx) => {
    const $div = $('<div>');
    $div.html( 
        `${idx > 0 ? '<div class="timeline-vert"></div>' : ''}
        <div id="${e.id}-container" class="col-md-3 experience-container">
            <div class="service-item exp">
                <h4>
                    <strong><a href="${e.link}" target="_blank">${e.companyName}</a></strong>
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
    $('div.hover').css('color', 'var(--primary)');
    $('.service-item.exp a').css('color', 'var(--primary)');
    $('.skill-name-container').each(function() {
        if(companyObj.skills.includes($(this).text().trim().toLowerCase())) {
            $(this).addClass('found-skill-name faded-white');
            $(this).siblings('.skill-icon-container').addClass('faded-white');
        }
    });
    $('.experience-description').text(companyObj.description).css({'background': 'var(--tertiary)', 'color': 'var(--primary)'})
    $('.experience-description').toggleClass('experience-description-padding');
})

$('.service-item').on('mouseout', function() {
    $(this).css('background', 'var(--secondary)');
    $(this).css('color', 'var(--tertiary)');
    $('div.hover').css('color', 'var(--secondary)');
    $('.service-item.exp a').css('color', 'var(--tertiary)');
    $('.skill-name-container').each(function() {
        $(this).removeClass('found-skill-name faded-white');
        $(this).siblings('.skill-icon-container').removeClass('faded-white');
    });
    $('.experience-description').empty().toggleClass('experience-description-padding');
})

$('.portfolio-icon-container').on('mouseover', function() {
    const switchUrl = $(this).find('.portfolio-icon').attr('src').replace('.svg', '_primary.svg');
    $(this).find('.portfolio-icon').attr('src', switchUrl);
    // $(this).find('.portfolio-name').show();
})

$('.portfolio-icon-container').on('mouseout', function() {
    const switchUrl = $(this).find('.portfolio-icon').attr('src').replace('_primary', '');
    $(this).find('.portfolio-icon').attr('src', switchUrl);
    // $(this).find('.portfolio-name').hide();
})
