// name이라는 변수를 선언하고, 자신의 이름을 할당하세요.
// const, let, var를 이용하세요
let name = "조은";

// 주어진 변수 name에 "철수"를 재할당 하세요
// const, let, var 중에 재할당을 할 수 없는 것은 무엇일까요? > const
name = "철수";

// 주어진 변수 fruits에 "사과", "바나나", "파인애플"을 담아주세요.
let fruits = [];
fruits = ["사과", "바나나", "파인애플"];

// 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.
let newFruits =[];
newFruits = fruits.push(fruits[fruits.length-1]);

// 학생들의 이름이 담긴 students 배열이 있습니다.
// 배열에서 2번쨰 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요.
let students = ["철수", "영희", "훈이", "짱구", "유리"];
let sliceStudents = students.slice(0,3);

// 주어진 fruits 배열의 모든 요소에 "맛있는"이라는 문자열을 추가하세요.
for(let i = 0; i < fruits.length; i++) {
    fruits[i] = "맛있는 " + fruits[i];
}

// 상수 number는 핸드폰 번호가 담긴 문자열입니다.
// 해당 문자열을 "010","1234", "5678" 로 나눈 배열을 만드시오.
const number = "01012345678";
const array = [number.slice(0,3),number.slice(4,7),number.slice(8,11)];

// 주어진 student 객체에 
// name이라는 key를 만들고, "철수"를 할당하세요.
let student = {};
student.name = "철수";

// student와 school 두개의 객체가 있습니다.
// student 객체에 school 이라는 객체를 할당해야합니다.
const student = {
	name: "철수",
	age: 8,
};


const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school;

// 주어진 student는 "철수"에 대한 정보를 모아둔 객체입니다.
// 그런데 철수와 관련이 없는 drink라는 키가 있네요.
// student에서 {drink: "사이다"}를 삭제해주세요.
let student = {
	name: "철수",
	age: 8,
	drink: "사이다"
};

delete student.drink;

// 주어진 classmates는 "다람쥐초등학교"학생들의 정보를 모아둔 배열입니다.
// 그런데 자세히 보니 "영희"학생의 정보가 잘못 입력되어있습니다.
// "영희"의 school 값을 "다람쥐초등학교"로 바꿔 주세요.
const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];

classmates[1].school = "다람쥐초등학교";

// 주어진 변수 str과 number의 데이터 타입을 확인하세요.
let str = "3"
number = 3

typeof str;
typeof number;

// 주어진 변수 array와 object의 타입을 확인하세요.
// 배열과 객체를 더 정확하게 구분하려면 Array.isArray()를 사용해보세요.
array = []
let object = {}

Array.isArray(array);
Array.isArray(object);

// num에 데이터를 string으로 변경 후, str에 할당해주세요.
let num = 24

str = String(num);

// 각각의 연산 결과가 무엇인지 알아보세요.
1 + "1" // 11
1 - "1" // 0
"1" + "1" // 11
1 * "1" // 1
3 * "A" // NAN
1 + 1 + '1' // 21
'1' + 1 + 1 //12
"11" - 1 // 10
"11" + 1 // 111
"홍" + "길동" // 홍길동
20 === "20" // false
20 == "20" // false
!true //false

// 각각의 연산 결과가 무엇인지 알아보세요.
(20 >= 10) && (20 === 10) // false
(20 === 10) || (10 === 10) //true


// input1, input2에는 boolean 타입인 true,false가 입력됩니다.
// 둘 중에 하나라도 true라면 "true"
// 두 개 모두 false라면 "false"라는 문구를 띄워주세요.
function boolean(input1, input2) {

	if (!input1 && !input2) {
		console.log("false");
	} else{
        console.log("true")
    }
}

// 입력되는 숫자가 짝수인지 홀수인지 구분하는 함수를 만드려고 합니다.
// 입력된 값이 짝수이면 "Even", 홀수이면 "Odd", 0미연 "Zero"라는 문구를 띄워주세요.
function evenOdd(num) {

	if (num === 0) {
		console.log("Zero");
	} else if (num%2 === 0) {
		console.log("Even");
	} else{
		console.log("Odd");
	}
}

// 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.
// 입력된 값에 따라 알맞은 문구를 띄우세요.
// 18 이하면 "조금 춥네요", "19~23"이면 "날씨가 좋네요", 24이상이면 "조금 덥습니다"
function temperature(number) {
	
	if (number >= 24) {
		console.log("조금 덥습니다");
	} else if(23 >= number && number >= 18) {
        console.log("날씨가 좋네요")
    } else {
        console.log("조금 춥네요")
    }
}

// 입력되는 달(month)에 따라 각 달에 몇 일이 있는지 보여주는 함수를 만드려고 합니다.
// 각 조건에 해당하는 알맞는 갑을 입력해주세요.
function days(month) {

	if (month === 2) {
		console.log("28");
	} else if (
        month === 1 || month === 3 || month === 5 ||
        month === 7 || month === 8 || month === 10 ||
        month === 12
    ) {
        console.log("31")
    } else {
        console.log("30")
    }
}

