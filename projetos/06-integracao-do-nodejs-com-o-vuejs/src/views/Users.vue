<template>
  <div id="divUsers">
    <h1 class="title is-1">Usuários</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Cargo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role | formatRole }}</td>
          <td>
            <router-link :to="{ name: 'UserEdit', params: { id: user.id } }">
              <button class="button is-warning">Editar</button>
            </router-link>
            <button class="button is-danger ml-3" @click="showModal(user.id)">
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div :class="{ modal: true, 'is-active': isShowDeleteModal }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Atenção</p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="card-content">
            <div class="content">Deseja realmente deletar o usuário?</div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item" @click="deleteUser">OK</a>
            <a href="#" class="card-footer-item" @click="hiddenModal">Cancel</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: null,
      isShowDeleteModal: false,
      deleteUserID: null,
    };
  },
  created: function () {
    axios
      .get("http://localhost:4000/user", this.getAuthorization())
      .then((res) => {
        this.users = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  filters: {
    formatRole(value) {
      if (value == 1) {
        return "Administrador(a)";
      }
      return "Usuário(a)";
    },
  },
  methods: {
    hiddenModal: function () {
      this.isShowDeleteModal = false;
    },
    showModal: function (id) {
      this.deleteUserID = id;
      this.isShowDeleteModal = true;
    },
    getAuthorization: function () {
      return {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("TokenAPIUser")}`,
        },
      };
    },
    deleteUser: function () {
      axios
        .delete(
          `http://localhost:4000/user/${this.deleteUserID}`,
          this.getAuthorization()
        )
        .then((res) => {
          // Depois de fazer a deleção, a tabela será atualizada.
          axios
            .get("http://localhost:4000/user", this.getAuthorization())
            .then((res) => {
              this.users = res.data;
            })
            .catch((error) => {
              console.log(error);
            });
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      this.isShowDeleteModal = false;
    },
  },
};
</script>

<style>
</style>