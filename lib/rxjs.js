'use strict';
const path = require('path');
const globby = require('globby');

exports.getDocs = () => globby('**/*.js', {cwd: path.join(__dirname, '../node_modules/rxjs/add')})
	.then(methods => {
		const ret = [];

		for (const method of methods) {
			const match = method.match(/(observable|operator)\/(?:dom\/)?(.*?)\.js/);

			if (match) {
				const type = match[1];
				const title = match[2];

				const methodType = type === 'observable' ? 'static' : 'instance';

				ret.push({
					title,
					url: `http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#${methodType}-method-${title}`,
					type,
					import: `import 'rxjs/add/${method.replace(/\.js$/, '')}';`
				});
			}
		}

		return ret;
	});
