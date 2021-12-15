<template>
  <div class="home-page">
    <CreateTodo @todo-created="onTodoCreated" />
    <div class="separator"><br /></div>
    <h1>todo list</h1>
    <!-- <pre>
        {{todoList}}
        </pre> -->
    <ul class="todo-list">
      <li
        v-for="todoItem in todoList"
        :key="todoItem.id"
        class="todo-item"
        :class="{ done: todoItem.isCompleted }"
      >
        <div class="title">
          {{ todoItem.title }}
        </div>
        <div class="actions">
          <input
            type="checkbox"
            class="checkbox"
            :checked="todoItem.isCompleted"
            @input="onCheckBoxInput(todoItem.id, todoItem.isCompleted)"
          />
          <!-- v-model="todoItem.isCompleted" -->
          <button>X</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchTodoList, patchTodo } from "@/netClient/todoService";
import CreateTodo from "@/components/CreateTodo";
export default {
  name: "Home",
  components:{
    CreateTodo
  },
  data: () => ({
    todoName: "",
    todoList: [],
  }),
  created() {
    this.fetchTodoList();
  },
  methods: {
    onTodoCreated(createdTodo){
    this.todoList.unshift(createdTodo);
    },

    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },

    async onCheckBoxInput(id, isCompleted) {
      try {
        await patchTodo({ id, isCompleted: !isCompleted });
        this.fetchTodoList(); //todo fix this
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>

<style scoped></style>
