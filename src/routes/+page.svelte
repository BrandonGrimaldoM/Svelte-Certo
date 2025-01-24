<script>
	let isOpen = $state(false);
	const handleMenu = () => {
		isOpen = !isOpen;
	};
</script>

<svelte:head>
	<title>Certo</title>
	<meta
		name="description"
		content="Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and remove threats from your iPhone and Android devices."
	/>
</svelte:head>

<header class="w-full h-[102px] min-[1095px]:px-[120px] lg:px-14 px-6 py-6">
	<nav class="flex max-[864px]:hidden justify-between items-center">
		<img src="/images/logo.png" alt="logo" />
		<ul class="flex items-center gap-12">
			<li><a href="/">iPhone</a></li>
			<li><a href="/">Android</a></li>
			<li><a href="/">Help</a></li>
			<li class="flex items-center gap-[9px]">
				<a href="/">Company</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="13"
					height="8"
					viewBox="0 0 13 8"
					fill="none"
				>
					<g clip-path="url(#clip0_30_8657)">
						<path
							d="M6.04591 5.36L10.5859 0.820005C10.7469 0.660619 10.9643 0.571213 11.1909 0.571213C11.4175 0.571213 11.6349 0.660619 11.7959 0.820005C11.9536 0.983942 12.0416 1.20256 12.0416 1.43C12.0416 1.65745 11.9536 1.87607 11.7959 2.04L6.65591 7.18001C6.49749 7.33276 6.28599 7.41812 6.06591 7.41812C5.84584 7.41812 5.63434 7.33276 5.47591 7.18001L0.295913 2.04C0.215791 1.96093 0.152172 1.86674 0.10875 1.76288C0.0653286 1.65902 0.0429687 1.54757 0.0429688 1.435C0.0429687 1.32244 0.0653286 1.21099 0.10875 1.10713C0.152172 1.00327 0.215791 0.909075 0.295913 0.830005C0.374984 0.749882 0.469182 0.686264 0.573039 0.642842C0.676897 0.59942 0.788344 0.57706 0.900913 0.57706C1.01348 0.57706 1.12493 0.59942 1.22879 0.642842C1.33264 0.686264 1.42684 0.749882 1.50591 0.830005L6.04591 5.36Z"
							fill="black"
						/>
					</g>
					<defs>
						<clipPath id="clip0_30_8657">
							<rect
								width="12"
								height="6.86"
								fill="white"
								transform="translate(0.046875 0.570007)"
							/>
						</clipPath>
					</defs>
				</svg>
			</li>
			<li class="ml-[48px]">
				<a href="/" class="flex py-4 px-5 text-white rounded-[42px] bg-[#4335DE]">Sign in</a>
			</li>
		</ul>
	</nav>

	<nav class="min-[864px]:hidden flex justify-between items-center">
		<img src="/images/logo.png" alt="logo" />
		<button onclick={handleMenu} aria-label="Open menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-10"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
	</nav>

	<div
		class={`w-full h-screen absolute top-0 left-0 z-50 bg-white ${isOpen ? 'block' : 'hidden'} `}
	>
		<div class="w-full h-auto p-6 flex justify-end">
			<button onclick={handleMenu} aria-label="Open menu">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-10"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</button>
		</div>

		<div class="grid place-content-center">
			<ul class="flex flex-col gap-12 pt-36">
				<li><a href="/">iPhone</a></li>
				<li><a href="/">Android</a></li>
				<li><a href="/">Help</a></li>
				<li class="flex items-center gap-[9px]">
					<a href="/">Company</a>
				</li>
				<li>
					<a href="/">Sign in</a>
				</li>
			</ul>
		</div>
	</div>
</header>
