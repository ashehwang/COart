import React from 'react';

class CreateCharacterPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user_id: this.props.currentUser.id, character_id: 1, body: "", visibility: "public", photoFile: null, photoUrl: null };
        // this.updateBody = this.updateBody.bind(this);
        // this.handleFild = this.handleFild.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateBody(e){
        this.setState({ body: e.currentTarget.value });
    }

    handleFile(e){
        const file = e.currentTarget.file[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("character_post[body]", this.state.body);
        formData.append("character_post[user_id]", this.props.currentUser.id);
        formData.append("character_post[character_id]", this.props.currentUser.selected_id);
        formData.append("character_post[visibility]", this.state.visibility);
        if (this.state.photoFile) {
            formData.append("charater_post[photo]", this.state.photoFile);
        }
        this.props.createCharacterPost(formData);
        this.props.closeModal();
    }

    render(){

        const preview = this.state.photoUrl ? <img className="pic-preview" src={this.state.photoUrl} /> : null;
    
        return(
            <div>
                This will be creating character post
            </div>
        )
    }
}

export default CreateCharacterPostForm;