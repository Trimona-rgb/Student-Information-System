<template>
    <div>
      <img class="hotel-key-img" src="../assets/hotelkey-image.png">
    <div class="title">
        <img class="logo" src="../assets/logo-cubes.jpeg">
        <h2>Student Information System</h2>
        </div>
      <div>
        <h1>Sign In</h1>
        <form class="review-form">
      <p>
        <label for="username">Username</label>
        <input id="username" v-model="username" placeholder="username" required>
      </p>

      <p>
        <label for="password" style="margin-right: 19px;">Password</label>
        <input id="password" v-model="password" placeholder="password" required>
      </p>

      <p class="checkbox">
        <input type="checkbox" id="checkbox" v-model="checkbox">
        <label for="checkbox">Remember me</label>
      </p>
    
      <p>
        <input class="login" type="submit" value="Login" @click="onSubmit">  
      </p>  
      
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    
    </form>
    </div>
  </div>


</template>

<script>


export default {
    name: 'SignIn',

    data() {
        return {
                username: '',
                password: '',
                checkbox: '',
                errorMessage: ''   
            };
    },

    mounted() {
        
    },

    methods: {
        onSubmit() {
            if(this.username === 'Trimona' && this.password === '123123'){
               this.$router.push('/student-list') 
            } else {
                this.errorMessage = 'Invalid username or password'
            }
        }
        }
};
</script>


<style scoped>
.header {}
  .hotel-key-img {
    width: 150px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 90px 0; 
  }

.logo {
  width: 50px;
}

h1 {
  margin-bottom: 50px;
  margin-left: 30px;

}
.review-form label{
  margin-right: 15px;
}


.login {
  width: 147px;
  margin-left: 84px;
}

.checkbox {
  margin-left: 80px;
}

.checkbox :first-child{
  margin-right: 8px;
}

</style>s