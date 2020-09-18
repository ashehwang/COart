import React from 'react';

class CharPostItem extends React.Component {
    constructor(props){
        super(props) //this.props.characterPost / creator /character
    }

    imgExists(){
        if(this.props.characterPost.photoUrl){
            return <div className="char-post-img"><img src={this.props.characterPost.photoUrl}/></div>
        } else {return null}
    }

    render(){

        const { characterPost, creator, character } = this.props;

        return (
            <div className="char-post-container">
                <div className="char-post-top flex">
                    <div>Profile Pic Here</div>
                    <div>
                        <div className="char-post-profile">
                            {character.first_name} {character.last_name} <span> updated at </span>
                        </div>
                        {this.imgExists()}
                        <div className="char-post-body">
                            {characterPost.body}
                        </div>
                    </div>
                </div>
                <div className="char-post-bottom">
                    Edit & Comment Buttons Here
                </div>
            </div>
        )
    }
}

export default CharPostItem;