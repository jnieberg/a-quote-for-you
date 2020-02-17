import { ConfigurationApi } from './configuration-api';
import { Share } from './share';

export abstract class Configuration {
	public app: {
		url: string;
	};
	public api: ConfigurationApi;
	public share: Share[];
	public localization: any;
	public mock: any;
}
