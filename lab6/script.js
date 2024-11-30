const tracks = [
    {title: "Track 1", src: "japan1.mp3", cover: "japan1.jpg"},
    {title: "Track 2", src: "japan2.mp3", cover: "japan2.jpg"},
    {title: "Track 3", src: "en.mp3", cover: "en.jpg"},
    {title: "Track 4", src: "phonk1.mp3", cover: "phonk1.jpg"},
    {title: "Track 5", src: "phonk2.mp3", cover: "phonk2.jpg"},
    {title: "Track 6", src: "phonk3.mp3", cover: "phonk3.jpg"},
  ];
  
  let currentTrackIndex = 0;
  const audio = new Audio(tracks[currentTrackIndex].src);
  const cover = document.getElementById('cover');
  const trackTitle = document.getElementById('track-title');
  const playPauseButton = document.getElementById('play-pause');
  const nextButton = document.getElementById('next');
  const trackList = document.getElementById('track-list');
  
  function loadTrack(index){
    currentTrackIndex = index;
    audio.src = tracks[currentTrackIndex].src;
    cover.src = tracks[currentTrackIndex].cover;
    trackTitle.textContent = tracks[currentTrackIndex].title;
  }
  
  function togglePlayPause(){
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
  }
  
  function playNextTrack(){
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(nextIndex);
    audio.play();
    playPauseButton.textContent = 'Pause';
  }
  
  playPauseButton.addEventListener('click', togglePlayPause);
  nextButton.addEventListener('click', playNextTrack);
  
  trackList.addEventListener('click', (event)=>{
    if (event.target.tagName === 'LI') {
        const trackIndex = parseInt(event.target.getAttribute('data-index'));
        loadTrack(trackIndex);
        audio.play();
        playPauseButton.textContent = 'Pause';
    }
  });
  
  loadTrack(currentTrackIndex);