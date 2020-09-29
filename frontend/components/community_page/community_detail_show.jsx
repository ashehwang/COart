import React from 'react';

class CommunityDetailShow extends React.Component {
    constructor(props){
        super(props);
    }

    renderDetail(){
        if (this.props.community.detail) {
            return(
                <div className="world-item-show-detail">
                    {this.props.community.detail.split("\n").map( (text, i) => <p key={i}>{text}<br/></p>)}
                </div>
            )
        } else return null;
    }
    
    render(){
        const {community} = this.props;
        if(!community) return <div>no community</div>
        const showImage = community.imageUrl ? <img src={community.imageUrl} /> : null;

        return(
            <div className="">
                {this.props.community.intro}
                <div className="flex-center">{showImage}</div>
                {this.renderDetail()}
            </div>
        )
    }
}

export default CommunityDetailShow;