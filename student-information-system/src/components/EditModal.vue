<template>
    <div class="modal-overlay">
        <div class="modal">
        <form @submit.prevent="confirmSave" class="modal-content">
            <p>
                <label for="name">Name</label>
                <input v-model="localStudent.name" type="text"  />
            </p>
            <p>
                <label for="age" class="age-label">Age</label>
                <input v-model="localStudent.age" type="number" />
            </p>
            <p>
                <label for="grade">Grade</label>
                <input v-model="localStudent.grade" type="text" />
            </p>
            <button @click="confirmCancel">Cancel</button>
            <button type="submit">Save</button>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    name: 'EditModal',
    props: ['student'],

    mounted() {
        this.localStudent.id = this.student.id;
        this.localStudent.name = this.student.name;
        this.localStudent.grade = this.student.grade;
        this.localStudent.age = this.student.age;
    },

    data() {
        return {
            localStudent: {
                id: null,
                name: null,
                grade: null,
                age: null,
            },
        };
    },

     methods: {
        confirmCancel(){
            this.$emit('cancelEdit');
       }, 
       
       confirmSave() {
        this.$emit('saveEdit', this.localStudent);
   },
 }
}

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
  padding: 20px;
  border-radius: 8px;
}

.modal-content label{
    margin-right: 20px;
}

.age-label {
    margin-left: 13px;
}
</style>