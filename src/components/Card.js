import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		selection: PropTypes.func.isRequired,
		thumbnailUrl: PropTypes.string.isRequired,
	}
	render() {
		return(
			<li className="card__container" onClick={this.props.selection}>
			    <div style={{backgroundImage:`url(${this.props.url})`}} className="card">
					<h2 className="img-title">{this.props.title}</h2>
					<img className="thumbnail-img" alt="thumbnail" src={this.props.thumbnailUrl}/>
				</div>
			</li>
		);
	}
}

export default Card;

