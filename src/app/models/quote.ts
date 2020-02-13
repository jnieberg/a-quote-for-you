export abstract class Quote {
	public '_id'?: string;
	public tags?: string[];
	public content: string;
	public author: string;
	public length?: number;
}
