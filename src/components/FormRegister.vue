
<template>
    <section class="vh-250"
      style="background-image: url('https://img.freepik.com/premium-photo/it39s-splash-red-blood-isolation-white-background_230115-2289.jpg?size=626&ext=jpg&ga=GA1.1.1039428275.1684508452&semt=sph');">
      <div class=" ">
        <div class="container h-100 ">
          <div class="row  d-flex justify-content-center align-items-center h-100" style="padding: 20px;">
            <div class="col-12 col-md-9 col-lg-7">
              <div class="card" style="border-radius: 15px;">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">TẠO MỘT TÀI KHOẢN</h2>
  
                  <Form @submit:user="createUser" @submit="submitUser" :validation-schema="userFormSchema">
  
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example1cg">Tên của bạn</label>
                      <Field type="text" id="form3Example1cg" class="form-control form-control-lg" name="name"
                        v-model="userLocal.name" />
                      <ErrorMessage name="name" class="error-feedback" />
  
                    </div>
  
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3cg">Email của bạn</label>
                      <Field type="email" id="form3Example3cg" class="form-control form-control-lg" name="email"
                        v-model="userLocal.email" />
                      <ErrorMessage name="email" class="error-feedback" />
  
  
                    </div>
  
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cg">Mật khẩu</label>
                      <Field type="password" id="form3Example4cg" class="form-control form-control-lg" name="password"
                        v-model="userLocal.password" />
                      <ErrorMessage name="password" class="error-feedback" />
  
  
                    </div>
  
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cdg">Nhập lại mật khẩu</label>
                      <Field type="password" id="form3Example4cdg" class="form-control form-control-lg" name="respassword"
                        v-model="userLocal.respassword" />
                      <ErrorMessage name="respassword" class="error-feedback" />
  
  
                    </div>
  
                    <div class="form-check d-flex justify-content-center mb-5">
                      <Input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg"
                        style="margin-right: 426px; margin-top: 7px;" />
                      <label class="form-check-label" for="form2Example3g">
                        Tôi đồng ý tất cả các tuyên bố trong <a href="#!" class="text-body"><u>Điều khoản của
                            dịch vụ</u></a>
                      </label>
                    </div>
  
                    <div class="d-flex justify-content-center">
                      <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                      
                        <router-link :to="{ name: 'login' }" class="dk">
                          Đăng
                          ký
                        </router-link>
                      </button>
                    </div>
  
  
                  </Form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>{{message}}</p>
    </section>
  </template>
    
  <script>
  import UserService from "@/services/user.service.js";
import { ErrorMessage, Field, Form } from "vee-validate";
  
  
  import * as yup from "yup";
  
  export default {
    components: {
      Field,
      Form,
      ErrorMessage,
    },
  
    props: {
      user: { type: Object, require: true },
  
    },
    emits: ["submit:user"],
  
    data() {
      const userFormSchema = yup.object().shape({
        name: yup
          .string()
          .required("Tên phải có giá trị.")
          .min(2, "Tên phải ít nhất 2 ký tự.")
          .max(50, "Tên có nhiều nhất 50 ký tự."),
        email: yup
          .string()
          .email("E-mail không đúng.")
          .max(50, "E-mail tối đa 50 ký tự."),
  
       password: yup
          .string()
          .min(8, "Tên phải ít nhất 8 ký tự.")
          .max(8, "Tên có nhiều nhất 8 ký tự."),
        
       respassword: yup
          .string()
          .min(8, "Tên phải ít nhất 8 ký tự.")
          .max(8, "Tên có nhiều nhất 8 ký tự."),
  
  
      });
      return {
        userLocal: {
          name: "",
          email: "",
          password: "",
          respassword: "",
          message: "", 
        },
        userFormSchema,
      }
  
    },
    methods: {
      submitUser() {
        this.$emit("submit:user", this.userLocal);
      }
    },
    async createUser(data) {
      // Hiển thị cửa sổ xác nhận
    
      const confirmed = window.confirm("Bạn có tài khoản hệ mới?");
  
      if (confirmed) {
        try {
          await UserService.createUser(this.user,data);
          this.message = "Thêm tài khoản mới thành công";
        } catch (error) {
          console.log(error);
        }
      }
    },
  };
  
  
  
  
  
  
  </script>
    
    
    
    
    
  <style scoped>
  .gradient-custom-4 {
    /* fallback for old browsers */
    background: #d81811;
  
    /* Chrome 10-25, Safari 5.1-6 */
  
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgb(196, 28, 28), rgba(143, 211, 244, 1))
  }
  .dk{
    text-decoration: none;
    color: rgb(255, 255, 255);
  }
  </style>