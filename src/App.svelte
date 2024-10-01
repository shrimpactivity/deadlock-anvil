<script>
    import TodoItem from "./lib/TodoItem.svelte";

  function onRemove() {
    alert("removed");
  }
</script>

<div>
  <TodoItem text="hi there" onRemove={onRemove} />
</div>