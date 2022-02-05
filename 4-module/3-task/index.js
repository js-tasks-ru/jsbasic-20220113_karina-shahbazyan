function highlight(table) {
  let rows = Array.from(table.rows);
  for (let row in rows) {
    if (table.rows[row].cells[3].dataset.available === "true") {
      table.rows[row].classList.add('available');
    }
    else if (table.rows[row].cells[3].dataset.available === "false"){
      table.rows[row].classList.add('unavailable');
    }
    else {
      table.rows[row].setAttribute('hidden','hidden');
    }

    if (table.rows[row].cells[2].innerText === "m") {
      table.rows[row].classList.add('male');
    }
    else if (table.rows[row].cells[2].innerText === "f") {
      table.rows[row].classList.add('female');
    }

    if (Number(table.rows[row].cells[1].innerText) < 18) {
      table.rows[row].style.textDecoration = 'line-through';
    }
  }
}
