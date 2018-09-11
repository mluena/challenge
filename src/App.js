import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhotoList from './pages/PhotoList';
import PhotoDetail from './pages/PhotoDetail';
import { fetchPhotosFulfilled } from "./redux/photos";
import { connect } from "react-redux";
import './App.css';


class UnConnectedApp extends React.Component {
	componentDidMount () {
		fetch ('https://jsonplaceholder.typicode.com/photos')
			.then(response => response.json())
			.then(json => {
				this.props.dispatch(fetchPhotosFulfilled(json))
			});
	}


  render() {
	console.log(this.props.photos)
    return (
		<div className="main-container">
			<Switch>
				<Route exact path='/' component={PhotoList} />
				<Route path='/detail-view/:photoId' render={(props) => <PhotoDetail photos={[]} {...props} />} />
			</Switch>
		</div>
		);
	}
}

const connection = connect(null, null, null, { pure: false })
const App = connection(UnConnectedApp)

export default App;

