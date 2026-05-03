<template>
    <div class="todo-list__item" id="{{ task.id }}">
        <div class="todo-list__item-id">
            ID: {{task.id}}
        </div>
        <div class="todo-list__item-name">
             {{ task.todo }}
        </div>
        <div v-if="task.completed">
            Статус: Задача выполнена
        </div>
        <div v-else>
            Статус: Задача не выполнена
        </div>

    </div>
</template>

<script>
    export default {
        name: 'TodoListItem',
        props: {
            task: {
            task: Object,
            required: true,
            },
        },
    }
</script>

<style lang="scss" scoped>
    .todo-list__item {
        width: 30%;
        padding: 25px;
        border-radius: 25px;
        background: gray;
    }
    .todo-list__item-name {
        font-weight: bold;
        margin-bottom: 25px;
    }
</style>