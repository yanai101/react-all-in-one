import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Header from '../components/heder'; 

describe('<Header/>', () => {
    test('Should render corrently', () => {
        const component = renderer.create(<Header/>);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});