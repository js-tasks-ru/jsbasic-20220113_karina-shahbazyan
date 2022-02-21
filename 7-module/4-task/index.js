export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = `<span></span>\n`.repeat(steps);
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    const stepSliderContent = this.#templateForStepSlider(this.steps);
    this.elem.innerHTML = stepSliderContent;
    this.arrayOfSteps = Array.from(this.elem.querySelectorAll('span'));
    this.arrayOfSteps[1].classList.add('slider__step-active');
    this.sliderValue = this.elem.querySelector('.slider__value');
    this.sliderValue.innerText = value;
    this.progress = this.elem.querySelector('.slider__progress');
    this.progress.style.width = `${0}%`
    this.#stepSliderChanger();
  }


  #stepSliderChanger() {
    document.addEventListener('click', this.#stepSliderOnClick);
    this.elem.addEventListener('pointerdown', () => { this.elem.classList.add('slider_dragging')
      document.addEventListener('pointermove', this.#stepSliderOnClick);
      
      document.addEventListener('pointerup', (event) => { this.#stepSliderOnClick(event);
        document.removeEventListener('pointermove', this.#stepSliderOnClick)
      }, { once: true})
    })
  }


  #stepSliderOnClick = (event) => {
    if (!this.elem.offsetWidth) return;
    let thumb = this.elem.querySelector('.slider__thumb');
    thumb.ondragstart = () => false;
    let progress = this.elem.querySelector('.slider__progress');

    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let segments = this.arrayOfSteps.length - 2;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);
    if (value < 0 ) {
      if (event.type === "pointerup") {
      value = 0
      const stepEvent = new CustomEvent('slider-change', { 
        detail: value, 
        bubbles: true 
      })
      this.elem.dispatchEvent(stepEvent);
      }
      return
    }
    else if ( value > 4 ) {
      if (event.type === "pointerup"){
      value = 4;
      const stepEvent = new CustomEvent('slider-change', { 
        detail: value, 
        bubbles: true 
      })
      this.elem.dispatchEvent(stepEvent);
    }
      return
    }
    this.sliderValue.innerText = value;

    this.arrayOfSteps.forEach((item) => { item.classList.remove('slider__step-active')});
    this.arrayOfSteps[value+1].classList.add('slider__step-active');
    
    if (event.type === 'pointermove') { 
      if (leftRelative < 0) {
        leftRelative = 0;
      }
      if (leftRelative > 1) {
        leftRelative = 1;
      }
      let leftPercents = leftRelative * 100;
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;
    }
    else if ((event.type === 'click') || (event.type === 'pointerup')) {
      let valuePercents = value / segments * 100;
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      this.elem.classList.remove('slider_dragging');
      const stepEvent = new CustomEvent('slider-change', { 
        detail: value, 
        bubbles: true 
      })
      this.elem.dispatchEvent(stepEvent);
    }    
  }
  
  #templateForStepSlider(steps) {
    return `
    

      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>

      <!--Полоска слайдера-->
      <div class="slider__progress"></div>

      <!-- Шаги слайдера (вертикальные чёрточки) -->
      <div class="slider__steps">
        <!-- текущий выбранный шаг выделен этим классом -->
        ${steps}
      </div>
    
    `;
  }
}
