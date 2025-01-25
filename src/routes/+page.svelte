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

<section class="pl-[192px] pt-[134px] flex justify-between">
	<article class="w-[585px]">
		<h1 class="pb-[52px]">Your mobile privacy is our mission</h1>
		<p class="pb-[96px]">
			Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and
			remove threats from your iPhone and Android devices.
		</p>
		<div class="flex justify-start gap-[48px]">
			<Button type="yellow" arrow={true}>Get Certo for iPhone</Button>
			<Button type="white" arrow={false}>Get Certo for Android</Button>
		</div>
	</article>
	<img src="/images/main-section.png" alt="main" />
</section>

<section class="gradientYellow">
	<h2 class=" py-[83px] px-[96px]">Loved by thousands of iPhone <br /> and Android users alike</h2>

	<Swiper />

	<div class="flex justify-between py-[83px] px-[96px]">
		<h4 class="pt-9">Featured in:</h4>
		<div class="flex gap-9">
			<img src="/images/figure.png" alt="logos" decoding="async" loading="lazy" />
			<img src="/images/figure-2.png" alt="logos" decoding="async" loading="lazy" />
			<img src="/images/figure-3.png" alt="logos" decoding="async" loading="lazy" />
			<img src="/images/figure-4.png" alt="logos" decoding="async" loading="lazy" />
			<img src="/images/figure-5.png" alt="logos" decoding="async" loading="lazy" />
			<img src="/images/figure-6.png" alt="logos" decoding="async" loading="lazy" />
		</div>
	</div>
</section>

<section class="px-[192px] py-[134px] flex justify-between">
	<article class="w-[440px]">
		<h2 class="pb-[43px]">At Certo, mobile security is not an afterthought, it’s what we do.</h2>
		<p class="pb-[76px]">
			With years of experience in mobile security and spyware detection, our products have helped
			countless people safeguard their devices and find peace of mind.
		</p>
		<div class="flex flex-col justify-start items-start gap-6">
			<Button type="yellow" arrow={true}>Get Certo for iPhone</Button>
			<Button type="white" arrow={false}>Get Certo for Android</Button>
		</div>
	</article>
	<img src="/images/cel.png" alt="cel" />
</section>

<section class="py-[84px]">
	<h2 class="text-center pb-[72px]">Get your freedom back, stop mobile spyware today</h2>
	<div class="w-[840px] p-[72px] my-0 mx-auto rounded-[48px] bg-white shadow-mini">
		<div class="flex gap-[48px] flex-wrap">
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

		<div class="flex justify-center items-center gap-6 pt-[96px]">
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

<section class="gradientBlue py-[84px]">
	<article class="my-0 mx-auto flex flex-col justify-center items-center gap-14">
		<h2 class="text-white">Is someone spying on your phone?</h2>
		<p class="text-white">Find out with Certo</p>
		<div class="flex justify-center items-center gap-6">
			<Button type="yellow" arrow={true}>Get Certo for iPhone</Button>
			<Button type="white-dos" arrow={false}>Get Certo for Android</Button>
		</div>
	</article>
</section>

<section class="py-[84px]">
	<h2 class="text-[56px] text-center">Latest insights</h2>
	<div class="flex justify-center gap-[48px] my-[72px]">
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
