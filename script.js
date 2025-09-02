// Generic slider function
function nextSlide(sliderId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.children;
  slider.appendChild(slides[0]); // move first slide to the end
}

function prevSlide(sliderId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.children;
  slider.insertBefore(slides[slides.length - 1], slides[0]); // move last to first
}

// Auto-play announcements
setInterval(() => {
  nextSlide('announcement-slider');
}, 4000);
