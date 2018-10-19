<template>
  <v-layout row>
    <v-flex xs12 sm4 offset-sm4>
      <v-form @submit="onLoginSubmit" v-model="valid">
        <v-layout row>
          <h2>Login to MTG Master</h2>
        </v-layout>
        <v-layout row>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
        </v-layout>
        <v-layout row>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="20"
            label="Password"
            required
          ></v-text-field>
        </v-layout>
        <v-layout row>
          <v-btn type="submit" color="success" block dark>Login</v-btn>
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'Epost er påkrevd',
        v => /.+@.+/.test(v) || 'Eposten må være gyldig'
      ],
      passwordRules: [
        v => !!v || 'Passord er påkrevd',
        v => v.length >= 8 || 'Passordet må være minst 8 tegn'
      ],
      valid: false
    }
  },
  methods: {
    onLoginSubmit() {
      let credentials = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('auth/loginUser', credentials)
      .then(() => {
        this.$router.push({ name: 'Information' })
      }).catch(() => {
        
      })
    }
  }
}
</script>
<style lang="scss">
  form {
    margin-top: 2rem;
    box-shadow: 2px 4px 5px 0px rgba(0,0,0,0.75);
    padding: 2rem;
  }
</style>
