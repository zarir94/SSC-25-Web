//@ts-nocheck
import results from "$lib/results";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ params }) => {
    let roll = parseInt(params.roll);
    let result = results.find(i=>i.roll==roll);
    if(!result) error(404);
    
    let all_marks = [...results.map(i=>i.total_marks), result.total_marks].sort((a,b)=>b-a);
    let kda_marks = [...results.filter(i=>i.school == 'KDA').map(i=>i.total_marks), result.total_marks].sort((a,b)=>b-a);
    let lab_marks = [...results.filter(i=>i.school == 'LAB').map(i=>i.total_marks), result.total_marks].sort((a,b)=>b-a);
    
    result.rank_all = all_marks.indexOf(result.total_marks) + 1;
    result.rank_kda = kda_marks.indexOf(result.total_marks) + 1;
    result.rank_lab = lab_marks.indexOf(result.total_marks) + 1;
    
    return result;
};