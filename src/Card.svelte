<script lang="ts">
  export let title = ''
  export let text = ''
  export let video = ''
  export let image = ''
  export let emoji = ''
  export let qr = ''
	
	$: abstract = text ? text.substr(0, 140) + '...' : ''
  $: youtube = video.split('?v=').length > 1 ? 'https://www.youtube.com/embed/' + video.split('?v=')[1] + '?autoplay=1&mute=1&playsinline=1&loop=1&playlist=' + video.split('?v=')[1] : ''
</script>

<section
  class="w-screen h-screen flex justify-center select-none bg-theme-gray text-white"
>
  {#if video}
  <div class="flex-1 shadow-2xl">
    <iframe class="w-full h-full" src={youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
	{:else if image}
  <div class="flex-1 shadow-2xl">
    <img alt="" src={image} class="h-full object-cover" />
  </div>
	{/if}

  <div class="flex-1 flex flex-col justify-center pb-8" style="max-width: 1280px;">
    <div class="px-32 flex flex-col">
      <div class="relative text-8xl pb-8">
        {emoji}
      </div>
      
      <div>
        {#if title}
        <h2 class="text-5xl pb-4">
          {title}
        </h2>
        {/if}
        
        {#if text}
        <p class="leading-loose text-2xl pt-12 pb-4">
          {abstract}
        </p>	
        {/if}	
      </div>

      {#if qr}
      <div class="self-end">
        <img alt="" src="{qr}" class="w-16 h-16 rounded" />
      </div>
      {/if}
    </div>
  </div>
</section>
