<template>
  <div>
   RESULT COMPONENT : {{ this.computedTodoTitle }}
  </div>
</template>

<script>
import { TodoItem } from '@/classes';

export default {
    props: {
        todo: {
            type: TodoItem,
            require: true,
            default: () => ({
                title: 'EMPTY',
            })
        }
    },
    data() {
        return {
            todoTitle: ''
        }
    },
    computed: {
        computedTodoTitle() {
            console.log('changed Todo Title');
            return this.todo.title;
        }
    },
    watch: {
        todo: {
            deep: true,
            handler() {
                console.log('Property Changed', this.todo);
            }
        }
    },
    methods: {
        changeTitle() {
            this.todo.changeTitle(this.todoTitle);
        }
    }
}
</script>