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
        // async Login(data) {

        //     console.log(data);

        //         try {
        //             await UserService.login(data);
        //             this.message = "Đăng nhập thành công";
        //             this.$router.push({ name: 'auth' });

        //         } catch (error) {
        //             this.message = "Đăng nhập thất bại, mật khẩu hoặc email chưa chính xác";
        //             console.log(error);
        //         }

        // },
        async Login(data) {
            console.log(data);

            try {
                await UserService.login(data);

                // Kiểm tra email để xác định trang đích
                if (data.email === "admin@gmail.com" && data.password === "admin123") {
                    // Nếu email và mật khẩu là admin, định hướng đến trang admin
                    this.message = "Đăng nhập thành công vào trang admin";
                    this.$router.push({ name: 'admin' });
                } else {
                    this.message = "Đăng nhập thành công ";
                    this.$router.push({ name: 'auth' });
                }
            } catch (error) {
                this.message = "Đăng nhập thất bại, mật khẩu hoặc email chưa chính xác";
                console.log(error);
            }
        },


    },


}
</script>

<style scoped>
.lg>p {
    margin-bottom: 28px;
    color: rgb(249, 4, 4);
}
</style>