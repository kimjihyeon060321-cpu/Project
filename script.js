// ===============================
// 필요한 요소 선택
// ===============================
const albumImages = document.querySelectorAll('.album');
const songInfo = document.getElementById('song-info');
const selectedTitle = document.getElementById('selected-title');
const playBtn = document.getElementById('play-btn');

// 현재 선택된 노래 URL 저장용 변수
let currentSongUrl = null;

// ===============================
// 앨범 클릭 시 정보 표시 기능
// ===============================
albumImages.forEach(album => {
    album.addEventListener('click', () => {
        // data-* 속성에서 정보 가져오기
        const title = album.dataset.title;
        const info = album.dataset.info;
        const url = album.dataset.url;

        // 정보 표시
        selectedTitle.textContent = title;
        songInfo.innerHTML = `<p>${info}</p>`;

        // 현재 URL 업데이트
        currentSongUrl = url;

        // 선택 효과 주기
        albumImages.forEach(img => img.classList.remove('active-album'));
        album.classList.add('active-album');
    });
});

// ===============================
// 재생 버튼 클릭 기능
// ===============================
playBtn.addEventListener('click', () => {
    if (!currentSongUrl) {
        alert("먼저 노래를 선택해주세요!");
        return;
    }
    window.open(currentSongUrl, '_blank');
});
