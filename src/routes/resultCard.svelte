<script lang="ts">
	import { Card } from "flowbite-svelte";

  export let title;
  export let results;
  export let showSchool = false;
  export let classes = 'mb-16';
</script>

<Card class="rc p-4 mx-auto max-w-3xl shadow shadow-slate-800 {classes}">
  <div class="flex justify-center">
    <h5 class="text-2xl font-bold mb-3 inline-block bg-linear-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
      {title}
    </h5>
  </div>
  <div class="relative overflow-y-auto">
    <table class="w-full">
      <tbody>
        {#each results as r, i}
        <tr>
          <td class="pos opacity-50">{i+1}.</td>
          <td class="name bg-linear-to-r from-cyan-500 to-emerald-500 inline-block text-transparent bg-clip-text whitespace-nowrap">
            {r.name}
          </td>
          {#if showSchool}
          <td class="school opacity-70 px-1">{r.school}</td>
          {/if}
          <td class="total opacity-90 text-cyan-600">{r.total_marks}</td>
          <td class="gpa opacity-90 text-white">{r.gpa.toFixed(2)}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>
</Card>

<style lang="postcss">
  @reference 'tailwindcss';
  @media screen and (max-width: 570px) {
    .gpa { display: none; }
  }
  td.total, td.gpa { @apply px-1; }
  td.name { @apply pr-3; }
  /* td { width: 100%; } */
</style>