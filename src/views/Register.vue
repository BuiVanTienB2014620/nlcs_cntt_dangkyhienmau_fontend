<template>
  <FormRegister  @submit:user="createUser" />
  <p>{{ message }}</p>
</template>

<script>
import UserService from "@/services/user.service.js";
import FormRegister from "../components/FormRegister.vue";

export default {
  components: {
    FormRegister,
  },

  props: {
    user: { type: Object, required: true },

  },


  data() {
    return {


      message: "",
    };

  },
  methods: {
    async createUser(data) {
      // Hiển thị cửa sổ xác nhận
      console.log("hello",data);


      const confirmed = window.confirm("Bạn có tài khoản hệ mới?");

      if (confirmed) {
        try {
          await UserService.create(data);
          this.message = "Thêm tài khoản mới thành công";
          this.$router.push({ name: 'login' });

        } catch (error) {
          console.log(error);
        }
      }
    },

  },



};






</script>





<style scoped>
</style>