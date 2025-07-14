<script lang="ts">
  import { Navbar, NavBrand, GradientButton } from "flowbite-svelte";
  import zarir128 from "$lib/assets/zarir-128x128.jpg";
</script>

<Navbar class="bg-slate-800 shadow fixed top-0 left-0 z-30 max-h-[52px] min-h-max">
  <NavBrand href='/' class="active:scale-75 transition-all duration-300 ease-out">
    <span class="text-2xl whitespace-nowrap font-bold bg-linear-to-r from-pink-500 via-purple-400 to-amber-500 inline-block text-transparent bg-clip-text text-shadow-lg text-shadow-amber-400/10">SSC 25 Hub</span>
  </NavBrand>
  <div class="flex gap-3">
    <GradientButton color="greenToBlue" size="sm" class="-my-1" href="/result">Result</GradientButton>
    <GradientButton pill class="p-0.5 -my-1" color="pinkToOrange" href="/contact">
      <img class="rounded-full w-8 h-8" src="{zarir128}" alt="ZARIR">
    </GradientButton>
  </div>
</Navbar>

<div class="pb-[52px]"></div>



