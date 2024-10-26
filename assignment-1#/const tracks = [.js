const tracks = [
    { name: "Track 1", artist: "Artist 1", cover: "cover1.jpg", url: "track1.mp3" },
    { name: "Track 2", artist: "Artist 2", cover: "cover2.jpg", url: "track2.mp3" },
    { name: "Track 3", artist: "Artist 3", cover: "cover3.jpg", url: "track3.mp3" },
];

let currentTrackIndex = 0;
let isPlaying = false;

const audio = new Audio();
audio.src = tracks[currentTrackIndex].url;

const playPauseButton = document.getElementById("play-pause");
const nextButton = document.getElementById("next");
const trackCover = document.getElementById("track-cover");
const trackName = document.getElementById("track-name");
const trackArtist = document.getElementById("track-artist");
const trackList = document.getElementById("track-list");

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.url;
    trackCover.src = track.cover;
    trackName.textContent = track.name;
    trackArtist.textContent = track.artist;
}

function playPauseTrack() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = "Play";
    } else {
        audio.play();
        playPauseButton.textContent = "Pause";
    }
    isPlaying = !isPlaying;
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) audio.play();
}

function selectTrack(index) {
    currentTrackIndex = index;
    loadTrack(index);
    if (isPlaying) audio.play();
}

// Event Listeners
playPauseButton.addEventListener("click", playPauseTrack);
nextButton.addEventListener("click", nextTrack);

// Load track list
tracks.forEach((track, index) => {
    const trackItem = document.createElement("li");
    trackItem.textContent = track.name;
    trackItem.addEventListener("click", () => selectTrack(index));
    trackList.appendChild(trackItem);
});

// Load the first track by default
loadTrack(currentTrackIndex);
