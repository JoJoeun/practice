// 한 유저가 이메일을 아이디로 사용하여 회원가입을 하려고 합니다.
// 이메일을 아이디로 사용할 때, 몇 가지 조건이 있습니다.
// 아래 조건에 맞춰 데이터를 저장해주세요.
let email = "codecamp@gamil.com ";
//  1. 이메일에 @가 있는지 확인할 것
email.includes("@");
//  2. 이메일 앞 뒤에는 공백이 없어야 합니다.
email.trim();
//  3. 이메일을 데이터 베이스에 저장할 때는 모두 소문자로 변형되어야 합니다.
email.toLowerCase();

// 한 유저가 이메일을 아이디로 사용하여 회원가입을 하였습니다.
// 그런데, 본인의 아이디가 무엇인지 잊어버려 '이메일 찾기'를 하려고 합니다.
// 다행히 '이메일 찾기'를 하였지만, 
// 우리는 개인정보 도용에 따른 피해방지를 위해 일부는 '**'로 표시하여 보여주어야 합니다.
// email에서 @앞 두글자를 '**'로 바꾸어 나타내 주세요.
// case 1_split
let splitId = email.split("@");
let user = splitId[0];
let maskedId = user.slice(0, user.length -2) + "**";
let maskedEmail = [maskedId, splitId[1]].join("@");
// case 2_indexOf
// "@"의 위치(몇번쨰 숫자)를 찾는다.
let atIndex = email.indexOf("@");
// email의 뒤 두자리를 지우고,
// 문자열 "**"과 합한다.
// email의 @까지 지우고 남은 것(주소)과 합한다.
let maskEmail = email.slice(0, atIndex-2) + "**" + email.slice(atIndex);

