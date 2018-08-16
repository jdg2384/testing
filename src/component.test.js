import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, get, find } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Component
import TestComponent from './testComponent.js'
//Actions
import * as Actions from "./actions.js";
//Store
import InfoStore from "./InfoStore";

Enzyme.configure({ adapter: new Adapter() });

const info = "Kit Kat"

// ** initial State ** //
describe('Initial State',() => {
  it('Info = Null', () => {
    const wrapper = mount((
      <TestComponent />
    ));
    wrapper.debug(wrapper)
    expect(wrapper.state().info).equal(null)
  })
})

// ** Click Event ** //
describe('<TestComponent />', () => {
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount((
      <TestComponent />
    ));
    wrapper.find('button').simulate('click', {target: info});
  });
});

// ** Actions ** //
// describe('Action', () => {
//   it('Data value is correct', () => {
//     // console.log('types', Actions.updateInfo)
//     // const data = info
//     const expectedAction = {
//       type: 'INFO_UPDATE',
//       data
//     }
//     expect(Actions.updateInfo(data)).equal(expectedAction)
//   });
// });

// ** Store ** //
describe('Store',() => {
  it('Store value = Kit Kat', () => {
    expect(InfoStore.info).equal(info)
  })
})

// ** Updated State ** //
describe('Updated State',() => {
  it('Info = Kit kate', () => {
    const wrapper = mount((
      <TestComponent />
    ));
    expect(wrapper.state().info).equal(info)
  })
})