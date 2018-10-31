<template>
  <v-layout row>
    <v-flex xs12 md4 offset-md4>
      <v-alert
        v-model="alert"
        dismissible
        type="error"
        color="error"
        outline>
        Ugyldig brukernavn og/eller passord. Prøv igjen
      </v-alert>
      <v-form @submit.prevent="onLoginSubmit" v-model="valid">
        <v-layout row justify-center>
          <h2>Login</h2>
        </v-layout>
        <v-layout row>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Epost"
            required
          ></v-text-field>
        </v-layout>
        <v-layout row>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            :counter="20"
            label="Passord"
            required
          ></v-text-field>
        </v-layout>
        <v-layout row>
          <v-btn type="submit" color="success" block depressed outline>Login</v-btn>
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
      remember: true,
      showError: false,
      alert: false,
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
      this.$store.dispatch('auth/loginUser', { email: this.email, password: this.password })
      .then(() => {
        this.$router.push({ name: 'Cards' })
      }).catch(() => {
        this.alert = true
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  form {
    margin-top: 2rem;
    .v-btn {
      margin-top: 2rem;
    }
  }
</style>
