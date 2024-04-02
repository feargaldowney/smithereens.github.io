// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gallery Lightbox
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('gallery-item')) {
        const src = e.target.getAttribute('src') || e.target.getAttribute('data-src');
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.innerHTML = `<img src="${src}" style="max-width: 80%; max-height: 80vh;">`;
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', e => {
            if (e.target !== e.currentTarget) return;
            lightbox.remove();
        });
    }
});

// // Dynamic Loading of Tour Dates
// const tourDates = [
//     { city: 'Cork', venue: 'Cyprus Avenue', date: '2024-05-04' },
//     { city: 'Limerick', venue: 'Record Room', date: '2024-04-04' }
//     // Add more tour dates as needed
// ];

window.addEventListener('DOMContentLoaded', (event) => {
    const tourSection = document.getElementById('tour');
    if (tourSection) {
        tourDates.forEach(tour => {
            const tourDiv = document.createElement('div');
            tourDiv.classList.add('tour-date');
            tourDiv.innerHTML = `<p><strong>${tour.city}</strong> - ${tour.venue}, ${tour.date}</p>`;
            tourSection.appendChild(tourDiv);
        });
    }
});
