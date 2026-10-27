const footerHTML =`<footer class="bg-black text-white/70 pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px]">
            <div class="container">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px]">
                    <div class="lg:col-span-1 ltr:xl:pr-[50px] rtl:xl:pl-[50px]">
                        <a
                            href="index.html"
                            class="inline-block mb-[20px] md:mb-[25px] lg:mb-[30px]"
                        >
                            <img src="assets/images/white-logo.svg" alt="white-logo">
                        </a>
                        <p>
                            Your trusted partner for self-drive car rentals. Experience the freedom of the open road with our premium fleet and exceptional service.
                        </p>
                        <div class="flex items-center gap-[10px] mt-[20px] lg:mt-[25px]">
                            <a href="#" class="flex items-center justify-center text-white w-[35px] md:w-[40px] h-[35px] md:h-[40px] border border-[#292F31] rounded-full hover:bg-primary hover:border-primary" target="_blank">
                                <i class="ri-facebook-fill"></i>
                            </a>
                            <a href="#" class="flex items-center justify-center text-white w-[35px] md:w-[40px] h-[35px] md:h-[40px] border border-[#292F31] rounded-full hover:bg-primary hover:border-primary" target="_blank">
                                <i class="ri-twitter-x-fill"></i>
                            </a>
                            <a href="#" class="flex items-center justify-center text-white w-[35px] md:w-[40px] h-[35px] md:h-[40px] border border-[#292F31] rounded-full hover:bg-primary hover:border-primary" target="_blank">
                                <i class="ri-linkedin-fill"></i>
                            </a>
                            <a href="#" class="flex items-center justify-center text-white w-[35px] md:w-[40px] h-[35px] md:h-[40px] border border-[#292F31] rounded-full hover:bg-primary hover:border-primary" target="_blank">
                                <i class="ri-instagram-line"></i>
                            </a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[25px]">
                        <div class="ltr:md:pr-[80px] rtl:md:pl-[80px]">
                            <h3 class="mb-[20px] lg:mb-[25px] !text-white text-base md:text-lg lg:text-xl leading-[1.2]">
                                Company
                            </h3>
                            <ul>
                                <li class="mb-[8px] last:mb-0">
                                    <a
                                        href="about.html"
                                        class="text-[#d9d9d9] hover:text-primary"
                                    >
                                        About us
                                    </a>
                                </li>
                                <li class="mb-[8px] last:mb-0">
                                    <a
                                        href="service.html"
                                        class="text-[#d9d9d9] hover:text-primary"
                                    >
                                        Our Services
                                    </a>
                                </li>
                                <li class="mb-[8px] last:mb-0">
                                    <a
                                        href="vehicle-details.html"
                                        class="text-[#d9d9d9] hover:text-primary"
                                    >
                                        Vehicles
                                    </a>
                                </li>
                                <li class="mb-[8px] last:mb-0">
                                    <a
                                        href="testimonials.html"
                                        class="text-[#d9d9d9] hover:text-primary"
                                    >
                                        Testimonials
                                    </a>
                                </li>
                                <li class="mb-[8px] last:mb-0">
                                    <a
                                        href="contact.html"
                                        class="text-[#d9d9d9] hover:text-primary"
                                    >
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="ltr:md:-ml-[80px] rtl:md:-mr-[80px] ltr:md:pr-[45px] rtl:md:pl-[45px]">
                            <h3 class="mb-[20px] lg:mb-[25px] !text-white text-base md:text-lg lg:text-xl leading-[1.2]">
                                Contact
                            </h3>
                            <ul class="text-[#d9d9d9]">
                                <li class="mb-[5px] last:mb-0 flex items-center flex-wrap gap-[5px]">
                                    Call:
                                    <a
                                        href="tel:+880 1772 29 52 68"
                                        class="font-bold md:text-lg lg:text-xl text-white hover:text-primary"
                                    >
                                        +880 1772 29 52 68
                                    </a>
                                </li>
                                <li class="mb-[5px] last:mb-0 flex items-center flex-wrap gap-[5px]">
                                    Email:
                                    <a href="hkl.saddam@gmail.com" class="font-bold md:text-lg lg:text-xl text-primary hover:underline">
                                        <span class="__cf_email__" data-cfemail="5b333e3737341b293e352f2a75383436">hkl.saddam@gmail.com</span>
                                    </a>
                                </li>
                                <li class="mb-[5px] last:mb-0 flex items-center flex-wrap gap-[5px]">
                                    Address:
                                    <a
                                        href="#"
                                        target="_blank"
                                        class="font-semibold text-white hover:text-primary"
                                    >
                                        Jamgora, Ashulia, Savar, Dhaka, Bangladesh
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="ltr:md:-ml-[45px] rtl:md:-mr-[45px] sm:col-span-2 md:col-span-1">
                            <h3 class="mb-[20px] lg:mb-[25px] !text-white text-base md:text-lg lg:text-xl leading-[1.2]">
                                Subscribe To Our newsletter
                            </h3>
                            <form action="#">
                                <input
                                    type="email"
                                    class="form-input !border-[#D9D9D9]/30 !bg-transparent !text-white rounded-[5px] placeholder:!text-white/70 focus:placeholder:!text-transparent"
                                    placeholder="Enter your email address"
                                >
                                <button
                                    type="submit"
                                    class="primary-btn group flex-none hover:!bg-dark mt-[10px]"
                                >
                                    <span>
                                        Subscribe
                                    </span>
                                    <i class="ri-send-plane-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px]"></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[25px] border-t border-[#292F31] py-[20px] md:py-[25px] lg:py-[30px]">
                    <p class="text-white !mb-0">
                        © Saddamdidar. All Rights Reserved. Powered by <a href="#" class="text-primary font-semibold hover:underline" target="_blank">Saddamdidar</a>
                    </p>
                    <ul class="flex items-center gap-[15px] lg:gap-[20px] md:justify-end">
                        <li>
                            <a href="privacy-policy.html" class="text-white hover:text-primary">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <span class="block w-px h-[17px] bg-[#D9D9D9]/20"></span>
                        </li>
                        <li>
                            <a href="terms-of-service.html" class="text-white hover:text-primary">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>`;


        //Inject footer

        document.getElementById("footer-placeholder").innerHTML = footerHTML;