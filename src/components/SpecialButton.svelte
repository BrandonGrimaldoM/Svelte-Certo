<script lang="ts">
	let { children } = $props();
</script>

<button class="b-absolute">
	{@render children()}
</button>

<style>
	.b-absolute {
		display: flex;
		padding: 12px 20.406px 12px 20px;
		align-items: flex-start;
		position: absolute;
		left: 24px;

		top: 24px;
		border-radius: 48px;
		background: #f3f8ff;
		color: #02033b;

		font-family: Inter;
		font-size: 15px;
		font-style: normal;
		font-weight: 800;
		line-height: 20px;
	}
</style>
