// scripts.js
document.addEventListener('DOMContentLoaded', function() {
  const videoGrid = document.getElementById('videoGrid');
  const doodStreamUrls = [
    'https://dood.to/e/abcd1234',  // Replace with actual DoodStream video URLs
    'https://dood.to/e/efgh5678',
    'https://dood.to/e/ijkl9012',
    // Add more DoodStream video URLs as needed
  ];

  shuffleArray(doodStreamUrls); // Shuffle the array of DoodStream video URLs

  doodStreamUrls.forEach(videoUrl => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');

    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    video.preload = 'metadata'; // Preload only metadata for faster loading

    videoItem.appendChild(video);
    videoGrid.appendChild(videoItem);
  });
});

// Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
