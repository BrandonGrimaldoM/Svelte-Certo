<script>
	import Button from '../components/Button.svelte';
	import SpecialButton from '../components/SpecialButton.svelte';
	import Swiper from '../components/Swiper.svelte';
</script>

<svelte:head>
	<title>Certo</title>
	<meta
		name="description"
		content="Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and remove threats from your iPhone and Android devices."
	/>
	<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
</svelte:head>

<section class="basic:pl-[192px] pl-5 pt-[134px] min-[1249px]:flex justify-between">
	<article class="min-[1249px]:w-[585px] w-full pb-12">
		<h1 class="pb-[52px]">Your mobile privacy is our mission</h1>
		<p class="pb-[96px]">
			Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and
			remove threats from your iPhone and Android devices.
		</p>
		<div class="flex justify-start sm:gap-[48px] gap-6 max-sm:flex-wrap">
			<Button type="yellow" arrow={true}>Get Certo for iPhone</Button>
			<Button type="white" arrow={false}>Get Certo for Android</Button>
		</div>
	</article>
	<img src="/images/main-section.png" alt="main" class="min-[1249px]:block hidden"/>
</section>

<section class="gradientYellow">
	<h2 class=" py-[83px] basic:px-[96px] px-5">Loved by thousands of iPhone <br /> and Android users alike</h2>

	<Swiper />

	<div class="flex justify-between py-[83px] basic:px-[96px] px-5 max-lg:flex-wrap max-lg:justify-center">
		<h4 class="py-9">Featured in:</h4>
		<div class="flex flex-wrap gap-9 max-lg:justify-center">
			<img src="/images/figure.png" alt="logos" decoding="async" loading="lazy" />
			<img src="/images/figure-2.png" alt="logos" decoding="async" loading="lazy" />
			<img src="/images/figure-3.png" alt="logos" decoding="async" loading="lazy" />
			<img src="/images/figure-4.png" alt="logos" decoding="async" loading="lazy" />
			<img src="/images/figure-5.png" alt="logos" decoding="async" loading="lazy" />
			<img src="/images/figure-6.png" alt="logos" decoding="async" loading="lazy" />
		</div>
	</div>
</section>

<section class="basic:px-[192px] px-5 py-[134px] min-[1249px]:flex justify-between">
	<article class="min-[1249px]:w-[440px] w-full">
		<h2 class="pb-[43px]">At Certo, mobile security is not an afterthought, it’s what we do.</h2>
		<p class="pb-[76px]">
			With years of experience in mobile security and spyware detection, our products have helped
			countless people safeguard their devices and find peace of mind.
		</p>
		<div class="flex min-[1249px]:flex-col justify-start items-start gap-6 max-sm:flex-wrap">
			<Button type="yellow" arrow={true}>Get Certo for iPhone</Button>
			<Button type="white" arrow={false}>Get Certo for Android</Button>
		</div>
	</article>
	<img src="/images/cel.png" alt="cel" class="min-[1249px]:block hidden"/>
</section>

<section class="py-[84px]">
	<h2 class="text-center pb-[72px] max-lg:px-5">Get your freedom back, stop mobile spyware today</h2>
	<div class="lg:w-[840px] w-full p-[72px] my-0 mx-auto rounded-[48px] bg-white shadow-mini">
		<div class="flex max-lg:flex-wrap max-lg:justify-center gap-[48px] flex-wrap">
			<article class="flex flex-col justify-center items-center gap-6 w-[200px] px-[1px]">
				<img src="/images/spy.png" alt="spy-icon" decoding="async" loading="lazy" />
				<h5 class="text-center">Spyware detection</h5>
				<p class="text-base text-center">
					Our advanced spyware detection engine can identify if a device contains spyware or bugging
					software.
				</p>
			</article>

			<article class="flex flex-col justify-center items-center gap-6 w-[200px] px-[1px]">
				<img src="/images/spy2.png" alt="spy-icon" decoding="async" loading="lazy" />
				<h5 class="text-center">Spyware detection</h5>
				<p class="text-base text-center">
					Our advanced spyware detection engine can identify if a device contains spyware or bugging
					software.
				</p>
			</article>

			<article class="flex flex-col justify-center items-center gap-6 w-[200px] px-[1px]">
				<img src="/images/spy3.png" alt="spy-icon" decoding="async" loading="lazy" />
				<h5 class="text-center">Spyware detection</h5>
				<p class="text-base text-center">
					Our advanced spyware detection engine can identify if a device contains spyware or bugging
					software.
				</p>
			</article>

			<article class="flex flex-col justify-center items-center gap-6 w-[200px] px-[1px]">
				<img src="/images/spy4.png" alt="spy-icon" decoding="async" loading="lazy" />
				<h5 class="text-center">Spyware detection</h5>
				<p class="text-base text-center">
					Our advanced spyware detection engine can identify if a device contains spyware or bugging
					software.
				</p>
			</article>

			<article class="flex flex-col justify-center items-center gap-6 w-[200px] px-[1px]">
				<img src="/images/spy5.png" alt="spy-icon" decoding="async" loading="lazy" />
				<h5 class="text-center">Spyware detection</h5>
				<p class="text-base text-center">
					Our advanced spyware detection engine can identify if a device contains spyware or bugging
					software.
				</p>
			</article>

			<article class="flex flex-col justify-center items-center gap-6 w-[200px] px-[1px]">
				<img src="/images/spy6.png" alt="spy-icon" decoding="async" loading="lazy" />
				<h5 class="text-center">Spyware detection</h5>
				<p class="text-base text-center">
					Our advanced spyware detection engine can identify if a device contains spyware or bugging
					software.
				</p>
			</article>
		</div>

		<div class="flex justify-center items-center gap-6 pt-[96px] max-sm:flex-wrap">
			<Button type="yellow" arrow={true}>Get Certo for iPhone</Button>
			<Button type="white" arrow={false}>Get Certo for Android</Button>
		</div>
	</div>
