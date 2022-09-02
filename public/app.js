/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/ImgSlider.js":
/*!*****************************!*\
  !*** ./src/js/ImgSlider.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImgSlider)
/* harmony export */ });
class ImgSlider{
  #sliderWrapEl;
  #sliderLstEl;
  #sliderEl;
  #currentIdx=0;
  #sliderNumber;
  #sliderScale;
  #interValId;
  
  controlWrapEl;
  indicatorWrapEl;
  autoplay =true;
  nextBtnEl;
  prevBtnEl;
  constructor(){
    this.assignElement();
    this.initSliderScale();
    this.initWidth();
    this.initSliderNumber();
    this.createIndicator();
    this.onSetIndicator();
    this.onAutoPlay();
    this.addEvent();
  }
  assignElement(){
    this.#sliderWrapEl = document.getElementById("slider-wrap");
    this.#sliderLstEl = this.#sliderWrapEl.querySelector(".slider");
    this.#sliderEl = this.#sliderLstEl.querySelectorAll("img");
    this.nextBtnEl = this.#sliderWrapEl.querySelector(".next");
    this.prevBtnEl = this.#sliderWrapEl.querySelector(".prev");
    this.indicatorWrapEl= this.#sliderWrapEl.querySelector("#indicator-wrap");
    this.controlWrapEl = this.#sliderWrapEl.querySelector("#control-wrap");
  }
  addEvent(){
    this.nextBtnEl.addEventListener("click",this.onMoveNext.bind(this));
    this.prevBtnEl.addEventListener("click",this.onMovePrev.bind(this));
    this.controlWrapEl.addEventListener("click",this.onTogglePlay.bind(this));
    this.indicatorWrapEl.addEventListener("click",this.onClickIndicator.bind(this));
  }
  initWidth(){
    this.#sliderEl.forEach((inner)=>{
      inner.style.width=`${this.#sliderScale}px`;
    });
  }
  initSliderNumber(){
    this.#sliderNumber=this.#sliderEl.length;
  }
  initSliderScale(){
    this.#sliderScale = this.#sliderWrapEl.clientWidth;
  }
  createIndicator(){
    const docFragment = document.createDocumentFragment();
    for (let i =0;i<this.#sliderNumber;i++){
      const li = document.createElement('li');
      li.dataset.sliderIdx=i;
      docFragment.appendChild(li);
    }
    this.indicatorWrapEl.querySelector('ul').appendChild(docFragment);
  }
  onSetIndicator(){
    this.indicatorWrapEl.querySelector('li.active')?.classList.remove('active');
    this.indicatorWrapEl.querySelector(`ul li:nth-child(${this.#currentIdx+1})`).classList.add('active');
  }
  onClickIndicator(event){
    const position = parseInt(event.target.dataset.sliderIdx);
    const IsNumber = !!position
    //console.log(position)
    //indicator 사이의 undefined인 경우 
    if(!IsNumber){
      return
    }
    this.#currentIdx = position;
    this.#sliderLstEl.style.marginLeft = `-${this.#sliderScale*this.#currentIdx}px`;
    this.onResetInterval(this.autoplay);
    this.onSetIndicator();
  }
  onMoveNext(){
    this.#currentIdx +=1;
    if(this.#currentIdx>= this.#sliderNumber){
      this.#currentIdx=0;
    }
    this.#sliderLstEl.style.marginLeft = `-${this.#currentIdx * this.#sliderScale}px`
    this.onResetInterval(this.autoplay);
    this.onSetIndicator();
  }
  onMovePrev(){
    this.#currentIdx -=1;
    if(this.#currentIdx <0){
      this.#currentIdx = this.#sliderNumber -1
    }
    this.#sliderLstEl.style.marginLeft = `-${this.#currentIdx * this.#sliderScale}px`
    this.onResetInterval(this.autoplay);
    this.onSetIndicator();
  }
  onAutoPlay(){
    this.#interValId= setInterval(this.onMoveNext.bind(this),2000);
  }
  onTogglePlay(event){
    if(event.target.dataset.status==='play'){
      this.autoplay=true;
      this.controlWrapEl.classList.add('play');
      this.controlWrapEl.classList.remove('pause');
      this.onAutoPlay();
    }else if(event.target.dataset.status ==='pause'){
      this.autoplay = false;
      this.controlWrapEl.classList.add('pause');
      this.controlWrapEl.classList.remove('play');
      clearInterval(this.#interValId);
    }
  }
  onResetInterval(IsAutoPlay){
    if(IsAutoPlay){
      clearInterval(this.#interValId);
      this.#interValId= setInterval(this.onMoveNext.bind(this),2000);
    }
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _ImgSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImgSlider */ "./src/js/ImgSlider.js");



new _ImgSlider__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=app.js.map