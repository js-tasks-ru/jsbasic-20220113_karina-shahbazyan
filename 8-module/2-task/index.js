import createElement from "../../assets/lib/create-element.js";
import ProductCard from "../../6-module/2-task/index.js";

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.elem = createElement(
      this.#templateForElem(
        products
          .map((item) => `<div class="card">
            ${new ProductCard(item).elem.innerHTML}</div>`
          )
          .join("\n")
      )
    )
    this.filters = {};
    this.filterObj = {
      nuts: "",
      vegeterian: "",
      spiciness: "",
      category: "",
    };
  }
  render = () => {
    this.elem
      .querySelector(".card button")
      .addEventListener("click", this.#onProductCardClick);
  };
  #onProductCardClick = () => {
    const productOnClick = new CustomEvent("product-add", {
      detail: this.id,
      bubbles: true,
    });
    this.elem.dispatchEvent(productOnClick);
  };
  #appendElem(products) {
    if (document.querySelector(".products-grid") !== null) {
      document.querySelector(".products-grid").remove();
    }
    
    this.elem = createElement(
      this.#templateForElem(
        products
          .map((item) =>
            this.#templateForCard(item.name, item.image, item.price)
          )
          .join("\n")
      )
    );
    if (document.querySelector("#container") !== null) {
      document.querySelector("#container").append(this.elem);
    }
  }
  updateFilter(filters) {
   
    
    if (filters.noNuts !== undefined) this.filterObj.noNuts = filters.noNuts;

    if (filters.vegeterianOnly !== undefined)
    this.filterObj.vegeterian = filters.vegeterianOnly;
    if (filters.maxSpiciness !== undefined)
    this.filterObj.spiciness = filters.maxSpiciness;
    if (filters.category !== undefined)
    this.filterObj.category = filters.category;

    
    let product = this.products.filter((item) => {
      if (!this.filterObj) return true;
      for (var key in this.filterObj) {
        if (key === "noNuts" && !!this.filterObj.noNuts) {
          return !item.nuts;
        }
        else if (key === "spiciness" && !!this.filterObj.spiciness && item.spiciness > this.filterObj[key]) {
          return false;
        }
        else if (
          !!this.filterObj[key] &&
          (item[key] === undefined || item[key] != this.filterObj[key]) && (key !== 'spiciness')
        ) {
          return false;
        }
      }
        return true;
    });
    this.#appendElem(product);
  }

  #templateForElem(products) {
    return `<div class="products-grid">
    <div class="products-grid__inner">
      ${products}
    </div>
  </div>`;
  }

  #templateForCard(name, image, price) {
    return `<div class="card">
        <div class="card__top">
            <img src="/assets/images/products/${image}" class="card__image" alt="product">
            <span class="card__price">€${price.toFixed(2)}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
    </div>`;
  }
}
