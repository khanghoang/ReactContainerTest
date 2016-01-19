import React from 'react';
import {expect} from 'chai';
import waitFor from '../utils/waitFor';
import ListCommentsContainer from '../../app/containers/ListCommentsContainer';
import {
    mount
} from 'enzyme';
import {spy} from 'sinon';


describe('<ListCommentsContainer />', () => {
    it('render enought list items', (done) => {
        let listCommentsContainer = mount(<ListCommentsContainer />);
        waitFor(() => {
            return listCommentsContainer.find('li').length === 5;
        }, done);
    });

    it('should render loading', (done) => {
        let listCommentsContainer = mount(<ListCommentsContainer />);
        // console.log(listCommentsContainer.find('div'));
        waitFor(() => {
            return listCommentsContainer.find('div.loading').length === 1;
        }, done);
    });

    it('submit the form', (done) => {
        let handleSubmitSpy = spy();
        let listCommentsContainer = mount(<ListCommentsContainer handleSubmit={handleSubmitSpy} />);

        // wait for loading successfully
        waitFor(
            () => listCommentsContainer.find('li').length === 5,
            () => {
                let form = listCommentsContainer.find('form');
                let passwordField = listCommentsContainer.find('input').get(1);
                passwordField.value = '123456';
                let nameField = listCommentsContainer.find('input').get(0);
                nameField.value = 'test@dev.com';
                form.simulate('submit');

                waitFor(
                    () => handleSubmitSpy.calledOnce,
                        done
                )
            }
        )

    })
});
