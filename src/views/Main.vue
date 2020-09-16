<template>
  <div class="main">
    <b-field label="To-Do's"
            type="is-success"
            message="Add Your To-Do's">
            <b-input type="text" v-model="task"
                maxlength="30">
            </b-input>
        </b-field>
    <b-button type="is-primary" @click="newTodo">Enter To-Do's</b-button>

    <ul>
      <li v-for="todo of todo" v-bind:key="todo.id">{{todo.title}}</li>

    </ul>
  </div>
</template>

<script>


export default {
  name: 'Main',
  data: function(){
    return {
      todo: [],
      task: ''
    }
  },
  created: function (){
    this.getTodo();
  },
  methods: {
    newTodo: function(){
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
    getTodo: function() {
      const {tokens, URL} = this.$route.query;

    fetch(`${URL}/api/todo/`, {
      method: "get",
      headers: {
        authorization: `JWT ${tokens}`,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      this.todo = data;
    });
    }
  }
}
</script>
