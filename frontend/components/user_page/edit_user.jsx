import React from 'react';

class EditUser extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
          fileReader.readAsDataURL(file);
        }
    }

    // componentDidMount(){
    //     this._isMounted = true;
    // }

    // componentWillUnmount(){
    //     this._isMounted = false;
    // }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value });
    }

    handleSubmit(e){
        const formData = new FormData();
        formData.append('user[bio]', this.state.bio);
        formData.append('user[nick_name]', this.state.nick_name);
        if (this.state.photoFile) formData.append('user[photo]', this.state.photoFile);
        this.props.editUser(formData, this.state.id)
            .then(res => {
                if (res.type = "RECEIVE_UPDATED_USER") {
                    this.props.closeModal();
                    // this.forceUpdate();
                }
            })
    }

    render(){

        const {user} = this.props;
        if(!user) return <div> NO USER </div>;
        // console.log(this.state)
        return(
            <div className="edit-user-container shadow">
                <div className="edit-user-prompt relative">
                    Edit Your Profile
                    <i className="far fa-times-circle absolute hover" onClick={() => this.props.closeModal()}></i>
                </div>
                <div className="edit-user-photo flex-center">
                    <img src={this.state.photoUrl} />
                </div>
                <div className="edit-user-detail flex">
                    <label>Name: </label>
                        <input type="text" value={this.state.nick_name} onChange={this.update('nick_name')}/>
                </div>
                <div className="edit-user-detail flex">
                    <label>Introduction: </label>
                        <input type="text" value={this.state.bio ? this.state.bio : ""} onChange={this.update('bio')}/>
                </div>
                <div className="edit-user-detail flex">
                    <label htmlFor="file-upload" className="custom-file-upload hover">
                         Change Photo
                    </label>
                    <input type="file" onChange={this.handleFile} id="file-upload" className="hidden" />
                </div>
                <div className="edit-user-submit flex-center hover" onClick={this.handleSubmit}>
                    Edit
                </div>
            </div>
        )
    }
}

export default EditUser;