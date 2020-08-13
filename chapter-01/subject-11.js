function range(start, end, step) {
    var arr = [];

    // 코드를 작성해주세요.
    if (step > 0) {
        for (var i = start; i < end; i += step) {
            arr.push(i);
        }
    }
    else {
        for (var i = start; i > end; i += step) {
            arr.push(i);
        }
    }

    return arr;
}

// 테스트 코드
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));