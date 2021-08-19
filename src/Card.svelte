<script lang="ts">
  export let text = ''
  export let image = ''
  export let emoji = ''
	
	$: abstract = text.substr(0, 140) + '...'
</script>

<section
  class="w-screen h-screen px-20 py-40 flex flex-col relative select-none bg-gray-900 text-gray-400"
>
	{#if image}
	<img alt="" src={image} class="absolute top-0 left-0 w-full object-cover" style="height: 350px;"/>
	{/if}
	
	<div class="relative text-6xl pb-4" style={image ? 'padding-top: 10rem;' : ''}>
		{emoji}
	</div>
	
	<h2 class="text-4xl">
			Title title TITLE
	</h2>
	
	<p class="leading-loose py-4">
		{abstract}
	</p>		

	<div class="self-end">
		<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/QR_code_desktop_Japanese_Wikipedia.svg/1200px-QR_code_desktop_Japanese_Wikipedia.svg.png" class="w-16 h-16" />
	</div>
</section>
