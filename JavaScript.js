// 1. 소개할 K-Pop 그룹 데이터
const kpopGroups = [
    { name: "NewJeans", title: "어텐션! 힙하고 트렌디한 그룹", song: "Ditto" },
    { name: "SEVENTEEN", title: "자체 제작 아이돌의 완성형", song: "손오공" },
    { name: "IVE", title: "당당하고 매력적인 걸그룹", song: "LOVE DIVE" }
];

const kpopList = document.getElementById('kpop-list');
const messageElement = document.getElementById('message');

// 2. 카드 생성 함수
function createKpopCard(group) {
    // 새로운 div 요소를 생성합니다.
    const card = document.createElement('div');
    card.className = 'kpop-card';

    // 제목 (Group Name)
    const name = document.createElement('h2');
    name.textContent = group.name;

    // 설명 (Title)
    const title = document.createElement('p');
    title.textContent = group.title;

    // 추천 곡
    const song = document.createElement('p');
    song.innerHTML = `**추천곡:** ${group.song}`; 

    // 버튼
    const button = document.createElement('button');
    button.textContent = `${group.name} 자세히 보기`;

    // 3. 이벤트 리스너 추가: 버튼 클릭 시 메시지 표시
    button.addEventListener('click', () => {
        messageElement.textContent = `친구들이 선택한 ${group.name}의 추천곡은 '${group.song}'입니다!`;
    });

    // 요소들을 카드에 추가합니다.
    card.appendChild(name);
    card.appendChild(title);
    card.appendChild(song);
    card.appendChild(button);

    return card;
}

// 4. 모든 그룹의 카드를 HTML에 추가
kpopGroups.forEach(group => {
    const card = createKpopCard(group);
    kpopList.appendChild(card);
});

// 추가: 로딩 완료 시 메시지
window.onload = () => {
    console.log("K-Pop 홈페이지 로딩 완료!");
};
