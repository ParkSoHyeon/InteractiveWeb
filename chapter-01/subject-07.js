function whatShouldICallYou(myAge, myGender, yourAge, yourGender) {
    // 나의 나이, 나의 성별, 상대방의 나이, 상대방의 성별
    // 총 4개의 정보를 활용해서 호칭을 결정해보세요.
    if (myAge > yourAge) {
        if (yourGender === 'male') {
            return '남동생';
        }
        else if (yourGender === 'female') {
            return '여동생';
        }
    }
    else if (myAge < yourAge) {
        if (myGender === 'male') {
            if (yourGender === 'male') {
                return '형';
            }
            else if (yourGender === 'female') {
                return '누나';
            }
        }
        else if (myGender === 'female') {
            if (yourGender === 'male') {
                return '오빠';
            }
            else if (yourGender === 'female') {
                return '언니';
            }
        }
    }
    else {
        return '친구'
    }
}

// 테스트 코드
var result1 = whatShouldICallYou(23, 'male', 25, 'female');
var result2 = whatShouldICallYou(21, 'female', 21, 'female');
var result3 = whatShouldICallYou(25, 'female', 22, 'male');

console.log(result1);
console.log(result2);
console.log(result3);