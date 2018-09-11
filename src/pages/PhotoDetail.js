import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class UnconnectedPhotoDetail extends React.Component {
	render() {
		return (
            <div>
                <Link to='/'><div className="router-buttons">Lista</div></Link>
                <div style={{backgroundImage:`url(${this.props.url})`}} className="features-image-container"></div>
                <img className="main-img" src={this.props.url} />
                </div>
           
		);
	}
}

const defaultPhoto = 'https://www.lifewire.com/thmb/qLv10Pgd30kCy7OxXacwOWKxZ8M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg'

const mapStateToProps = (state, ownProps) => {

    // this.props.match.params.photoId
    // ownProps.match.params.photoId
    const photo = state.photos.find(photo => {
        return photo.id === parseInt(ownProps.match.params.photoId)
    })

	return {
		url: photo ? photo.url : defaultPhoto
	}
}

const connection = connect(mapStateToProps);
const PhotoDetail = connection(UnconnectedPhotoDetail);

export default PhotoDetail;
