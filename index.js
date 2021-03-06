'use strict';
const alfy = require('alfy');
const rxjs = require('./lib/rxjs');

rxjs.getDocs()
	.then(methods => {
		const items = alfy
			.inputMatches(methods, 'title')
			.map(method => {
				return {
					title: method.title,
					subtitle: method.type,
					autocomplete: method.title,
					arg: method.url,
					quicklookurl: method.url,
					icon: method.icon
				};
			});

		alfy.output(items);
	});
