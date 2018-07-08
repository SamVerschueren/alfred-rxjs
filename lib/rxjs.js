'use strict';
const alfy = require('alfy');
const constants = require('./constants');

const getIcon = item => {
	if (!constants.TYPES.has(item.docType)) {
		return;
	}

	const moderator = item.stability === 'deprecated' ? '-deprecated' : '';

	return {
		path: `./icons/${item.docType}${moderator}.png`
	};
};

const mapItem = (item, type) => ({
	title: item.title,
	url: `${constants.BASE_URL}/${item.path}`,
	type: item.stability ? `${type} - ${item.stability}` : type,
	icon: getIcon(item)
});

exports.getDocs = () => alfy
	.fetch(`${constants.BASE_URL}/generated/docs/api/api-list.json`, {
		maxAge: constants.ONE_DAY,
		transform: ([index, operators]) => {
			return [
				...index.items.map(item => mapItem(item, 'Observable')),
				...operators.items.map(item => mapItem(item, 'operator'))
			];
		}
	});
