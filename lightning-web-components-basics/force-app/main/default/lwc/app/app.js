import { LightningElement, api, wire } from 'lwc';

export default class App extends LightningElement {
  bike = {
    name: 'Electra X4',
    picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg'
  };
}
