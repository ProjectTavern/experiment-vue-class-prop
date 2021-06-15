<template>
  <div class="container">
    <Todo :todo="todo" />
  </div>
</template>

<script>
import Todo from '@/components/Todo';
import { TodoItem } from '@/classes';

export default {
  components: {
    Todo,
  },
  data() {
    return {
      todo: null,
    }
  },
  created() {
    this.todo = new TodoItem();
  }
}
</script>
