<script lang="ts">
  import TailwindCSS from './TailwindCSS.svelte'
	import Carousel from 'svelte-carousel'
	import Card from './Card.svelte'

	const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	
	let list = [
		{
      title: 'Title1 title TITLE',
			text: lipsum,
			color: '#85d78b',
			image: 'https://live.staticflickr.com/4358/36106906420_38e7124a19_b.jpg',
			emoji: '🧐',
      qr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/QR_code_desktop_Japanese_Wikipedia.svg/1200px-QR_code_desktop_Japanese_Wikipedia.svg.png',
		},
		{
      title: 'Title2 title TITLE',
			text: lipsum,
			color: '#71d077',
			emoji: '👶',
      qr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/QR_code_desktop_Japanese_Wikipedia.svg/1200px-QR_code_desktop_Japanese_Wikipedia.svg.png',
		},
		{
      title: '',
			text: lipsum,
			color: '#5dca64',
      video: 'https://www.youtube.com/watch?v=4hdKXr8wGrk',
			image: 'https://live.staticflickr.com/65535/51354839188_424b558cd6_b.jpg',
			emoji: '👑',
      qr: '',
		},
		{
      title: 'Title4 title TITLE',
			text: '',
			color: '#49c351',
			emoji: '',
      qr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/QR_code_desktop_Japanese_Wikipedia.svg/1200px-QR_code_desktop_Japanese_Wikipedia.svg.png',
		},
		{
      title: 'Title5 title TITLE',
			text: lipsum,
			color: '#35bd3e',
			emoji: '🏅',
      qr: '',
		},
	]
</script>

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >
</svelte:head>

<TailwindCSS />
<Carousel
	arrows={false}
	dots={false}
  autoplay
  autoplayDuration={10000}
>
	{#each list as item}
		<Card {...item}/>
	{/each}
</Carousel>

