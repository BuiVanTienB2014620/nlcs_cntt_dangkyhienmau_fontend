<template>
  
  <FormRegister @submit:user="createUser"/>
 


</template>

<script>
import UserService from "@/services/user.service.js";
import FormRegister from "../components/FormRegister.vue";

export default {
components: {
  FormRegister,
},

props: {
  user: { type: Object, require: true },

},


data() {
  return {

    message: "",


  };

},

async createUser(data) {
  // Hiển thị cửa sổ xác nhận

  const confirmed = window.confirm("Bạn có tài khoản hệ mới?");

  if (confirmed) {
    try {
      await UserService.createUser(this.user, data);
      this.message = "Thêm tài khoản mới thành công";
    } catch (error) {
      console.log(error);
    }
  }
},
};






</script>





<style scoped>

</style>