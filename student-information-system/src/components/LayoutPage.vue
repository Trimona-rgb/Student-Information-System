<template>
        <div v-if="!isSignInPage">
            <nav class="navbar">
                <div class="left-links">
                    <router-link to="/home">Home</router-link>
                    <router-link to="/student-list">Student List</router-link>
                </div>
                <div class="right-links">
                    <button @click="logOut">Log out</button>
                </div>
             </nav>
        </div>
</template>

<script>
export default {
    name: 'SystemLayout',

    data() {
        return {
        };
    },

    computed: {
    isSignInPage() {
      return this.$route.name === 'sign-in';
    },
  },

    methods: {

    logOut() {
        this.$router.push('/');
    }
    },
 }
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0; 
}

.left-links {
  display: flex;
}

.left-links :first-child{
    margin-right: 15px;
}

.right-links {
  margin-left: auto; 
}

</style>