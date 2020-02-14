import { Configuration } from 'src/app/models/configuration';

export const CONFIGURATION: Configuration = {
	api: {
		endpoint: 'https://api.quotable.io/random',
		endpointAuthor: 'https://api.quotable.io/quotes?author=',
		method: 'GET'
	},
	share: [{
		media: 'Facebook',
		icon: 'facebook-f',
		uri: 'https://www.facebook.com/sharer/sharer.php?u=quoteforyou.netlify.com&quote=',
	}, {
		media: 'Twitter',
		icon: 'twitter',
		uri: 'https://twitter.com/intent/tweet?text=',
	}],
	localization: {
		title: '~ A Quote for You ~',
		shareOn: 'Share on ',
		showMore: 'Show more quotes from ',
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
