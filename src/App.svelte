<script lang="ts">
  import TailwindCSS from './TailwindCSS.svelte'
  import { onMount } from 'svelte'
  import { Autoplay } from 'swiper'
	import { Swiper, SwiperSlide } from 'swiper/svelte'
  import YouTubePlayer from 'youtube-player'
	import Card from './Card.svelte'

  import 'swiper/css'
  import 'swiper/css/autoplay'

  /* "swiper" event emitted with "swiper" instance argument */
  const onSwiper = (e) => {
    const [swiper] = e.detail;
    console.log(swiper);

    const interval = 3000

    setInterval(() => {
      swiper.slideNext(500)
    }, interval)
  }

  const onTransitionStart = (e) => {
    list.forEach((item) => {
      if (item.player) {
        item.player.stopVideo()
        item.player.playVideo()
      }
    })
  }

  let isFullscreen = false

  const launchOnFullscreen = () => {
    if( document.body.requestFullscreen ) {
      document.body.requestFullscreen();
    } else if( document.body.webkitEnterFullscreen ) {
      document.body.webkitEnterFullscreen();
    } else if( document.body.mozRequestFullScreen ) {
      document.body.mozRequestFullScreen();
    } else if( document.body.webkitRequestFullscreen ) {
      document.body.webkitRequestFullscreen();
    } else if( document.body.msRequestFullscreen ) {
      document.body.msRequestFullscreen();
		}			
    isFullscreen = true
  }

	const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	
	let list = [
		{
      title: 'Title1 title TITLE',
			text: lipsum,
			image: 'https://live.staticflickr.com/4358/36106906420_38e7124a19_b.jpg',
			emoji: '🧐',
      qr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/QR_code_desktop_Japanese_Wikipedia.svg/1200px-QR_code_desktop_Japanese_Wikipedia.svg.png',
      player: null,
		},
		{
      title: 'Title2 title TITLE',
			text: lipsum,
			emoji: '👶',
      qr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/QR_code_desktop_Japanese_Wikipedia.svg/1200px-QR_code_desktop_Japanese_Wikipedia.svg.png',
      player: null,
    },
		{
      title: '',
			text: lipsum,
      video: '4hdKXr8wGrk',
			image: 'https://live.staticflickr.com/65535/51354839188_424b558cd6_b.jpg',
			emoji: '👑',
      qr: '',
      player: null,
		},
		{
      title: 'Title4 title TITLE',
			text: '',
			emoji: '',
      qr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/QR_code_desktop_Japanese_Wikipedia.svg/1200px-QR_code_desktop_Japanese_Wikipedia.svg.png',
      player: null,
    },
		{
      title: 'Title5 title TITLE',
			text: lipsum,
			emoji: '🏅',
      qr: '',
      player: null,
    },
	]

  const options = {
    //  see https://developers.google.com/youtube/player_parameters
    playerVars: {
      mute: 1,
    }
  }

  onMount(() => {
    list.forEach((item) => {
      if (item.video) {
        item.player = YouTubePlayer(item.video, options)
        item.player.loadVideoById(item.video)
      }
    })
  })
</script>

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >
</svelte:head>

<TailwindCSS />
<div class="relative">
  <Swiper
    modules={[Autoplay]}
    slidesPerView={1}
    loop
    on:swiper={onSwiper}
    on:transitionStart={onTransitionStart}
  >
    {#each list as item}
      <SwiperSlide>
        {#if item.video}
          <div id={item.video} class="w-full h-screen"></div>
        {:else}
          <Card {...item}/>
        {/if}
      </SwiperSlide>
    {/each}
  </Swiper>

  {#if !isFullscreen}
    <button on:click={launchOnFullscreen} class="absolute bottom-0 right-0 z-10 bg-white p-2">
      全画面表示
    </button>
  {/if}
</div>