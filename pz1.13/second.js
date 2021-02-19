function chessboard(size) {
    let output = "";
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size / 2; j++) {
            if(i % 2 === 0) {
                output += "@";
                output += "#";
            } else {
                output += "#";
                output += "@";
            }
        }
        output += "\n";
    }
    return output;
}
console.log(chessboard(10));