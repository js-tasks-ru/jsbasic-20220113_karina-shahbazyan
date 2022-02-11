/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #rows
  constructor(rows) {
    this.#rows = rows.map((item) =>
     `<tr>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.salary}1000</td>
    <td>${item.city}</td>
    <td><button>X</button></td>
    </tr> `
    ).join('');

    this.elem = document.createElement('table');
    
    //this.elem = document.querySelector('table');
    //this.elem.querySelector('tbody').innerHTML = this.#rows
    const tableContent = this.#template();
    this.elem.innerHTML = tableContent;
    this.buttonClick();
  }
  
  buttonClick = () => {
    this.elem.addEventListener('click', this.#OnClick)
  }

  #OnClick = (event) => {
    if (event.target.tagName == 'BUTTON') {
      //event.target.closest('tr').hidden = true;
      let str = event.target.closest('tr');
      str.parentNode.removeChild(str);
    }
  }

  #template() {
    return `
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        ${this.#rows}
    </tbody>
    `;
  }
 
  
}

