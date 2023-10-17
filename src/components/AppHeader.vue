<template>
    <nav class="navbar navbar-expand navbar-dark bg-white">
        <a href="" class="navbar-brand">
            <router-link :to="{ name: 'hienmau' }" class="nav-link">

                <img src="../assets/img/download.png" alt="" class="rounded-circle logo-img">
                <span class="logo-text text-dark">Hội Hiến Máu Việt Nam</span>

            </router-link>

        </a>
        <div class="logo-container" :style="logoContainerStyles">
            <img src="../assets/img/logo1.jpg" alt="" class="logo1">
            <img src="../assets/img/HCTD.png" alt="" class="logo">
        </div>
        <div class="navbar-user" v-if="isLoggedIn">
            <router-link :to="{ name: 'login' }" class="login">
                <i class="fa-solid fa-user"></i> Đăng Nhập

            </router-link>

        </div>

    </nav>
    <div>
        <nav class="navbar navi">
            <div class="nav-item" style="margin-right: 16px; color: white;margin-left: auto;">
                <router-link :to="{ name: 'hienmau' }" class="nav-link" style="color: #ffffff;">

                    Trang Chủ

                </router-link>

            </div>
            <div class="nav-item" style="margin-right: 16px; color: white; ">Hỏi Đáp</div>
            <div :class="'nav-item'" style="color: white;margin-right: auto;">Tin Tức</div>
        </nav>

    </div>
</template>
<script>
export default {
    data() {
        return {
            isLoggedIn: false,
        };
    },
    computed: {
        logoContainerStyles() {
            if (this.isLoggedIn) {
                // Trang đăng nhập hoặc đăng ký
                return {
                    marginRight: '25%',
                   
                };
            } else {
                // Trang chủ hoặc các trang khác
                return {
                    marginRight: '35.4%',
                    
                }; // Trả về một đối tượng rỗng để không có margin-right
            }
        },
    },
    watch: {
        '$route.name'(newRoute, oldRoute) {
            if (newRoute === 'login' || newRoute === 'user.register') {
                this.isLoggedIn = false;
            } else {
                this.isLoggedIn = true;
            }
        },
    },
};
</script>
<style scoped>
/* CSS để bo tròn ảnh và thu nhỏ nó */
.navbar {
    display: flex;
    justify-content: space-between;


}

.logo-img {
    border-radius: 50%;
    /* Bo tròn ảnh */
    width: 15%;
    /* Thu nhỏ ảnh thành 1/4 kích thước ban đầu */
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25%;
}

.logo1 {
    width: 30%;
    height: auto;
}



.navbar-brand {
    display: flex;
    /* Sử dụng flexbox để căn chỉnh các phần tử con */
    align-items: flex-end;
    /* Căn dưới cùng */
    justify-content: center;
    /* Căn giữa theo chiều ngang */
    text-decoration: none;
    /* Loại bỏ gạch chân khi hover */

}

/* CSS để định dạng văn bản */
.logo-text {
    font-size: 18px;
    /* Điều chỉnh kích thước font chữ */
    color: white;
    /* Điều chỉnh màu sắc của văn bản */
    text-align: center;
    /* Căn giữa văn bản */
    margin-top: 10px;
    /* Khoảng cách từ logo đến văn bản (điều chỉnh giá trị này theo nhu cầu) */
}

.navi {
    background-color: #007BFF;
    /* Màu nền xanh */
    display: flex;
    align-items: center;
    padding: 10px;
    /* Khoảng cách nền và chữ trong thẻ div */
    border-radius: 1px;
    /* Bo góc thẻ div */
}

.nav-item {
    cursor: pointer;
    margin: 0 10px;
    position: relative;
    /* Để xác định vị trí của thanh ngang */
}

.nav-item::after {
    content: '';
    /* Tạo nội dung trống cho thanh ngang */
    position: absolute;
    /* Đặt vị trí tuyệt đối */
    left: 0;
    /* Đặt bên trái */
    bottom: -2px;
    /* Đặt bên dưới và căn đều theo chiều ngang */
    width: 100%;
    /* Chiều rộng của thanh ngang */
    height: 2px;
    /* Chiều cao của thanh ngang */
    background-color: white;
    /* Màu sắc của thanh ngang */
    transform: scaleX(0);
    /* Thu gọn thanh ngang theo chiều ngang ban đầu */
    transform-origin: left;
    /* Đặt gốc xoay ở bên trái */
    transition: transform 0.3s;
    /* Hiệu ứng chuyển đổi */
}

.nav-item:hover::after {
    transform: scaleX(1);
    /* Mở rộng thanh ngang khi hover */
}

.login {
    text-decoration: none;
    color: black;
}

.login:hover {
    text-decoration: none;
    color: black;

}
</style>