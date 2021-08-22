<script lang="ts">
  export let title = ''
  export let text = ''
  export let image = ''
  export let emoji = ''
  export let qr = ''
	
	$: abstract = text ? text.substr(0, 140) + '...' : ''
</script>

<section
  class="w-screen h-screen flex justify-center select-none bg-gray-900 text-gray-300"
>
	{#if image}
  <div class="flex-1">
    <img alt="" src={image} class="h-full object-cover" />
  </div>
	{/if}

  <div class="flex-1 flex flex-col justify-center" style="max-width: 976px;">
    <div class="px-32 flex flex-col">
      <div class="relative text-6xl pb-4">
        {emoji}
      </div>
      
      <div>
        {#if title}
        <h2 class="text-4xl pb-4">
          {title}
        </h2>
        {/if}
        
        {#if text}
        <p class="leading-loose py-4">
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
