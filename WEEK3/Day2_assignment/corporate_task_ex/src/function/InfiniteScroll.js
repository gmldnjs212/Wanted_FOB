// Intersection Observer 설정
const options = {
  root: null, // 뷰포트를 루트로 사용
  rootMargin: "0px", // 뷰포트와 타겟 엘리먼트 사이의 마진
  threshold: 0.5, // 타겟 엘리먼트가 뷰포트에 50% 이상 들어올 때 호출
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 무한 스크롤을 위한 새로운 아이템을 로드하는 함수 호출
      loadMoreItems();
      // 이벤트 감시 중단 여부 결정
      // 더 이상 아이템이 없을 때 감시 중단하거나, 계속 감시할 수 있도록 선택
      // 예: 모든 아이템을 로드했을 때 observer.disconnect();
    }
  });
}, options);

// Intersection Observer를 컨테이너 요소에 추가
const container = document.getElementById("scroll-container");
observer.observe(container);
