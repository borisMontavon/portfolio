import React from 'react';

class WorksImage extends React.Component {
    render() {
    const {imageUrl, altText} = this.props;

        return (
            <>
                <div className="col-lg-6">
                    <img src={imageUrl} className="image" alt={altText} />
                </div>
            </>
        )
    }
}

export default WorksImage;