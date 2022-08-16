import { client } from '$lib/gql/client';
import { layoutQuery } from '$lib/gql/queries';
export async function load() {

    const { layouts } = await client.request(layoutQuery);
    return {
        props: { layout: layouts[0] }
    };
}