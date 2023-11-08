<template>
    <div v-if="showModal" class="modal">
        <div class="modal-content">
            <p v-if="student">Are you sure you want to delete {{ student.name }}?</p>
            <button @click="confirmDelete">Yes</button>
            <button class="close-button" @click="cancelDelete">No</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DeleteModal',
    props: ['showModal', 'student'],

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        confirmDelete(){
            this.$emit('confirmDelete', this.student);
       }, 
       cancelDelete() {
            this.$emit('cancelDelete', this.student);
       }
    }    
}

</script>

<style scoped>

.modal {
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    width: 100%;
    text-align: center;
}

.modal-content button {
    margin: 0 10px;
    padding: 8px 16px;
    cursor: pointer;
}

</style>