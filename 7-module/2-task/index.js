import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(`
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title"></h3>
        </div>
        <div class="modal__body"></div>
      </div>
    </div>`)
    this.title = this.elem.querySelector('.modal__title');
    this.body = this.elem.querySelector('.modal__body');
  }
  setTitle(title) {
    this.title.innerText = title;

  }
  setBody(node) {
    this.body.innerHTML = node.outerHTML;
  }
  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
    let closeButton = document.body.querySelector('.modal__close');
    closeButton.addEventListener('click', this.close);
    document.addEventListener('keydown', this.#keyDown)
  }
  #keyDown = (event) => {
    if (event.code === "Escape") {
      this.close();
    }
  }
  close() {
    
    let modal = document.querySelector(".modal");
    if (modal !== null) {
      modal.remove();
      document.body.classList.remove('is-modal-open');
    }
  }
}
