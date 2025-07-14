import results from "$lib/results";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({  }) => {
    return {
        kdaTops: results.filter(i => i.school == 'KDA').sort((a, b) => b.total_marks - a.total_marks).slice(0, 15),
        labTops: results.filter(i => i.school == 'LAB').sort((a, b) => b.total_marks - a.total_marks).slice(0, 15),
        allTops: results.sort((a, b) => b.total_marks - a.total_marks).slice(0, 15),
        kdaBottoms: results.filter(i => i.school == 'KDA').sort((a, b) => a.total_marks - b.total_marks).slice(0, 15),
        labBottoms: results.filter(i => i.school == 'LAB').sort((a, b) => a.total_marks - b.total_marks).slice(0, 15),
        allBottoms: results.sort((a, b) => a.total_marks - b.total_marks).slice(0, 15),
    }
};