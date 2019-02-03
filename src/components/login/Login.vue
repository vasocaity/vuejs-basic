<template>
  <b-container>
    <b-row>
      <b-col cols="8">
        <img alt="Vue logo" src="../../assets/logo.png">
      </b-col>
      <b-col cols="4">
        <form-login/>
      </b-col>
    </b-row>
    
  </b-container>
</template>

<script>
import FormLogin from "../form/Form.vue";
export default {
  name: "Login",
  components: {
    FormLogin
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
