
<script lang="ts">
  import zarir from "$lib/assets/zarir.jpg";
</script>
<svelte:head>
  <title>Contact Me</title>
</svelte:head>

<div class="flex justify-center items-center py-3">
  <div class="rounded-full w-32 h-32 relative pointer-events-none" style='background: url("{zarir}") center center / contain no-repeat;'>
    <div class="absolute top-0 left-0 inset-0 z-10 w-full h-full pointer-events-none"></div>
  </div>
</div>

<div class="flex justify-center pt-3">
  <h3 class="text-2xl text-center font-bold bg-linear-to-r from-amber-400 to-green-400 inline-block text-transparent bg-clip-text">Contact Me</h3>
</div>

<div class="py-6 mb-8 max-w-3xl mx-auto">
  <p class="mb-4 leading-relaxed">
    Hey there! I'm <strong>S M Shahriar Zarir</strong> — just like many of you, I was an SSC 2025 candidate too. 
  </p>
  <p class="mb-4 leading-relaxed">
    This site started as a small fun project to surprise my friends by viewing our results and see who ranked where. 
    But over time, more people showed interest — and that inspired me to turn it into a public platform for everyone.
  </p>
  <p class="mb-4 leading-relaxed">
    Thanks for using the site. If you’d like to reach out or just say hi, feel free to contact me below!
  </p>

  <div class="mt-6">
    <p class="mb-2">
      📱 <strong>Phone:</strong> 
      <a href="tel:+8801932376372" class="bg-linear-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text border-b hover:border-emerald-500">+8801932376372</a>
    </p>
    <p>
      💬 <strong>Facebook:</strong> 
      <a href="https://facebook.com/zarir.94" target="_blank" class="bg-linear-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text border-b hover:border-emerald-500">
        fb.com/zarir.94
      </a>
    </p>
  </div>
</div>

