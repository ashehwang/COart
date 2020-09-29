import React from 'react';

class CommunityPage extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCommunityByUrl(this.props.worldUrl);
    }

    render(){

        const { community } = this.props;

        if(!community) return <div className="warning">No Such World Exists</div>
        return(
            <div className="world-show-container">
                <div className="world-show-limit">
                    <div className="world-show-full-name">{community.name}</div>
                    <div className="world-show flex">
                        <div className="world-show-left">
                            <div className="world-show-details">
                                logo name admin etc goes here. Number of members. Big title.
                            </div>
                            <div className="world-show-actions">
                                <div className="world-show-action">View Full Detail</div>
                                {/* <div>View Notices</div> */}
                                <div className="world-show-action">View Members</div>
                                <div className="world-show-action">View StoryLine</div>
                                <div className="world-show-action">Apply To Join</div>
                            </div>
                        </div>
                        <div className="world-show-right">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommunityPage;