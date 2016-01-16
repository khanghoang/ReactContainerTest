import React from 'react';
import {expect} from 'chai';
import waitFor from '../utils/waitFor';
import ListCommentsContainer from '../../app/containers/ListCommentsContainer';
import {
    mount
} from 'enzyme';


describe('<ListCommentsContainer />', function() {
    it('render enought list items', function(done) {
        this.timeout(5000);
        let listCommentsContainer = mount(<ListCommentsContainer />);
        waitFor(function() {
            return listCommentsContainer.find('li').length === 5;
        }, done);
    });
});
