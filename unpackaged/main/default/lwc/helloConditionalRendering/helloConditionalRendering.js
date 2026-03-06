import { LightningElement } from 'lwc';
export default class HelloConditionalRendering extends LightningElement {

    areDetailsVisible = false;

  handleChange(event) {
    
    debugger;

    this.areDetailsVisible = event.target.checked;
  }

}