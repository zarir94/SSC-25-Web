import type { RequestHandler } from "@sveltejs/kit";


export const GET: RequestHandler = async ({  }) => {
    return new Response('Server is up');
};