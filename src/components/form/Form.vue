<template>
  <div>
    <form v-on:submit="onSubmit">
      <div class="form-group">
        <div class="row">
          <div class="col-5 text-left">
            <label for="exampleInputEmail1">Email</label>
          </div>
          <div class="col-7">
            <input
              type="text"
              class="form-control  pl-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="data.a"
            >
          </div>
        </div>
      </div>
      <div class="form-group form-inline">
        <div class="row">
          <div class="col-5 text-left pr-0">
            <label for="exampleInputPassword1">Password</label>
          </div>
          <div class="col-7">
            <input
              type="password"
              class="form-control pl-0"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="data.b"
            >
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormLogin",
  data: function() {
    return {
      data: {
        a: "",
        b: ""
      }
    };
  },
  methods: {
    onSubmit: function() {
      alert(JSON.stringify(this.data));
    }
  }
};
</script>

