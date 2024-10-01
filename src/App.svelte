<script>
  let count = 0;
</script>

<div>
  <button on:click={() => count += 1}>Count: {count}</button>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }
</style>