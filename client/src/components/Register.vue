<template>
  <v-layout row>
    <v-flex xs12 sm4 offset-sm4>
      <v-alert
        v-model="alert"
        dismissible
        type="error"
        color="error"
        outline>
        You need to enter a valid email and a password longer than 8 characters!
      </v-alert>
      <v-form @submit.prevent="onRegisterSubmit" v-model="valid">
        <v-layout row justify-center>
          <h2>Register</h2>
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
            type="password"
            label="Password"
            required
          ></v-text-field>
        </v-layout>
        <v-layout row>
          <v-btn type="submit" color="success" block depressed outline>Register</v-btn>
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
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
    onRegisterSubmit() {
      this.$store.dispatch('auth/registerUser', { email: this.email, password: this.password })
      .then(() => {
        this.$router.push({ name: 'Cards' })
      })
      .catch(() => {
        this.alert = true
      })

    }
  }
}
</script>