<template>
        <div class="modal-overlay">
        <div class="modal">
            <h3>Add/Edit User</h3>
            <form @submit.prevent="confirmRegister" class="modal-content">
                <p>
                    <label for="name">Name</label>
                    <input v-model="localStudent.name" type="text" id="name"/>
                </p>
                <p>
                    <label for="age">Age</label>
                    <input v-model="localStudent.age" type="number" id="age" class="age-label"/>
                </p>
                <p>
                    <label for="grade">Grade</label>
                    <input v-model="localStudent.grade" type="text" id="grade"/>
                </p>
                <div class="buttons">
                    <button @click="confirmCancel">Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterNewStudent',
    props: ['onClose', 'addStudent'],

    data() {
        return {
            localStudent: {
                name: '',
                age: null,
                grade: '',
            },
        }
        },
    mounted() {
    },

    methods: {
        confirmCancel() {
            this.$emit('onClose');
        },
        confirmRegister() {
        this.addStudent (this.localStudent)
        this.confirmCancel();
    },
    },
};
</script>

<style scoped>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #fff;
        padding: 50px 60px 50px 50px; 
        border-radius: 8px;
    }

    .modal-content label{
        margin-right: 20px;
    }

    .age-label {
    margin-left: 13px;
    }
    .buttons {
        margin: 0;
        position: relative;
        top: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 10px;
  }

  .buttons button {
    padding: 5px 7px;
  }

  h3 {
  margin: 0;
  position: relative;
  bottom: 20px;
  margin-top: -20px; 
  border-bottom: 1px solid grey;
}
</style> 