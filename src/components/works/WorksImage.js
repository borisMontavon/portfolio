import React from 'react';

class WorksImage extends React.Component {
    render() {
    const {imageClass, imageTitle} = this.props;

        return (
            <>
                <div className={imageClass}>
                    <h4>{imageTitle}</h4>
                </div>
            </>
        )
    }
}

export default WorksImage;