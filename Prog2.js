const PATTERN_HEIGHT = 5;

for (let i = 0; i < PATTERN_HEIGHT; i++) {
    let row = "";

    for (let space = 0; space < i; space++) {
        row += " ";
    }

    let currentRow = PATTERN_HEIGHT - 1 - i;
    let value = 1;

    for (let j = 0; j <= currentRow; j++) {
        row += value;

        if (j < currentRow) {
            row += " ";
        }

        value = value * (currentRow - j) / (j + 1);
    }

    console.log(row);
}
