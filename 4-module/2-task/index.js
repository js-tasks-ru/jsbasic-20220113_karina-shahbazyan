function makeDiagonalRed(table) {
  let rows = Array.from(table.rows);
  for (let row in rows) {
    let cells = Array.from(table.rows[row].cells);
    for ( let cell in cells) {
      if ( row == cell) {
        table.rows[row].cells[cell].style.backgroundColor = 'red';
      }
    }
  }
}
