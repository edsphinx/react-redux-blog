import React from 'react';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
    return (
        <div className = 'ui segment'>
            <div className='ui container'>
                <CommentBox />
            </div>
            <div className='ui horizontal divider'></div>
            <div className='ui container'>
                <CommentList />
            </div>
        </div>
    );
};