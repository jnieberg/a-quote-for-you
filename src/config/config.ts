import { Configuration } from 'src/app/models/configuration';

export const CONFIGURATION: Configuration = {
	api: {
		endpoint: 'https://api.quotable.io/random',
		endpointAuthor: 'https://api.quotable.io/quotes?author=',
		method: 'GET'
	},
	share: [{
		media: 'Facebook',
		uri: 'https://www.facebook.com/sharer/sharer.php?u=github.com%2Fjnieberg&quote=',
	}, {
		media: 'Twitter',
		uri: 'https://twitter.com/intent/tweet?via=jnieberg&text=',
	}],
	localization: {
		title: 'A quote for you:',
		shareOn: 'Share on ',
		nextQuote: 'Next quote',
		error: {
			quote: 'Could not get quote. Please be inspired later.'
		}
	},
	mock: {
		api: {
			endpoint: 'https://api.quotable.io/random',
			method: 'GET'
		},
		quote: {
			_id: 'ABCDE',
			tags: ['tag1', 'tag2'],
			content: 'Use the mock, Luke',
			author: 'Obi Mockanobi',
			length: 123
		},
		share: {
			uri: 'www.yodatalk.com?c=',
			media: 'Facebook'
		}
	}
};
