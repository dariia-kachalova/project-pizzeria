import { select, templates } from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;
    thisHome.render(element);
  }

  render(element) {
    const thisHome = this;

    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.order = thisHome.dom.wrapper.querySelector(select.home.order);
    thisHome.dom.book = thisHome.dom.wrapper.querySelector(select.home.book);
  }

}


export default Home;