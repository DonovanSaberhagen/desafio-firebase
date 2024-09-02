<template>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="deleteUser(user.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
    import { mapState, mapActions } from "vuex";
  
    export default {
    name: "UserListComp",
    computed: {
      ...mapState(["users"]),
    },
    methods: {
      ...mapActions(["getUsers", "deleteUser"]),
    },
    mounted() {
      this.getUsers();
    },
  };
  
  </script>
  
  <style scoped>

.table {
    width: 800px;
}

  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #a1dff8;
  }
  
  button {
    background-color: #1d149e;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
  }
  
  button:hover {
    background-color: #f10a0a;
  }
  </style>
