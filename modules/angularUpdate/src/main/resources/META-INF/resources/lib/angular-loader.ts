import 'zone.js/dist/zone';

declare var Liferay: any;

export default function(rootId: string) {
	Liferay.Loader.require(
		'angularUpdate@1.0.0/lib/main',
		(main: any) => {
			main.default(rootId);
		},
	);
}