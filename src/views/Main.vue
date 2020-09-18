<template>
  <div class="main">
    <b-field label="Task's"
            type="is-success"
            message="Add Your To-Do's">
            <b-input type="text" v-model="task">
            </b-input>
        </b-field>
    <b-button type="is-primary" @click="newTodo">Enter To-Do's</b-button>


    <b-field label="Edit Task"
            type="is-success"
            message="Edit Your To-Do's">
            <b-input type="text" v-model="edittask">
            </b-input>
        </b-field>
    <b-button type="is-primary"
              @click="editTodo" v-bind:id="editid">Edit To-Do</b-button>

    <ul>
      <li v-for="todo of todos" v-bind:key="todo.id">
        <b-message title="Current Task's To-Do" aria-close-label="Close message">
        {{todo.task}}
          <button v-bind:id="todo.id"
                  class="button is-danger is-outlined"
                  @click="deleteTodo">Delete</button>

        <button v-bind:id="todo.id"
                class="button is-success is-outlined"
                @click="() => {editSelect(todo.id, todo.task)}">Edit</button>
          </b-message>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'Main',
  data: function(){
    return {
      todos: [],
      task: '',
      edittask: '',
      editid: null
    };
  },
  created: function (){
    this.getTodo();
  },
  methods: {
    newTodo: function () {
      const {tokens, URL} = this.$route.query;

      fetch(`${URL}/api/todo/`, {
        method: "post",
        headers: {
          authorization: `JWT ${tokens}`,
          'Content-Type': "application/json",
        },
        body: JSON.stringify({task: this.task}),
      }).then(() => {
        this.getTodo();
      });
    },
    getTodo: function () {
      const {tokens, URL} = this.$route.query;

      fetch(`${URL}/api/todo/`, {
        method: "get",
        headers: {
          authorization: `JWT ${tokens}`,
        },
      })
          .then((response) => response.json())
          .then((data) => {
            this.todos = data;
          });
    },
    deleteTodo: function (event) {
      const {tokens, URL} = this.$route.query;
      const id = event.target.id
      console.log(id)

      fetch(`${URL}/api/todo/${id}`, {
        method: "delete",
        headers: {
          authorization: `JWT ${tokens}`,
        },
      })
          .then(() => {
            this.getTodo();
          });
    },
    editSelect: function (id, content) {
      this.editid = id
      this.edittask = content
    },
    editTodo: function () {
      const {tokens, URL} = this.$route.query;
      const id = this.editid;

      fetch(`${URL}/api/todo/${id}/`, {
        method: "put",
        headers: {
          authorization: `JWT ${tokens}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({task: this.edittask})
      }).then(() => {
        this.getTodo();
      });
    }
  },
};
</script>

<style>
div.main {
  width: 70%;
  min-width: 300px;
  margin: 10px auto 200px auto;
}
</style>
