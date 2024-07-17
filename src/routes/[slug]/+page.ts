import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';

export const load = (async ({ url }) => {
	const { pathname } = url;
	const res = await client.request(
		readItems('shcoc_page', {
			filter: {
				slug: {
					_eq: pathname
				}
			},
			fields: ['*', { blocks: ['collection', { item: ['*', 'logos.*'] }] }]
		})
	);
	if (!res || res.length < 1)
		throw error(404, {
			message: `No page was found to match the following slug:  [ ${pathname} ]`
		});
	const page = res[0];
	return {
		page
	};
}) satisfies PageLoad;
