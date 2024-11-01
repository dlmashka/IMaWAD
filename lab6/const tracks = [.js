// Массив треков с URL-адресами и обложками
const tracks = [
    {
      name: "Track 1",
      artist: "Artist 1",
      url: "track1.mp3",
      cover: "cover1.jpg"
    },
    {
      name: "Track 2",
      artist: "Artist 2",
      url: "track2.mp3",
      cover: "cover2.jpg"
    },
    {
      name: "Track 3",
      artist: "Artist 3",
      url: "track3.mp3",
      cover: "cover3.jpg"
    }
  ];
  
  let currentTrackIndex = 0;
  const audio = document.getElementById("audio");
  const cover = document.getElementById("cover");
  const playPauseButton = document.getElementById("play-pause");
  const nextButton = document.getElementById("next");
  const trackTitle = document.getElementById("track-title");
  const artist = document.getElementById("artist");
  const trackList = document.getElementById("track-list");
  
  // Функция для загрузки трека
  function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.url;
    cover.src = track.cover;
    trackTitle.textContent = track.name;
    artist.textContent = track.artist;
  }
  
  // Функция для воспроизведения и паузы
  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = "Pause";
    } else {
      audio.pause();
      playPauseButton.textContent = "Play";
    }
  }
  
  // Функция для перехода к следующему треку
  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = "Pause";
  }
  
  // Обработчик событий для списка треков
  function selectTrack(index) {
    currentTrackIndex = index;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = "Pause";
  }
  
  // Инициализация списка треков
  tracks.forEach((track, index) => {
    const trackItem = document.createElement("li");
    trackItem.textContent = track.name;
    trackItem.onclick = () => selectTrack(index);
    trackList.appendChild(trackItem);
  });
  
  // Загрузка первого трека
  loadTrack(currentTrackIndex);
  
  // Обработчики событий для кнопок
  playPauseButton.addEventListener("click", togglePlayPause);
  nextButton.addEventListener("click", nextTrack);
  
  // Обновление иконки кнопки Play/Pause по завершении трека
  audio.addEventListener("ended", nextTrack);
  