const photos = document.querySelectorAll('.photos img');

photos.forEach((img) => {
  img.addEventListener('mousemove', (e) => {
    const rect = img.getBoundingClientRect();

    // cursor position inside the picture: -0.5 (left/top) to +0.5 (right/bottom)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    img.style.translate = `${x * 20}px ${y * 20}px`;
  });

  // cursor leaves the picture: it goes back to its place
  img.addEventListener('mouseleave', () => {
    img.style.translate = '0px 0px';
  });
}); 
  new google.translate.TranslateElement(
       { pageLanguage: "en" },
       "google_language_change"
   );