function getSecondBiggestNumber(arr) {
    // 코드를 작성하세요.
    var tempArr = arr;
    var sortArr = [];

    while (true) {
        var maxNum = tempArr[0];
        var maxIndex = 0;
        for (var i = 0; i < tempArr.length; i++) {
            if (maxNum < tempArr[i]) {
                maxNum = tempArr[i];
                maxIndex = i;
            }
        }

        delete tempArr[maxIndex];
        sortArr.push(maxNum);

        if (sortArr.length == 2) {
            break;
        }
    }

    return sortArr[1];
}

// 테스트 코드
console.log(getSecondBiggestNumber([4, 7, 2, 1, 9, 3, 6, 5]));
console.log(getSecondBiggestNumber([80, 2, 44, 21, 92, 3, 51]));
console.log(getSecondBiggestNumber([4, 7, 6, 5]));
