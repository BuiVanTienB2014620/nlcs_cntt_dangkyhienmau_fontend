<template>
    <div>
        <div v-if="OpencloseA" class="modal fade show" aria-modal="true" role="dialog" style="display:block">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5></h5>

                        <button type="button" class="btn btn-danger" @click="OpencloseFunA()" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <slot>
                            <div class="profile-form">
                                <h2 style="color: #333;">Thay đổi thông tin cá nhân</h2>
                                <form>
                                    <div class="form-group">
                                        <label for="email">Email:</label>
                                        <input type="text" id="email" name="email" placeholder="Nhập email của bạn" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password:</label>
                                        <input type="password" id="password" name="password"
                                            placeholder="Nhập mật khẩu mới" />
                                    </div>
                                    <div class="avatar-upload">
                                        <label for="avatar">Ảnh đại diện:</label>
                                        <div class="avatar-preview">
                                            <img src="default-avatar.jpg" alt="Avatar" id="avatar-preview" />
                                        </div>
                                        <input type="file" id="avatar" name="avatar" class="avatar-input"
                                            accept="image/*" />
                                        <button type="button" onclick="document.getElementById('avatar').click()"
                                            style="background-color: #007bff; color: #fff;">Tải ảnh lên</button>
                                    </div>
                                    <button type="submit">Lưu thông tin</button>
                                </form>
                            </div>


                        </slot>
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="OpencloseFunA()" :class="'btn btn-' + variant">Đóng</button>

                    </div>
                </div>
            </div>
        </div>

        <button type="button" @click="OpencloseFunA()" :class="'btn btn-' + variant">
            Thay đổi thông tin


        </button>

    </div>
</template>

<script>
export default {
    name: 'AModal',
    props: {
        visible: Boolean,
        variant: String,


    },
    data() {
        return {
            OpencloseA: this.visible
        }
    },
    methods: {
        OpencloseFunA() {
            this.OpencloseA = !this.OpencloseA;

        },
        watch: {
            visible: function (newVal, oldVal) {
                this.OpencloseA = newVal; // Sửa thành "newVal"
                console.log('new ' + newVal + ' == ' + oldVal);
            },
        }


    }

}
</script>

<style scoped>
td:nth-child(1) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
}

.tht {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
}

.edit {
    display: flex;
    align-items: center;
}

.profile-form {
    max-width: 400px;
    margin: 0 auto;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    color: #333;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.avatar-upload {
    margin: 20px 0;
}

.avatar-preview {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
}

.avatar-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.avatar-input {
    display: none;
}

button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>