// 숫자 2개와 연산자를 입력받아 알맞게 계산하는 미니계산기 함수를 만들어주세요.
// num1과 num2는 숫자열,operator는 문자열로 입력됩니다.
// operator "+" "/" "-" "*"이외의 값이 들어온다면
// "올바른 입력이 아닙니다"라는 문구를 띄워주세요.
function calculator(num1, num2, operator){
	if (operator === "+") {
		console.log(num1 + num2)

	} else if (operator ==="/") {
		console.log(num1 / num2)

	} else if (operator === "-") {
        console.log(num1 - num2)
    } else if (operator === "*") {
        console.log(num1 * num2)
    } else {
        console.log("올바른 입력이 아닙니다")
    }
}

// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.
// num은 1 이상의 자연수가 들어옵니다.
// 만약 num이 5라면 1 + 2 + 3 + 4 + 5를 구해야합니다.
function sum(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result = result + i
    }
    console.log(result)
}
  
// 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
// 반복문을 이용해 "a"의 등장 횟수를 변수 count에 할당하세요.
function countLetter(str) {
    let count;
    // toLowerCase() : 문자열을 모두 소문자로 변환하는 메서드
    // str에 들어오는 문자열을 모두 소문자로 변경한다.
    str = str.toLowerCase();
    for (let i = 0; i <= str.length; i++) {
        if(str[i] === a) {
            // str에 있는 i번째 문자가 a 라면 개수를 계속 더한다.
            // count = count + 1;
            count++
        }
    }
    console.log(count);
}

// num을 입력받아 1부터 num까지 각각의 숫자 사이에 "-"가 들어간 문자열을 만들어야합니다.
// num에 3일 경우에는 "1-2-3"입니다.
function makeNumber(num) {
    let str = "1";
    for (let i = 2; i <= num; i++) {
        str = str + "-" + i;
    }
    console.log(str)
}  

// num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.
// num이 5일 경우에는 "135"입니다.
function makeOdd(num) {
    let str = "";
    for (let i = 0; i <= num; i++) {
      if (i%2 !== 0) {
        str = str + i;
      }
      console.log(str);
    }
}

// str은 무작위 숫자인 문자열입니다. 해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야합니다.
// 만약 str에 "12345"가 들어온다면 "5"를 나타내야합니다.
function bigNum(str) {
    let max = 0;
    for (let i = 0; i <= str.length; i++) {
        if(Number(str[i]) > max) {
            max = str[i];
        }
    }
    console.log(max)
}

// random 객체를 이용하여 1~100까지 무작위 숫자가 나오도록 하여 
// number와 비교해야 합니다/
// number보다 큰 수면 Win, 작은 수면 Lose라는 문구를 띄워주세요.
function random() {
    let number = 50;
    let min = 0;
    let max = 100;
    // random() *벼 100 을 할경우 0~99까지의 숫자가 무작위로 나오게 됨. (100미만)
    // 따라서 원하는 숫자 최대값 + 1 을 하여 범위 설정을 해준다.
    // 변수 선언을 해주는 이유는 
    let range = max - min + 1;
    const random = Math.floor(Math.random() * (max - min + 1)) - min;

    if(random > number) {
        console.log("Win")
    } else if (random < number) {
        console.log("Lose")
    }
}  

// 숫자열인 입력데이터 2개를 받아 나누기 기능을 하는 함수를 만들어야 합니다.
const divide = (num1, num2) => {
    return nun1 / num2;
}
// function divide(num1, num2) {
//  return num1/ num2;
// }
// const divide = function(num1,num2) {
//     return num1/num2;
// }
  
// 비밀번호 2개를 입력받아 대소문자 구분없이 비교하는 기능을 하는 함수를 화살표 함수를 이용해 만들어야 합니다.
// 1. 만약 비밀번호가 8~16자리가 아니라면, "비밀번호는 8~16자리여야 합니다" 문구를 띄워야합니다.
// 2. 만약 두 개의 비밀번호 값이 서로 다르다면 "비밀번호를 다시 확인해주세요"라는 문구를 띄워야합니다.
const validation = (password1, password2) => {
    if (password1 < 8  || password1 > 16) {
        return "비밀번호는 8~16 자리여야 합니다."
    } else if (password1 !== password2) {
        return "비밀번호를 다시 확인해주세요."
    }
}

// setTimeout을 이용하여 2초 뒤 "자동 로그아웃"이라는 문구를 띄우는 함수를 만들고 실행해보세요.
const logOut = () => {
    setTimeout(console.log("자동 로그아웃"),2000)
}

// newDate()를 이용하여 "오늘은 0000년 00월 00알 입니다."라는 문구를 만들어보세요.
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
// let min = now.getMinutes();
// let sec = now.getSeconds();
console.log(`오늘은 ${year}년 ${month}월 ${date}일 입니다.`);

