</section>

<section class="py-[84px] p-5">
	<div class="my-0 mx-auto flex justify-center flex-wrap items-center gap-[72px]">
		<article class="rounded-[48px] w-[460px] p-[48px] gradientYellow">
			<h4 class="pb-[25px]">Read our story</h4>
			<p class="text-base pb-[48px]">
				Find out why thousands trust Certo to secure their mobile world.
			</p>
			<Button type="purple" arrow={true}>About us</Button>
		</article>
		<article class="rounded-[48px] w-[460px] p-[48px]">
			<h4 class="pb-[25px]">Help Center</h4>
			<p class="text-base pb-[48px]">Help topics, getting started guides and FAQs.</p>
			<Button type="white" arrow={false}>Visit help center</Button>
		</article>
	</div>
</section>

<section class="gradientBlue py-[84px] max-lg:px-5">
	<article class="my-0 mx-auto flex flex-col justify-center items-center gap-14">
		<h2 class="text-white">Is someone spying on your phone?</h2>
		<p class="text-white">Find out with Certo</p>
		<div class="flex justify-center items-center gap-6 max-sm:flex-wrap">
			<Button type="yellow" arrow={true}>Get Certo for iPhone</Button>
			<Button type="white-dos" arrow={false}>Get Certo for Android</Button>
		</div>
	</article>
</section>

<section class="py-[84px]">
	<h2 class="text-[56px] text-center">Latest insights</h2>
	<div class="flex max-lg:flex-wrap justify-center gap-[48px] my-[72px]">
		<article class="w-[320px] rounded-[40px] overflow-hidden relative">
			<img src="/images/in.png" alt="insights" />
			<div class="p-[48px]">
				<h4>Signs Your Ex Is Spying On You</h4>
				<p class="text-base">
					In an ideal world, after a relationship ends both you and your ex will move on. But what
					if they can’t let go, and start spying on your...
				</p>
			</div>
            <SpecialButton>Expertise</SpecialButton>
		</article>

		<article class="w-[320px] rounded-[40px] overflow-hidden relative">
			<img src="/images/in2.png" alt="insights" />
			<div class="p-[48px]">
				<h4>How to Remove a Hacker from Your Samsung Phone</h4>
				<p class="text-base">
					Samsung is the second most popular manufacturer of smartphones in the world, with a market
					share of 28.19% compared to Apple’s 28.43% as...
				</p>
			</div>
            <SpecialButton>Guides</SpecialButton>
		</article>

		<article class="w-[320px] rounded-[40px] overflow-hidden relative">
			<img src="/images/in3.png" alt="insights" />
			<div class="p-[48px]">
				<h4>Is Your Cell Phone Under Surveillance?</h4>
				<p class="text-base">
					In today’s surveillance state, it can feel like your every move is being watched. Although
					your mind may be conjuring up images of CCTV...
				</p>
			</div>
            <SpecialButton>Expertise</SpecialButton>
		</article>
	</div>
    <div class="flex justify-center">
        <Button type="yellow" arrow={true}>View all insights</Button>
    </div>
</section>
