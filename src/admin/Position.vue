<template>
    <div>
        <span class="table-add float-right mb-3 mr-2"><router-link :to="{ name: 'addposition' }" class="text-success"><i
                    class="fas fa-plus fa-2x" aria-hidden="true"></i></router-link></span>
        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
                    <th>Tên trụ sở</th>
                    <th>Ngày</th>
                    <th>Giờ</th>
                    <th>Số lượng</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="d-flex align-items-center ">
                            <img src="https://static.giotmauvang.org.vn/ihpstatic/LOGO/CTD.png" alt=""
                                style="width: 45px; height: 45px;margin-right:18px" class="rounded-circle" />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">Hiến máu - Trung Tâm Hiến Máu Nhân Đạo Tp.HCM </p>
                                <span style="font-size: 10px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2"
                                        width="13" height="13" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                                        <path d="M9 4v13"></path>
                                        <path d="M15 7v5.5"></path>
                                        <path
                                            d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z">
                                        </path>
                                        <path d="M19 18v.01"></path>
                                    </svg>
                                    106 Thiên Phước, Phường 9, Quận Tân Bình, TP.HCM


                                </span>


                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">24-12-2023</p>

                    </td>
                    <td>
                        <p>7:00 AM</p>
                    </td>
                    <td>100</td>
                    <td>
                        <router-link :to="{ name: 'editposition' }">
                            <button type="button" class="btn btn-link btn-sm btn-rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                    <path d="M16 5l3 3"></path>
                                </svg>
                            </button>



                        </router-link>

                    </td>
                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                        </button>

                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <img src="https://static.giotmauvang.org.vn/ihpstatic/LOGO/CR.png" class="rounded-circle" alt=""
                                style="width: 45px; height: 45px;margin-right:18px" />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">Hiến máu - Trung tâm Truyền máu Chợ Rẫy</p>
                                <span style="font-size: 10px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2"
                                        width="13" height="13" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                                        <path d="M9 4v13"></path>
                                        <path d="M15 7v5.5"></path>
                                        <path
                                            d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z">
                                        </path>
                                        <path d="M19 18v.01"></path>
                                    </svg>
                                    106 Thiên Phước, Phường 9, Quận Tân Bình, TP.HCM


                                </span>


                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">24-12-2023</p>
                    </td>
                    <td>
                        <p>7:</p>
                    </td>
                    <td>100</td>
                    <td>
                        <button type="button" class="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                <path d="M16 5l3 3"></path>
                            </svg>
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                        </button>

                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <img src="https://static.giotmauvang.org.vn/ihpstatic/LOGO/BTH.jpg" class="rounded-circle"
                                alt="" style="width: 45px; height: 45px; margin-right:18px" />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">Hiến máu - Bệnh viện Truyền máu Huyết học</p>
                                <span style="font-size: 10px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2"
                                        width="13" height="13" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                                        <path d="M9 4v13"></path>
                                        <path d="M15 7v5.5"></path>
                                        <path
                                            d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z">
                                        </path>
                                        <path d="M19 18v.01"></path>
                                    </svg>
                                    106 Thiên Phước, Phường 9, Quận Tân Bình, TP.HCM


                                </span>

                            </div>

                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">24-12-2023</p>
                    </td>
                    <td>
                        <p>7:</p>
                    </td>
                    <td>100</td>
                    <td>
                        <button type="button" class="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                <path d="M16 5l3 3"></path>
                            </svg>
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                        </button>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>