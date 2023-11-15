<script>
  export let crowded = 0;
</script>

{#if crowded == 0}
  <span style="color: #6c6f85">휴무</span>
{:else if crowded == 1}
  <span style="color: #40a02b">여유</span>
{:else if crowded == 2}
  <span style="color: #df8e1d">보통</span>
{:else if crowded == 3}
  <span style="color: #d20f39">혼잡</span>
{/if}
