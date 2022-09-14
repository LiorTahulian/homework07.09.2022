let chessBoard = [];
let chessLine = [];

for (x = 0; x < 8; x++) {

    for (y = 0; y < 8; y++) {
        
        if ((x + y + 1) % 2 == 0) {
            chessLine.push('White');
        } else {
            chessLine.push('Black');
        }
        
    }
    chessBoard.push(chessLine);
    chessLine = [];
}

console.log(chessBoard);
console.table(chessBoard);



// בעקרון היה אפשר לעשות בשורה 8
// ((x + y) % 2 == 0)
// הכוונה בלי פלוס 1