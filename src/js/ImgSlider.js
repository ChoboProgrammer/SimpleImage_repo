export default class ImgSlider{
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