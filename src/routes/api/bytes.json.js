import { DefaultClient } from '$lib/client/default';
import { bytes } from '$lib/client/client';

export const get = async () => {
	try {
		const res = await DefaultClient.bytes.List({ offset: 0, limit: 20 });
		const { bytes } = res;

		return {
			status: 200,
			body: {
				bytes
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: `Could not fetch bytes. ${error}`
			}
		};
	}
};
