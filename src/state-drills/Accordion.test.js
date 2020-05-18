import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Accordion Component', () =>{
    const sectionsProp = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ];

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div)
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders no sections by default', () => {
        const tree = renderer.create(<Accordion sections={sectionsProp} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('renders an empty li when prop is not supplied', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders a clicked section properly', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        wrapper.find('button').at(0).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the last section clicked properly', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})