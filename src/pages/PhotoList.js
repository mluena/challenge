import React from 'react';
import Card from '../components/Card';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { sortPhotosAscending, sortPhotosDescending } from "../redux/photos";

// sortPhotosAscending
// sortPhotosDescending

class UnconnectedPhotoList extends React.Component {
	static propTypes = {
		photos: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			thumbnailUrl: PropTypes.string.isRequired,
		})).isRequired
	}

	onSort = () => {
		if (this.props.sortDirection === "ASC") {
			this.props.dispatch(sortPhotosDescending())
		} else {
			this.props.dispatch(sortPhotosAscending())
		}
	}

	renderPhoto (photo) {
		return (
			<Card
				key={photo.id}
				url={photo.url}
				title={photo.title}
				thumbnailUrl={photo.thumbnailUrl}
				selection={() => {
					this.props.history.push(`/detail-view/${photo.id}`)
				}}
			/>
		)
	}
	
	render() {
		return(
			<div className="grid-wrapper">
				<button type="button" className="sort-btn" onClick={this.onSort}></button>
				<ul className="photos__main-container">
					{this.props.photos.map((photo) => this.renderPhoto(photo))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		photos: state.photos,
		sortDirection: state.sortDirection
	}
}

const connection = connect(mapStateToProps);
const PhotoList = connection(UnconnectedPhotoList);

export default PhotoList;
