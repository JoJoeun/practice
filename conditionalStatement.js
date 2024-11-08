// 유저가 회원가입을 할 때 비밀번호 입력과 비밀번호 확인 입력이 동일한지 검사를 해야합니다.
// 두 입력이 같을 경우 "회원가입을 축하합니다"
// 다를경우 "비밀번호를 다시 확인해주세요"
// 라는 문구를 띄워주세요.
//  1. 입력값은 모두 문자열로 변환
//  2. 입력값은 모두 소문자로 변환
function password(input1, input2) {
    input1 = String(input1).toLowerCase();
    input2 = String(input2).toLowerCase();
    input1 === input2 
    ? console.log("회원가입을 축하합니다")
    : console.log("비밀번호를 다시 확인해주세요");
}

// 입력되는 score에 따라 알맞은 등급을 적어야합니다.
// 100~90 "A"
// 89~80 "B"
// 79~70 "C"
// 69~60 "D"
// 59점 이하는 "F"
// 100점 초과나 0점 미만은 "잘못된 점수입니다" 라는 문구를 띄워주세요.
function grade(score) {
    if(score > 100 || 0 > score) {
        console.log("잘못된 점수입니다.")
    } else if (score >= 90) {
        console.log("A")
    } else if (score >= 80) {
        console.log("B")
    } else if (score >= 70) {
        console.log("C")
    } else if (score >= 60) {
        console.log("D")
    } else {
        console.log("F")
    }
}