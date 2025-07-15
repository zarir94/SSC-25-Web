<script lang="ts">
  //@ts-nocheck
	import { Button, GradientButton } from "flowbite-svelte";
	import ResultCard from "./resultCard.svelte";
  export let data;
</script>
<svelte:head>
  <title>SSC 25 Hub</title>
</svelte:head>

<div class="py-15 text-center flex flex-col gap-5">
  <div>
    <h3 class="text-2xl font-bold bg-linear-to-r from-emerald-400 via-sky-400 to-yellow-400 inline-block text-transparent bg-clip-text animate-bounce">All your rankings in one place</h3>
  </div>
  <p class="max-w-3xl mx-auto">This site lets you to see individual <b class="text-emerald-400">SSC 25</b> results of <b class="text-emerald-400">KDA, Laboratory & KUET</b> School. Ranking by total marks, you can see your position among your friends!</p>
  <p class="-mt-3">Independent from government restrictions</p>
  <div>
    <Button onclick={()=>{window.scrollBy({top: document.querySelector('.rc').getBoundingClientRect().top - 62, behavior: 'smooth'})}}>View Statistics</Button>
  </div>
</div>

<ResultCard title="All Tops" results={data.allTops} showSchool={true}/>
<ResultCard title="Laboratory Tops" results={data.labTops}/>
<ResultCard title="KDA Tops" results={data.kdaTops}/>
<ResultCard title="KUET Tops" results={data.kuetTops}/>

<ResultCard title="All Bots" results={data.allBottoms} showSchool={true}/>
<ResultCard title="Laboratory Bots" results={data.labBottoms}/>
<ResultCard title="KDA Bots" results={data.kdaBottoms}/>
<!-- <ResultCard title="KUET Bots" results={data.kuetBottoms}/> -->

<div class="flex justify-center -mt-8">
  <GradientButton shadow color="greenToBlue" size="lg" class="mb-8" href="/result">View All Results</GradientButton>
</div>
