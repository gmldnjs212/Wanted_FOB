// 날짜 형식을 바꿔주는 함수
export const dateConverter = (targetTime) => {
    let date = new Date(targetTime);

    let year = date.getFullYear();
    let month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
    let day = date.getDate();

    // 월과 일이 한 자리 숫자일 경우 앞에 0을 붙여 두 자리로 만듭니다.
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    let convertedTime = year + '년 ' + month + '월 ' + day + '일';

    return convertedTime;
};
