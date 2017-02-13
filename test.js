import test from 'ava';
import alfyTest from 'alfy-test';

test('class result', async t => {
	const alfy = alfyTest();
	const result = await alfy('replaysubject');

	t.deepEqual(result, [
		{
			title: 'ReplaySubject',
			subtitle: 'class',
			autocomplete: 'ReplaySubject',
			arg: 'http://reactivex.io/rxjs/class/es6/ReplaySubject.js~ReplaySubject.html',
			quicklookurl: 'http://reactivex.io/rxjs/class/es6/ReplaySubject.js~ReplaySubject.html',
			mods: {
				alt: {
					subtitle: `import { ReplaySubject } from 'rxjs/ReplaySubject';`,
					arg: `import { ReplaySubject } from 'rxjs/ReplaySubject';`
				}
			}
		}
	]);
});

test('operator result', async t => {
	const alfy = alfyTest();
	const result = await alfy('mergeMap');

	t.deepEqual(result, [
		{
			title: 'mergeMap',
			subtitle: 'operator',
			autocomplete: 'mergeMap',
			arg: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMap',
			quicklookurl: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMap',
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
			quicklookurl: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMapTo',
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
			quicklookurl: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-webSocket',
			mods: {
				alt: {
					subtitle: `import 'rxjs/add/observable/dom/webSocket';`,
					arg: `import 'rxjs/add/observable/dom/webSocket';`
				}
			}
		}
	]);
});
