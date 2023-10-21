<template>
    <div class="lg">
        <p>{{ message }}</p>

        <FormLogin @submit:login="Login" />
       

    </div>
</template>

<script>
import FormLogin from "@/components/Formlogin.vue";
import UserService from "@/services/user.service.js";

export default {
    components: {
        FormLogin,
    },
    props: {
        login: { type: Object, required: true },

    },
    data() {
        return {
            message: "",
        };
    },
    methods: {
        async Login(data) {
          
            console.log(data);

                try {
                    await UserService.login(data);
                    this.message = "Đăng nhập thành công";
                    this.$router.push({ name: 'hienmau' });

                } catch (error) {
                    this.message = "Đăng nhập thất bại, mật khẩu hoặc email chưa chính xác";
                    console.log(error);
                }
           
        },

    },


}
</script>

<style scoped>

.lg > p{
    margin-bottom: 28px;
    color: brown;
}

</style>