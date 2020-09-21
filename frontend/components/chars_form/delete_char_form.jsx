import React from 'react';

class DeleteCharForm extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="delete-char-container relative">
                <i className="fas fa-exclamation-circle absolute"></i><h1>You're about to delete {this.props.character.first_name}</h1>
                <div>Are you sure? All related posts and comments will be removed.</div>
                <div className="hover delete-char-button flex-center" onClick={() => this.props.deleteChar(this.props.character.id).then(this.props.closeModal())}>Delete {this.props.character.first_name} Anyway</div>
            </div>
        )
    }
}

export default DeleteCharForm;