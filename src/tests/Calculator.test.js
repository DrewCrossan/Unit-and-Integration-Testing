import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 and 4 to get 5', () => {
    // const button1 = container.find('#number1');
    // const button_add = container.find('#operator_add');
    // const button4 = container.find('#number4');
    // const button_equals = container.find('#operator-equals')
    // const runningTotal = container.find('#running-total');
    // button1.simulate('click');
    // button_add.simulate('click');
    // button4.simulate('click');
    // button_equals.simulate('click')

    container.find('#number1').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');

    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    container.find('#number7').simulate('click');
    container.find('#operator-subtract').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');

    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    container.find('#number3').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');

    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    container.find('#number2').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number7').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');

    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () =>{
    container.find('#number2').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#number7').simulate('click');
    const runningTotal = container.find('#running-total');

    expect(runningTotal.text()).toEqual('217');
  })

  it('should chain multiple operations together', () => {
    container.find('#number3').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number3').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');

    expect(runningTotal.text()).toEqual('10');
  })

  it('should clear the running total without affecting the calculation', () => {
    container.find('#number7').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#clear').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number3').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');

    expect(runningTotal.text()).toEqual('78');
  })
})

