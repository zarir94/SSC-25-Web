

const modules = import.meta.glob('./results/*.json', { eager: true });

export type Result = {
	roll: number;
	name: string;
	father: string;
	mother: string;
	group: string;
	year: number;
	gpa: number;
	marks: Record<string, number>;
	total_marks: number;
	school: string;
};

let results: Result[] = [];

for (const path in modules) {
    const data = (modules[path] as any).default;
	if (Array.isArray(data)) {
		const filename = path.split('/').pop()?.split('\\')?.pop() || '';
		const school = filename.split('_')[0].toUpperCase();
		const updatedData = data.map((item: any) => ({ ...item, school }));
		results = results.concat(updatedData);
	}
}

results = results.map(i=>({roll: i.roll, name: i.name, father: i.father, mother: i.mother, group: i.group, year: i.year, gpa: i.gpa, marks: i.marks, total_marks: i.total_marks, school: i.school}));

export default results;

