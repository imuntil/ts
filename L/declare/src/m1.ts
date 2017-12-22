export class Cat {
	public n: number;
	constructor (n: number) { this.n = n };
	readonly age: number;
	purr (): void {
		console.log('lala');
	}
}
export interface CatSettings {
	weight: number;
	name: string;
	tailLength?: number;
}