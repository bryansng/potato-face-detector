import React from 'react';

class Rank extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emoji: ''
		}
	}

	generateEmoji = (entries) => {
		fetch(`https://as809t1k41.execute-api.us-east-1.amazonaws.com/prod/rank/?rank=${entries}`)
		.then(res => res.json())
		.then(data => this.setState({ emoji: data.input }))
		.catch(err => console.log('Unable to fetch emoji from AWS Lambda'))
	}

	// the below runs only when it is first mounted (initial render), so it doesn't update again after that initial render.
	componentDidMount() {
		this.generateEmoji(this.props.entries);
	}

	// create life cycle hook, updates if other components cause this to update.
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
			return null;
		}
		this.generateEmoji(this.props.entries);
	}

	render() {
		const { name, entries } = this.props;
		const { emoji } = this.state;
		return (
			<div>
				<div className="white f3">
					{`${name}, your current number of entry is...`}
				</div>
				<div className="white f1">
					{`${entries}`}
				</div>
				<div className="white f3">
					{`Rank Badge: ${emoji}`}
				</div>
			</div>
		)
	}
}

export default Rank;
