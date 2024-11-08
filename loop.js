// fruits과일의 인기 순위를 3위까지 나타내어 
// "현재 인기 0 위 과일은 000 입니다."라는 문구를 나타내주세요.
const fruits = [
    { number:  1, title: "레드향"　　　　},
    { number:  2, title: "샤인머스켓"　　},
    { number:  3, title: "산청딸기"　　　},
    { number:  4, title: "한라봉"　　　　},
    { number:  5, title: "사과"　　　　　},
    { number:  6, title: "애플망고"　　　},
    { number:  7, title: "딸기"　　　　　},
    { number:  8, title: "천혜향"　　　　},
    { number:  9, title: "과일선물세트"　},
    { number: 10, title: "귤"　　　　　 },
]

for(let i = 0; i <= 2; i++) {
    const number = fruits[i].number;
    const title = fruits[i].title;
    console.log(`오늘의 ${number}위 과일은 ${title}입니다.`)
}

// myShopping은 내가 구매한 목록을 보여주고 있습니다.
// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고
// "의류"를 구매한 횟수에 따라 등급을 나타내세요.
//  0~2 "Bronze"
//  3~4 "Silver"
//  5이상 "Gold"
// ※반복문 사용※
const myShopping = [
    {category: "과일", price: 12000　},
    {category: "의류", price:10000　 },
    {category: "의류", price: 20000　},
    {category: "장난감", price: 9000 },
    {category: "과일", price: 5000　 },
    {category: "의류", price: 10000  },
    {category: "과일", price: 8000　　},
    {category: "의류", price: 7000　　},
    {category: "장난감", price: 5000  },
    {category: "의류", price: 10000　 },
]

let count = 0;
let money = 0;
let tier = "";
for(let i = 0; i < myShopping.length; i++){
    if(myShopping[i].category === "의류") {
        count++;
        money += myShopping[i].price;
    }
}

if(count >= 5) {
    tier = "Gold"
} else if(count >=3) {
    tier = "Silver"
} else {
    tier = "Bronze"
}

console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${money}원 이며 등급은 ${tier}입니다.`)