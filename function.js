// 유저들이 회원가입을 할 때 형식에 맞게 올바르게 작성했는지 검증하는 함수를 만들어야 합니다.
// 아래 조건을 모두 만족하는 함수를 만드세요.
//  1. email에는 반드시 "@"가 포함되어야 합니다.
//  2. email에 "@"가 없는 경우 "이메일 주소를 다시 확인해주세요"문구가 나옵니다.
//  3. password에는 8~16자리 비밀번호가 들어가야 합니다. 
//     만약 아닐 경우 "비밀번호는 8~16자여야 합니다." 문구가 나와야 합니다.
//  4. password와 passwordCheck는 서로 동일한 값이 입력되어야 합니다.
//     만약 아닐 경우 "비밀번호를 다시 확인해주세요"라는 문구가 나와야 합니다.
//  5. 위의 4가지 조건을 모두 충족한다면 "회원가입을 축하합니다"라는 문구가 나와야합니다.
function validation(email, password, passwordCheck) {
    if(!email.includes("@")) {
        return "이메일 주소를 다시 확인해주세요"
    } else if (password.length > 16 || 8 > password.length) {
        return "비밀번호는 8~16자여야 합니다."
    } else if (password !== passwordCheck) {
        return "비밀번호를 다시 확인해주세요"
    } else {
        return "회원가입을 축하합니다"
    }
}

// 휴대폰 인증번호를 1분안에 입력해야합니다.
// 1:00부터 시작해서 1초씩 줄어드는 함수를 만들어보세요.
const timer = () => {
    // 남은 시간
    let timeLeft = 60;

    const timerInterval = setInterval(() => {
        const min = Math.floor(timeLeft / 60);
        const sec = timeLeft%60;

        // 두자리 숫자로 나울 수 있도록 포맷팅한다.
        const formattingMin = String(min).padStart(2,0);
        const formattingSec = String(sec).padStart(2,0);

        console.log(`${formattingMin}:${formattingSec} 남았습니다.`);

        // 남은 시간이 0이되면 타이머 중지
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            console.log("인증시간이 만료되었습니다.");
        }

        // 1초씩 감소
        timeLeft--;
    }, 1000);
}

// 게시글을 올린 시간이 있습니다.
// 현재 날짜로부터 며칠이 지났는지 보여주는 문구를만들어야 합니다.
let post = "2021년 05월 02일"
post = "2021-05-02T00:00:00";

const calcDay = (postDate) => {
    // 포스팅을 한 날짜
    const post = new Date(postDate);
    const today = new Date();

    // 두 날짜의 차이를 밀리초 단위로 계산합니다.
    const differenceSec = today.getTime() - post.getTime();

    // 초 -> 일 단위로 변환
    // 1초는 1000 밀리초
    // 1분은 60초, 1시간은 60분
    // 1일은 24시간
    // 계산하면 1일 = 24시간 * 60분 * 60초 * 1000 밀리초
    const differenceDays = Math.floor(differenceSec/(1000 * 3600 * 24));

    return differenceDays;
}

const passedDays = calcDay(post);
console.log(`${passedDays}일 지났습니다`);