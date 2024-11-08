// stringData 배열에는 오직 string 타입의 데이터만 있어야 합니다.
// 그런데 누군가의 실수로 다른 타입의 값들도 배열안에 있습니다.
// 모든 데이터들을 string으로 변환해주세요.
let stringData = [1, "가나", true, 126, "false" ]
for(let i = 0; i < stringData.length; i++) {
    stringData[i] = String(stringData[i]);
}

// numberData배열에는 오직 number 타입의 데이터만 있어야 합니다.
// 그런데 누군가의 실수로 다른 타입의 값들도 배열 안에 있습니다.
// number 타입의 데이터만 남기고 나머지는 삭제해주세요.
let numberData = [1, "가나", true, 126, "false", 100 ]
numberData = numberData.filter(item => typeof item === 'number');