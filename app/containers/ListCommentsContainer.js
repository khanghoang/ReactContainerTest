import React, {Component} from 'react';
import ListCommentsComponent from '../components/ListCommentsComponent';

class ListCommentsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            isLoading: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // in the real world, this will be async call to
        // some APIs and get response.
        setTimeout(() => {
            this.setState(Object.assign({}, {
                comments: [
                    "this is first comment",
                    "this is second comment",
                    "this is third comment",
                    "this is fourth comment",
                    "this is fifth comment",
                ]
            }, {isLoading: false}));
        }, 1000);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`username ${this.refs.username.value} password ${this.refs.password.value}`);
    }

    render() {
        return (
            this.state.isLoading ?
            <div className='loading'>Loading...</div> :
            <div>
                <ListCommentsComponent
                    comments={this.state.comments}
                    />
                <form onSubmit={this.props.handleSubmit || this.handleSubmit}>
                    <input ref='username' name='username' type='text'></input>
                    <input ref='password' name='password' type='text'></input>
                </form>
            </div>
        )
    }
}

export default ListCommentsContainer;
