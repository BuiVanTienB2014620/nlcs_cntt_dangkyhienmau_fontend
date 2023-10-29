<template>
    <div class=" ">
        <section class=" h-custom" style="background-color: #669edb;">
            <div class="container py-5 h-50">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-8 col-xl-6">
                        <div class="card rounded-3">
                            <img src="https://img.freepik.com/free-photo/world-blood-donor-day-creative-collage_23-2149378359.jpg"
                                class="w-100" style="border-top-left-radius: .3rem; border-top-right-radius: .3rem;"
                                alt="Sample photo">
                            <div class="card-body p-2 p-md-2">
                                <h3 class="mb-2 pb-2 pb-md-0 mb-md-2 px-md-1"></h3>

                                <form class="px-md-1">

                                    <div class="form-outline mb-2">
                                        <label class="form-label" for="form3Example1q">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-map-pin-filled" width="24" height="24"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                                                    stroke-width="0" fill="currentColor"></path>
                                            </svg>
                                            Địa chỉ hiến máu</label>
                                        <input type="text" id="form3Example1q" class="form-control" />

                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 mb-2">

                                            <div class="form-outline datepicker">
                                                <label for="exampleDatepicker1" class="form-label">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="icon icon-tabler icon-tabler-calendar-event" width="24"
                                                        height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                                                        </path>
                                                        <path d="M16 3l0 4"></path>
                                                        <path d="M8 3l0 4"></path>
                                                        <path d="M4 11l16 0"></path>
                                                        <path d="M8 15h2v2h-2z"></path>
                                                    </svg>
                                                    Ngày hiến máu</label>
                                                <input type="text" class="form-control" id="exampleDatepicker1" />

                                            </div>

                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-gender-bigender" width="24" height="24"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M11 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                                <path d="M19 3l-5 5"></path>
                                                <path d="M15 3h4v4"></path>
                                                <path d="M11 16v6"></path>
                                                <path d="M8 19h6"></path>
                                            </svg>

                                            <select class="select">
                                                <option value="1" disabled>Giới tính</option>
                                                <option value="2">Nam</option>
                                                <option value="3">Nữ</option>

                                            </select>

                                        </div>
                                    </div>

                                    <div class="mb-2">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-droplet-half-filled" width="24"
                                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M12 2l.07 .003a2.41 2.41 0 0 1 1.825 .907l.108 .148l4.92 7.306c1.952 3.267 1.191 7.42 -1.796 9.836c-2.968 2.402 -7.285 2.402 -10.254 0c-2.917 -2.36 -3.711 -6.376 -1.901 -9.65l.134 -.232l4.893 -7.26c.185 -.275 .426 -.509 .709 -.686a2.426 2.426 0 0 1 1.066 -.36l.226 -.012zm-1 3.149l-4.206 6.24c-1.44 2.41 -.88 5.463 1.337 7.257a6.101 6.101 0 0 0 2.869 1.276v-14.773z"
                                                    stroke-width="0" fill="currentColor"></path>
                                            </svg>
                                            nhóm máu
                                        </p>

                                        <select class="select">
                                            <option value="1" disabled>Nhóm máu</option>
                                            <option value="2">A</option>
                                            <option value="3">B</option>
                                            <option value="4">AB</option>
                                            <option value="2">O</option>
                                        </select>

                                    </div>



                                    <div class="row mb-2 pb-1 pb-md-0 mb-md-2">
                                        <div class="col-md-6">

                                            <div class="form-outline">
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="icon icon-tabler icon-tabler-24-hours" width="24" height="24"
                                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                                                    Thời gian hiến
                                                </p>


                                                <input type="text" id="form3Example1w" class="form-control" />

                                            </div>

                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-lg mb-1">Gửi</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {

}
</script>

<style></style>