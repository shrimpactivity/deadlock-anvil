<script lang="ts">
    export let text: string;
    export let selected: boolean;
    export let onRemove: () => void;
</script>

<div>
    <input type="checkbox" bind:checked={selected}>
    <p>{text}</p>
    <button on:click|stopPropagation={onRemove}>X</button>
</div>

<style>
    p {
        display: inline;
        padding: 0.5em;
    }
</style>