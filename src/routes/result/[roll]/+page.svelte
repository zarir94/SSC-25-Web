<script lang="ts">
  //@ts-nocheck
	import { Table, TableBody, TableBodyCell, TableBodyRow } from "flowbite-svelte";

  export let data;
  data;
</script>

<svelte:head>
  <title>Individual Result</title>
</svelte:head>

<div class="max-w-3xl mx-auto irp">
  <h2 class="text-xl text-center mb-5 font-bold">Personal Details</h2>
  <Table striped={true} shadow={true}>
    <TableBody>
      <TableBodyRow><TableBodyCell>Roll</TableBodyCell><TableBodyCell>{data.roll}</TableBodyCell></TableBodyRow>
      <TableBodyRow><TableBodyCell>Registration</TableBodyCell><TableBodyCell><a href="/contact" class="text-emerald-400 hover:underline">Contact Me</a></TableBodyCell></TableBodyRow>
      <TableBodyRow><TableBodyCell>Name</TableBodyCell><TableBodyCell>{data.name}</TableBodyCell></TableBodyRow>
      <TableBodyRow><TableBodyCell>Father</TableBodyCell><TableBodyCell>{data.father}</TableBodyCell></TableBodyRow>
      <TableBodyRow><TableBodyCell>Mother</TableBodyCell><TableBodyCell>{data.mother}</TableBodyCell></TableBodyRow>
      <TableBodyRow><TableBodyCell>Group</TableBodyCell><TableBodyCell>{data.group}</TableBodyCell></TableBodyRow>
      <TableBodyRow><TableBodyCell>Year</TableBodyCell><TableBodyCell>{data.year}</TableBodyCell></TableBodyRow>
      <TableBodyRow><TableBodyCell>GPA</TableBodyCell><TableBodyCell>{data.gpa?.toFixed(2)}</TableBodyCell></TableBodyRow>
    </TableBody>
  </Table>

  <h2 class="text-xl text-center py-5 font-bold">Marks</h2>
  <Table striped={true} shadow={true}>
    <TableBody>
      {#each Object.entries(data.marks) as [k, v] }
      <TableBodyRow><TableBodyCell>{k}</TableBodyCell><TableBodyCell>{v}</TableBodyCell></TableBodyRow>
      {/each}
      <TableBodyRow class="total"><TableBodyCell>Total Marks</TableBodyCell><TableBodyCell>{data.total_marks}</TableBodyCell></TableBodyRow>
    </TableBody>
  </Table>

  <h2 class="text-xl text-center py-5 font-bold">Ranking</h2>
  <Table striped={true} shadow={true}>
    <TableBody>
      <TableBodyRow><TableBodyCell>Position in 3 Schools</TableBodyCell><TableBodyCell>{data.rank_all}</TableBodyCell></TableBodyRow>
      <TableBodyRow><TableBodyCell>Position in Laboratory</TableBodyCell><TableBodyCell>{data.rank_lab}</TableBodyCell></TableBodyRow>
      <TableBodyRow><TableBodyCell>Position in KDA</TableBodyCell><TableBodyCell>{data.rank_kda}</TableBodyCell></TableBodyRow>
      <TableBodyRow><TableBodyCell>Position in KUET</TableBodyCell><TableBodyCell>{data.rank_kuet}</TableBodyCell></TableBodyRow>
    </TableBody>
  </Table>
</div>

<style lang="postcss">
  @reference 'tailwindcss';
  .irp :global(td) { @apply text-white/80; }
  .irp :global(.total td) { @apply text-emerald-400; }
</style>