import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Header from '../components/heder';

describe('<Header/>', () => {
    test('Should render corrently', () => {
        const component = renderer.create(<Header/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should not call onClick when click', () => {
        const onClick = jest.fn();

        const component = mount(<Header onClick={onClick}/>);
        component.simulate('click');

        expect(onClick.mock.calls.length).toBe(0);
    });

});