import React from 'react';
import { Link } from 'react-router-dom';

class ArtLog extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="art-log-container flex-diag">
                <div className="art-log-nav flex-vert">
                    <div>
                        Main
                    </div>
                    <div>
                        Characters
                    </div>
                    <div>
                        Guest
                    </div>
                </div>
                <div className="art-log-feed">
                    this is the feed
                </div>
                <div className="art-log-side">
                    Your Profile Here
                </div>
            </div>
        )
    }
}

export default ArtLog;