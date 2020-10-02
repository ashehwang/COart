import React from 'react';

class EditUser extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleFile = this.handleFile.bind(this);
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

    render(){

        const {user} = this.props;
        if(!user) return <div> NO USER </div>;

        return(
            <div className="edit-user-container shadow">
                <div className="edit-user-prompt relative">
                    Edit Your Profile
                    <i className="far fa-times-circle absolute hover"></i>
                </div>
                <div className="edit-user-photo flex-center">
                    <img src={this.state.photoUrl} />
                </div>
                <div className="edit-user-detail flex">
                    <label>Name: </label>
                        <input type="text" value={this.state.nick_name}/>
                </div>
                <div className="edit-user-detail flex">
                    <label>Introduction: </label>
                        <input type="text" value={this.state.bio ? this.state.bio : ""} />
                </div>
                <div className="edit-user-detail flex">
                    {/* <label>Change Photo</label> */}
                    <label htmlFor="file-upload" className="custom-file-upload hover">
                         Change Photo
                    </label>
                    <input type="file" onChange={this.handleFile} id="file-upload" className="hidden" />
                </div>
                <div className="edit-user-submit flex-center hover">
                    Edit
                </div>
            </div>
        )
    }
}

export default EditUser;