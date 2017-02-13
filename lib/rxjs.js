'use strict';
const path = require('path');
const globby = require('globby');

const root = path.join(__dirname, '../node_modules/rxjs');
const baseUrl = 'http://reactivex.io/rxjs/class/es6';

const getClasses = () => globby('*.js', {cwd: root})
	.then(classes => {
		return classes.map(className => {
			const name = className.replace(/.js$/, '');

			return {
				title: name,
				url: `${baseUrl}/${className}~${name}.html`,
				type: 'class',
				import: `import { ${name} } from 'rxjs/${name}';`
			};
		});
	});

const getOperators = () => globby('**/*.js', {cwd: path.join(root, 'add')})
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
					url: `${baseUrl}/Observable.js~Observable.html#${methodType}-method-${title}`,
					type,
					import: `import 'rxjs/add/${method.replace(/\.js$/, '')}';`
				});
			}
		}

		return ret;
	});

exports.getDocs = () => Promise.all([
	getClasses(),
	getOperators()
]).then(result => Array.prototype.concat.apply([], result));
