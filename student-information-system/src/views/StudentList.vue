<template>
  <div class="container">
    <div class="header">
        <h1 class="text">Student List</h1>
        <div class="header-controls">
          <el-input class="section" placeholder="Search" type="search" v-model="searchTerm" icon="el-icon-search" />
          <el-button @click="openRegisterModal" id="registerButton" type="info">Register New Student</el-button>
        </div>
      <table class="students">
        <thead>
        <tr>
          <th>Student ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, studentId) in students" :key="student.id" v-show="filterStudents(student)">
          <td>{{ studentId + 1}}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.grade }}</td>
          <td>
            <button @click="startEditing(student)">Edit</button>
            <button @click="showDeleteModal(student)">Delete</button>
          </td>
        </tr>
    </tbody>
  </table>
    <register-new-student
                  v-if = "isRegisterModalVisible"
                  :onClose = "closeRegisterModal"
                  :addStudent = "addStudent"
    ></register-new-student>
    <delete-modal :showModal="isDeleteModalVisible" 
                   @confirmDelete="handleConfirmDelete" 
                   @cancelDelete = "handleCancelDelete" 
                   :student="currentStudent"
                   ></delete-modal>
    <edit-modal  v-if = "isEditModalVisible"
                  @cancelEdit = "handleConfirmCancel"
                  @saveEdit = "handleConfirmSave"
                  :student = "editingStudent"
                
  
    ></edit-modal>
    </div>
  </div>
</template>

<script>
import EditModal from '../components/EditModal.vue'
import DeleteModal from '../components/DeleteModal.vue'
import RegisterNewStudent from '../components/RegisterNewStudent.vue';
export default {
    name: 'StudentList',
    components: {
      DeleteModal,
      EditModal,
      RegisterNewStudent
    },
    mounted() {
        let students = localStorage.getItem("students")
        if (students) {
          let parsedStudents = JSON.parse(students);
          this.students = parsedStudents;
        }
    },
    data() {
        return {
            students: [
            { id: 1, name: 'John Doe', age: 20, grade: 'A' },
            { id: 2, name: 'Jane Smith', age: 22, grade: 'A' },
            { id: 3, name: 'Alex Johnson', age: 21, grade: 'B' },
            { id: 4, name: 'Emily Davis', age: 23, grade: 'A' },
            { id: 5, name: 'Daniel Brown', age: 19, grade: 'B' },
            { id: 6, name: 'Olivia White', age: 20, grade: 'A' },
            { id: 7, name: 'Ethan Wilson', age: 22, grade: 'A' },
            { id: 8, name: 'Sophia Miller', age: 21, grade: 'B' },
            ],
            isDeleteModalVisible: false,
            currentStudent: null,
            isEditModalVisible: false,
            editedInformation: null,
            searchTerm: '',
            editingStudent: {},
            isRegisterModalVisible: false
        };
    },

   methods: {
    openRegisterModal() {
      this.isRegisterModalVisible = true;
    },
    closeRegisterModal() {
      this.isRegisterModalVisible = false;
    },
    addStudent(newStudent) {
      newStudent.id = this.students.length + 1;
      this.students.push(newStudent);
      this.closeRegisterModal();

      localStorage.setItem("students", JSON.stringify(this.students));
    },
    startEditing(student) {
        this.editingStudent = student
        this.isEditModalVisible = true
    },

    handleConfirmCancel() {
        this.isEditModalVisible = false;
    },

    handleConfirmSave(student) {
      const index = this.students.findIndex(s => s.id === student.id);
      if (index !== -1) {
        this.students[index] = student;

        localStorage.setItem("students",JSON.stringify(this.students))

      }

      this.isEditModalVisible = false;
    },

      showDeleteModal(student) {
            this.currentStudent = student;
            this.isDeleteModalVisible = true;
    },
    handleConfirmDelete() {
    if (this.currentStudent && this.currentStudent.id) {
        const index = this.students.findIndex(student => student.id === this.currentStudent.id);
        if (index !== -1) {
            this.students.splice(index, 1);

            localStorage.setItem("students", JSON.stringify(this.students));
        }
    }
    this.isDeleteModalVisible = false;
},
handleCancelDelete() {
    this.isDeleteModalVisible = false;
  },

    filterStudents(student) {
      const searchTerm = this.searchTerm.toLowerCase();
      return (
        student.name.toLowerCase().includes(searchTerm)
      );
  },
},
   }

</script>


<style scoped>

.section {
 margin-right: 10px;
}


.header-controls {
  display: flex;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.students {
  width: 100% ;
  border-collapse: collapse;
}

.students th, .students td {
  border: 1px solid #ddd;
  padding: 10px 27px;
  text-align: left;
}

.students th {
  background-color: #f2f2f2;
}

.text {
  margin: 50px 0;
}

</style>

