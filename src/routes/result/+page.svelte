<script lang="ts">
	import { Button, Card, FloatingLabelInput, Select } from 'flowbite-svelte';
  import { CaretRightSolid } from "flowbite-svelte-icons";

  export let data;
  data;
  let selectOptions = [
    {name: 'School: All', value: 'all', selected: true},
    {name: 'School: KDA', value: 'KDA'},
    {name: 'School: Laboratory', value: 'LAB'},
  ]
  $: selectValue = data.school || 'all';
</script>

<svelte:head>
  <title>Result Ranks</title>
</svelte:head>

<div class="flex justify-center pt-3">
  <h3 class="text-2xl text-center font-bold bg-linear-to-r from-amber-400 to-green-400 inline-block text-transparent bg-clip-text">Result Ranks</h3>
</div>

<form class="flex flex-col gap-5 justify-center items-center py-3 max-w-3xl mx-auto">
  <Select class="w-full" items={selectOptions} name="school" bind:value={selectValue}></Select>
  <FloatingLabelInput class="w-full" name="q" value="{data.q || ''}">Search Name or Roll</FloatingLabelInput>
  <Button class="w-36" type="submit" color="emerald">Apply</Button>
</form>

<div class="results flex flex-col gap-3 py-3 max-w-3xl mx-auto">
  {#each data.results as r, i}
    <Card class="py-2 px-4 max-w-full shadow shadow-slate-700 active:scale-75 transition duration-300 ease-out overflow-y-auto" href="/result/{r.roll}">
      <div class="flex gap-2 items-center">
        <span class="pos opacity-50">{i+1}.</span>
        <span class="name bg-linear-to-r from-cyan-500 to-emerald-500 inline-block text-transparent bg-clip-text whitespace-nowrap mr-auto">{r.name}</span>
        {#if data.showSchool}
          <span class="school opacity-70">{r.school}</span>
        {/if}
        <span class="total opacity-90 text-cyan-400">{r.total_marks}</span>
        <span class="gpa opacity-90">{r.gpa.toFixed(2)}</span>
        <CaretRightSolid></CaretRightSolid>
      </div>
    </Card>
  {/each}
</div>


