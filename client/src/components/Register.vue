<template>
  <v-layout row>
    <v-flex xs12 sm4 offset-sm4>
      <v-form @submit="onRegisterSubmit" v-model="valid">
        <v-layout row text-xs-center>
          <h2>Register an account with MTG Master</h2>
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
          <v-btn type="submit" color="success" block dark>Register account</v-btn>
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

      })

    }
  }
}
</script>