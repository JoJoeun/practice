// 주어진 객체 movies 는영화에 대한 정보가담긴 배열 속 객체입니다.
// 해당 조건에 맞는 영화들의 목록을 만들어주세요.
let movies = [
    { title: "킹스맨", genre: "액션", 상영관: "메가박스" },
    { title: "러브레터", genre: "로맨스", 상영관: "cgv" },
    { title: "스폰지밥", genre: "코미디", 상영관: "메가박스" },
    { title: "노트북", genre: "드라마", 상영관: "cgv" },
    { title: "임파서블", genre: "액션", 상영관: "cgv" },
    { title: "파리의 인어", genre: "로맨스", 상영관: "메가박스" },
    { title: "심슨", genre: "코미디", 상영관: "메가박스" },
    { title: "포레스트 검프", genre: "드라마", 상영관: "cgv" },
]
 
let action = movies.filter(data => data.genre === "액션")
let cgv = movies.filter(data => data.상영관 ==="cgv")
let romance = movies.filter(data =>data.상영관 ==="cgv" && data.genre ==="로맨스");

// 유저가 쇼핑목록에서 낮은 가격순으로 정렬하여 보려고 합니다.
// 주어진 List를 낮은 가격순으로 정렬해주세요.
// sort() : 비교 함수
// 음수를 반환하면 첫 번째 인수가 두 번쨰 인수보다 앞에 옵니다.
// 양수를 반환하면 첫 번째 인수가 두 번째 인수보다 뒤에 옵니다.
// 0을 반환하면 두 인수의 순서는 변하지 않습니다.
let List = [
    { number: 1, title: "장미", price: 4000 },
    { number: 2, title: "식칼", price: 7000 },
    { number: 3, title: "슬리퍼", price: 12000 },
    { number: 4, title: "주전자", price: 5000 },
    { number: 5, title: "선풍기", price: 5700 },
    { number: 6, title: "마우스 패드", price: 1800 },
    { number: 7, title: "휴대폰 케이스", price: 5500 },
    { number: 8, title: "마우스", price: 6500 },
]

List = List.sort((a,b) => b.price - a.price);

// 회원가입을 하는 사람들에게 본인 인증을 위한 인증번호를 만들려고 합니다.
// 함수를 실행할 떄마다 4자리의 랜덤 숫자가 나올 수 있도록 만들어 주세요.
// case1.
function random4() {
    // 0 ~ 9999.XXXXX까지의 랜덤 숫자를 구해준다.
    // 소숫점을 삭제한다.
    // 소숫점을 삭제한 0~9999까지의 정수를 문자열로 만들어준다.
    // padStart()를 사용하여 랜덤한 정수를 4자리로 고정시켜주고
    // 4자리 숫자가 아닐경우에 앞에 0을 채워준다.
    return String(Math.floor(Math.random * 10000)).padStart(4,0);
}
// case2.
function random() {
    // 0~9000사이의 수(0~8999)를 랜덤으로 구한다.
    // 여기에 1000을 더하면 1000~9999.xxxxxxxxxxxxxx 가 나온다.
    // 소숫점이하는 버려준다.
    return Math.floor(Math.random()*9000 + 1000);
}

// TodoList는 철수의 오늘 할 일들과 해당 일을 끝냈는지 나타내는 배열입니다.
// 철수가 TodoList 전체 목록에서 완료한 일이 전체의 몇%인지 구하세요.
// %는 2자리 자연수로 나와야 하고, 소수점이 있을 경우 반올림 해야합니다.
// ex. 총 30% 진행하셨습니다. 형식으로 나타나야합니다.
const TodoList = [
    { work: "청소", finish: false },
    { work: "미적분 과제", finish: true  },
    { work: "논문 해석", finish: false },
    { work: "알고리즘 풀기", finish: false },
    { work: "미니홈피 제작", finish: false },
    { work: "Blog 글 쓰기", finish: true }
]
// case 1.
let count = 0;
for(let i = 0; i < TodoList.length; i++) {
    if(TodoList[i].finish === true) {
        count++
    }
}
// round() : 반올림
// ceil() : 올림
// floor() : 내림
// trunc() : 버림
let per = Math.round(TodoList.length / count) * 10;

// case2. filter
let complete = TodoList.filter(item => item.finish === true).length;
per = Math.round((complete / TodoList.length)*100);

console.log(`총 ${per}% 진행하셨습니다.`);
 
 
 
 
 
 
 
 
 
 
 
 
 
 