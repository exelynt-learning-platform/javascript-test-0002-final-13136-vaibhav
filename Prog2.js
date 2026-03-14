let rows = 5;

for (let i = 0; i < rows; i++) {
    let ans = "";

    for (let s = 0; s < i; s++) {
        ans += " ";
    }

    let count = rows - i;

    for (let j = 0; j < count; j++) {
        let num = 1;

        for (let k = 0; k < j; k++) {
            num = num * (count - 1 - k) / (k + 1);
        }

        ans += num;

        if (j != count - 1) {
            ans += " ";
        }
    }

    console.log(ans);
}
