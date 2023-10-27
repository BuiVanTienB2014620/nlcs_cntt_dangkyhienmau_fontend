<template>
    <div class="container ">
        <div class="row">
            <div class="col-sm-3 text-center mx-auto d-flex justify-content-around">
                <p>Bộ lọc:</p>
                <button type="button" class="btn btn-primary" style=" width: 65px;
    height: 55px;">Gần tôi</button>
                <button type="button" class="btn btn-primary" style=" width: 65px;
    height: 55px;">Đề xuất</button>
            </div>
            <div class="col-sm-4  mx-auto d-flex d-inline-flex ">
                <div class="">
                    <p style="margin-right: 10px;">Tổ chức:</p>

                </div>
                <form>
                    <!-- Small -->
                    <select name="cars" class="custom-select custom-select-sm">
                        <option selected>Tất cả</option>
                        <option value="volvo">Bệnh viện huyết học</option>
                        <option value="fiat">Trung tâm y tế TP.HCM</option>
                        <option value="audi">Trung tâm truyền máu chợ rẫy</option>
                    </select>


                </form>
            </div>
            <div class="col-sm-9 text-center mx-auto">
                <table class="table">
                    <thead>
                        <tr class="mx-auto d-flex d-inline-flex">
                            <th scope="col">
                                <div class="d-flex align-items-center">
                                    <img src="https://static.giotmauvang.org.vn/ihpstatic/LOGO/CTD.png" alt=""
                                        style="width: 100px; height: 100px" class="rounded" />
                                </div>

                            </th>
                            <th scope="col">
                                <div class="">
                                    <p class="fw-bold mb-1">Hiến máu - Trung Tâm Hiến Máu Nhân Đạo Tp.HCM </p>
                                    <span style="font-size: 10px; margin-right: 113px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2"
                                            width="13" height="13" viewBox="0 0 24 24" stroke-width="2"
                                            stroke="currentColor" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
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
                                <div class="">

                                    <span style="font-size: 10px; margin-right: 310px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-calendar" width="13" height="13"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z">
                                            </path>
                                            <path d="M16 3v4"></path>
                                            <path d="M8 3v4"></path>
                                            <path d="M4 11h16"></path>
                                            <path d="M11 15h1"></path>
                                            <path d="M12 15v3"></path>
                                        </svg>
                                        27/10/2023


                                    </span>


                                </div>
                                <div class="">

                                    <span style="font-size: 10px; margin-right: 270px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-24-hours" width="13" height="13"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M4 13c.325 2.532 1.881 4.781 4 6"></path>
                                            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2"></path>
                                            <path d="M4 5v4h4"></path>
                                            <path
                                                d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2">
                                            </path>
                                            <path d="M18 15v2a1 1 0 0 0 1 1h1"></path>
                                            <path d="M21 15v6"></path>
                                        </svg>
                                        Từ 07:00 Đến 16:30

                                    </span>


                                </div>

                            </th>



                            <th scope="col ">
                                <span style="font-size: 10px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                    </svg>
                                    Đã đăng ký
                                </span>
                                <p>
                                    50/145 người
                                </p>
                                <button type="button" class="btn btn-primary" style=" width: 65px;
    height: 55px;">Đăng ký</button>

                            </th>

                        </tr>
                    </thead>

                </table>

                <!-- 000000 -->
                <table class="table">
                    <thead>
                        <tr class="mx-auto d-flex d-inline-flex">
                            <th scope="col">
                                <div class="d-flex align-items-center">
                                    <img src="https://static.giotmauvang.org.vn/ihpstatic/LOGO/CTD.png" alt=""
                                        style="width: 100px; height: 100px" class="rounded" />
                                </div>

                            </th>
                            <th scope="col">
                                <div class="">
                                    <p class="fw-bold mb-1">Hiến máu - Trung Tâm Hiến Máu Nhân Đạo Tp.HCM </p>
                                    <span style="font-size: 10px; margin-right: 113px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2"
                                            width="13" height="13" viewBox="0 0 24 24" stroke-width="2"
                                            stroke="currentColor" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
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
                                <div class="">

                                    <span style="font-size: 10px; margin-right: 310px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-calendar" width="13" height="13"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z">
                                            </path>
                                            <path d="M16 3v4"></path>
                                            <path d="M8 3v4"></path>
                                            <path d="M4 11h16"></path>
                                            <path d="M11 15h1"></path>
                                            <path d="M12 15v3"></path>
                                        </svg>
                                        27/10/2023


                                    </span>


                                </div>
                                <div class="">

                                    <span style="font-size: 10px; margin-right: 270px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-24-hours" width="13" height="13"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M4 13c.325 2.532 1.881 4.781 4 6"></path>
                                            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2"></path>
                                            <path d="M4 5v4h4"></path>
                                            <path
                                                d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2">
                                            </path>
                                            <path d="M18 15v2a1 1 0 0 0 1 1h1"></path>
                                            <path d="M21 15v6"></path>
                                        </svg>
                                        Từ 07:00 Đến 16:30

                                    </span>


                                </div>

                            </th>



                            <th scope="col ">
                                <span style="font-size: 10px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                    </svg>
                                    Đã đăng ký
                                </span>
                                <p>
                                    50/145 người
                                </p>
                                <button type="button" class="btn btn-primary" style=" width: 65px;
    height: 55px;">Đăng ký</button>

                            </th>

                        </tr>
                    </thead>

                </table>
                <!-- 000000 -->
                <table class="table">
                    <thead>
                        <tr class="mx-auto d-flex d-inline-flex">
                            <th scope="col">
                                <div class="d-flex align-items-center">
                                    <img src="https://static.giotmauvang.org.vn/ihpstatic/LOGO/CTD.png" alt=""
                                        style="width: 100px; height: 100px" class="rounded" />
                                </div>

                            </th>
                            <th scope="col">
                                <div class="">
                                    <p class="fw-bold mb-1">Hiến máu - Trung Tâm Hiến Máu Nhân Đạo Tp.HCM </p>
                                    <span style="font-size: 10px; margin-right: 113px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2"
                                            width="13" height="13" viewBox="0 0 24 24" stroke-width="2"
                                            stroke="currentColor" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
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
                                <div class="">

                                    <span style="font-size: 10px; margin-right: 310px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-calendar" width="13" height="13"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z">
                                            </path>
                                            <path d="M16 3v4"></path>
                                            <path d="M8 3v4"></path>
                                            <path d="M4 11h16"></path>
                                            <path d="M11 15h1"></path>
                                            <path d="M12 15v3"></path>
                                        </svg>
                                        27/10/2023


                                    </span>


                                </div>
                                <div class="">

                                    <span style="font-size: 10px; margin-right: 270px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-24-hours" width="13" height="13"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M4 13c.325 2.532 1.881 4.781 4 6"></path>
                                            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2"></path>
                                            <path d="M4 5v4h4"></path>
                                            <path
                                                d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2">
                                            </path>
                                            <path d="M18 15v2a1 1 0 0 0 1 1h1"></path>
                                            <path d="M21 15v6"></path>
                                        </svg>
                                        Từ 07:00 Đến 16:30

                                    </span>


                                </div>

                            </th>



                            <th scope="col ">
                                <span style="font-size: 10px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                    </svg>
                                    Đã đăng ký
                                </span>
                                <p>
                                    50/145 người
                                </p>
                                <button type="button" class="btn btn-primary" style=" width: 65px;
    height: 55px;">Đăng ký</button>

                            </th>

                        </tr>
                    </thead>

                </table>
                <!-- 000000 -->
                <table class="table">
                    <thead>
                        <tr class="mx-auto d-flex d-inline-flex">
                            <th scope="col">
                                <div class="d-flex align-items-center">
                                    <img src="https://static.giotmauvang.org.vn/ihpstatic/LOGO/CTD.png" alt=""
                                        style="width: 100px; height: 100px" class="rounded" />
                                </div>

                            </th>
                            <th scope="col">
                                <div class="">
                                    <p class="fw-bold mb-1">Hiến máu - Trung Tâm Hiến Máu Nhân Đạo Tp.HCM </p>
                                    <span style="font-size: 10px; margin-right: 113px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2"
                                            width="13" height="13" viewBox="0 0 24 24" stroke-width="2"
                                            stroke="currentColor" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
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
                                <div class="">

                                    <span style="font-size: 10px; margin-right: 310px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-calendar" width="13" height="13"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z">
                                            </path>
                                            <path d="M16 3v4"></path>
                                            <path d="M8 3v4"></path>
                                            <path d="M4 11h16"></path>
                                            <path d="M11 15h1"></path>
                                            <path d="M12 15v3"></path>
                                        </svg>
                                        27/10/2023


                                    </span>


                                </div>
                                <div class="">

                                    <span style="font-size: 10px; margin-right: 270px; ">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-24-hours" width="13" height="13"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M4 13c.325 2.532 1.881 4.781 4 6"></path>
                                            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2"></path>
                                            <path d="M4 5v4h4"></path>
                                            <path
                                                d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2">
                                            </path>
                                            <path d="M18 15v2a1 1 0 0 0 1 1h1"></path>
                                            <path d="M21 15v6"></path>
                                        </svg>
                                        Từ 07:00 Đến 16:30

                                    </span>


                                </div>

                            </th>



                            <th scope="col ">
                                <span style="font-size: 10px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                    </svg>
                                    Đã đăng ký
                                </span>
                                <p>
                                    50/145 người
                                </p>
                                <button type="button" class="btn btn-primary" style=" width: 65px;
    height: 55px;">Đăng ký</button>

                            </th>

                        </tr>
                    </thead>

                </table>

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.col-sm-3 {
    margin-bottom: 10px;

}
</style>