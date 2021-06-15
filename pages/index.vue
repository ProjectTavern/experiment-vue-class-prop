<template>
  <div class="container">
    <Todo :todo="todo" />
    <Result :todo="todo" />
  </div>
</template>

<script>
import Todo from '@/components/Todo';
import Result from '@/components/Result';
import { TodoItem } from '@/classes';

export default {
  components: {
    Todo,
    Result,
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
