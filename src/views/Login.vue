<template>
    <section class="vh-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 text-black">

                    

                    <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                        <form style="width: 23rem;">

                            <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Đăng nhập</h3>

                            <div class="form-outline mb-4">
                                <input type="email" id="form2Example18" class="form-control form-control-lg" />
                                <label class="form-label" for="form2Example18">Địa chỉ email</label>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="password" id="form2Example28" class="form-control form-control-lg" />
                                <label class="form-label" for="form2Example28">Mật khẩu</label>
                            </div>

                            <div class="pt-1 mb-4">
                                <button class="btn btn-info btn-lg btn-block" type="button">Đăng nhập</button>
                            </div>

                            <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Quên mật khẩu?</a></p>
                            <p>Bạn chưa có tài khoản?
                                <router-link :to="{ name: 'register' }" class="link-info">
                                    Đăng ký
                                </router-link>
                                
                            </p>

                            

                            
                        </form>
                       

                    </div>

                </div>
                <div class="col-sm-6 px-0 d-none d-sm-block">
                    <img src="https://img.freepik.com/premium-photo/woman-child-hands-holding-red-heart-with-paper-sign-blood-donation_101840-110.jpg?size=626&ext=jpg&ga=GA1.2.1039428275.1684508452&semt=ais"
                        alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg-image-vertical {
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
}

@media (min-width: 1025px) {
    .h-custom-2 {
        height: 100%;
    }
}
</style>