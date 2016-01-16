import React, {Component} from 'react';

class CommentItemComponent extends Component {
    render() {
        return (
            <li>{this.props.comment}</li>
        );
    }
}

export default CommentItemComponent;
