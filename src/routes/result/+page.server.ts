//@ts-nocheck
import results from "$lib/results";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ url }) => {
    let { school = '', q = '' } = Object.fromEntries(url.searchParams.entries());
    if (school == 'all') school = '';
    return {
        showSchool: school == '',
        school,
        q,
        results: results
            .sort((a, b)=>(b.total_marks - a.total_marks))
            .filter(i => i.school.indexOf(school.toUpperCase())!=-1)
            .filter(i => i.name.indexOf(q.toUpperCase())!=-1 || String(i.roll).indexOf(q.toUpperCase())!=-1)
    }
};
