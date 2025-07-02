export class NotFoundError extends Error {
	constructor(message: string = 'Not Found', options?: ErrorOptions) {
		super(message, options);
	}
}

export default class Service {}
