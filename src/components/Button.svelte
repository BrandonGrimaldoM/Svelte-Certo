<script lang="ts"> 
	let { children, type , arrow }: { children: any, type: 'yellow' | 'white' | 'purple' | 'white-dos' , arrow: boolean} = $props();
</script>

<button class={`${type === 'yellow' ? 'b-yellow' : type === 'white' ? "b-white" : type === 'purple' ? "b-purple" : type === 'white-dos' ? "b-white-dos" : null }  `}>
	{@render children()}
    
	<svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none" class={`${arrow ? "block" : "hidden"}`}>
		<g clip-path="url(#clip0_30_8447)">
			<path
				d="M13.4068 0.74429C13.2376 0.916354 13.1428 1.14799 13.1428 1.38929C13.1428 1.63059 13.2376 1.86223 13.4068 2.03429L17.6568 6.31429H1.5568C1.42861 6.30087 1.29902 6.31454 1.17645 6.35441C1.05387 6.39428 0.941044 6.45946 0.845274 6.54572C0.749503 6.63199 0.672929 6.73742 0.620515 6.85518C0.568101 6.97294 0.541016 7.10039 0.541016 7.22929C0.541016 7.35819 0.568101 7.48564 0.620515 7.6034C0.672929 7.72116 0.749503 7.82659 0.845274 7.91286C0.941044 7.99912 1.05387 8.0643 1.17645 8.10417C1.29902 8.14404 1.42861 8.15771 1.5568 8.14429H17.6568L13.3968 12.4843C13.23 12.6576 13.1368 12.8888 13.1368 13.1293C13.1368 13.3698 13.23 13.601 13.3968 13.7743C13.4795 13.8571 13.5777 13.9229 13.6858 13.9677C13.7939 14.0126 13.9098 14.0356 14.0268 14.0356C14.1438 14.0356 14.2597 14.0126 14.3678 13.9677C14.4759 13.9229 14.5741 13.8571 14.6568 13.7743L20.3968 7.88429C20.4748 7.79807 20.5389 7.70023 20.5868 7.59429C20.6349 7.48399 20.6588 7.36462 20.6568 7.24429C20.6577 7.12575 20.6353 7.00818 20.5907 6.89835C20.546 6.78852 20.4802 6.68859 20.3968 6.60429L14.6568 0.76429C14.4982 0.601964 14.2835 0.506379 14.0567 0.497085C13.8299 0.487791 13.6082 0.56549 13.4368 0.71429L13.4068 0.74429Z"
				fill={`${type === 'purple' ? "white" : "black"}`}
			/>
		</g>
		<defs>
			<clipPath id="clip0_30_8447">
				<rect width="20" height="13.5" fill="white" transform="translate(0.65625 0.484375)" />
			</clipPath>
		</defs>
	</svg>
</button>

<style>
	.b-yellow {
		color: #02033b;
		font-size: 19px;
		font-style: normal;
		font-weight: 800;
		line-height: 22.5px;
		display: flex;
		padding: 16px 20px 16px 20px;
		align-items: center;
		border-radius: 42px;
		background: #ffc247;
		gap: 16px;
	}

	.b-white {
		color: #02033b;
		font-size: 19px;
		font-style: normal;
		font-weight: 800;
		line-height: 22.5px;
		display: flex;
		padding: 16px 20px 16px 20px;
		align-items: center;
		border-radius: 42px;
		background: rgba(255, 255, 255, 0);
		box-shadow: 0px 0px 0px 2px #02033b inset;
        gap: 16px;
	}

	.b-white-dos {
		color: white;
		font-size: 19px;
		font-style: normal;
		font-weight: 800;
		line-height: 22.5px;
		display: flex;
		padding: 16px 20px 16px 20px;
		align-items: center;
		border-radius: 42px;
		background: rgba(255, 255, 255, 0);
		box-shadow: 0px 0px 0px 2px #ffffff inset;
        gap: 16px;
	}

	.b-purple {
		color: white;
		font-size: 19px;
		font-style: normal;
		font-weight: 800;
		line-height: 22.5px;
		display: flex;
		padding: 16px 20px 16px 20px;
		align-items: center;
		border-radius: 42px;
		background: #4335DE;
        gap: 16px;
	}
</style>
