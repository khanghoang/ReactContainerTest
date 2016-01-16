import React from 'react';
import {expect} from 'chai';
import waitFor from '../utils/waitFor';
import ListCommentsContainer from '../../app/containers/ListCommentsContainer';
import {
    mount
} from 'enzyme';


describe('<ListCommentsContainer />', () => {
    it('render enought list items', (done) => {
        let listCommentsContainer = mount(<ListCommentsContainer />);
        waitFor(() => {
            return listCommentsContainer.find('li').length === 5;
        }, done);
    });
});
