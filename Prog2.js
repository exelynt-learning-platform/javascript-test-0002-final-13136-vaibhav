const rows = [
    [1, 4, 6, 4, 1],
    [1, 3, 3, 1],
    [1, 2, 1],
    [1, 1],
    [1]
];

for (let i = 0; i < rows.length; i++) {
    let line = "";

    for (let s = 0; s < i; s++) {
        line += " ";
    }

    for (let j = 0; j < rows[i].length; j++) {
        line += rows[i][j];

        if (j < rows[i].length - 1) {
            line += " ";
        }
    }

    console.log(line);
}
