import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, get, find } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Component
import TestComponent from './testComponent.js'
//Actions
// import * as Actions from "./actions.js";
//Store
// import InfoStore from "./InfoStore";

Enzyme.configure({ adapter: new Adapter() });

// Initialize global helpers
beforeEach(() => {
    sinon();
    chai();
    Enzyme()
});
  
  // Re-export all enzyme exports
  export * from 'enzyme';