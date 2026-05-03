<template>
    <div class="container">
      <div class="todo-list">
         <TodoListItem 
            v-for="task in todos"
            :key="task.id"
            :task="task"
         />
      </div>
    </div>
</template>

<script>
    export default {
    name: 'TodoList',
    data() {
        return {
            todos: [],
        }
    },
    async mounted() {
      this.response = await this.$api.todo.getToDo();
      this.todos = this.response.todos;
    },
    }
</script>

<style lang="scss" scoped>
    .todo-list {
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
</style>