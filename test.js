import test from 'ava';
import alfyTest from 'alfy-test';

test('result', async t => {
	const alfy = alfyTest();
	const result = await alfy('mergeMap');

	t.deepEqual(result, [
		{
			title: 'mergeMap',
			subtitle: 'operator',
			autocomplete: 'mergeMap',
			arg: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMap',
			quiclookurl: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMap',
			mods: {
				alt: {
					subtitle: `import 'rxjs/add/operator/mergeMap';`,
					arg: `import 'rxjs/add/operator/mergeMap';`
				}
			}
		},
		{
			title: 'mergeMapTo',
			subtitle: 'operator',
			autocomplete: 'mergeMapTo',
			arg: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMapTo',
			quiclookurl: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMapTo',
			mods: {
				alt: {
					subtitle: `import 'rxjs/add/operator/mergeMapTo';`,
					arg: `import 'rxjs/add/operator/mergeMapTo';`
				}
			}
		}
	]);
});

test('dom result', async t => {
	const alfy = alfyTest();
	const result = await alfy('websocket');

	t.deepEqual(result, [
		{
			title: 'webSocket',
			subtitle: 'observable',
			autocomplete: 'webSocket',
			arg: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-webSocket',
			quiclookurl: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-webSocket',
			mods: {
				alt: {
					subtitle: `import 'rxjs/add/observable/dom/webSocket';`,
					arg: `import 'rxjs/add/observable/dom/webSocket';`
				}
			}
		}
	]);
});
