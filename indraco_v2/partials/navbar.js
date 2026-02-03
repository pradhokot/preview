document.writeln(`
   <nav aria-label="main navigation" class="navbar navbar-expand-lg bg-body-secondary border-bottom py-3 py-lg-4 shadow-sm">
      <div class="container flex-nowrap d-lg-grid column-gap-lg-5" style="grid-template-columns: 1fr auto 1fr;">
         <div class="navbar-brand order-lg-1">
            <a href="index.html" class="text-reset text-decoration-none">
               <img src="img/logo-indraco-invert.png" data-light="img/logo-indraco.png" data-dark="img/logo-indraco-invert.png" alt="INDRACO Logo" class="theme-image">
            </a>
         </div>
         <div class="order-lg-3 d-flex align-items-center gap-3 column-gap-md-4">
            <ul class="list-unstyled mb-0 d-flex align-items-center flex-wrap gap-3 column-gap-md-4 ms-lg-auto">
               <li>
                  <button class="theme-toggle" aria-label="Toggle theme">
                     <svg class="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <!-- Sun -->
                        <g class="icon-sun">
                           <circle cx="12" cy="12" r="5" fill="currentColor"></circle>
                           <g stroke="currentColor" stroke-width="2">
                              <line x1="12" y1="1" x2="12" y2="4"></line>
                              <line x1="12" y1="20" x2="12" y2="23"></line>
                              <line x1="1" y1="12" x2="4" y2="12"></line>
                              <line x1="20" y1="12" x2="23" y2="12"></line>
                              <line x1="4.2" y1="4.2" x2="6.3" y2="6.3"></line>
                              <line x1="17.7" y1="17.7" x2="19.8" y2="19.8"></line>
                              <line x1="4.2" y1="19.8" x2="6.3" y2="17.7"></line>
                              <line x1="17.7" y1="6.3" x2="19.8" y2="4.2"></line>
                           </g>
                        </g>
               
                        <!-- Moon -->
                        <g class="icon-moon">
                           <path d="M21 12.8A9 9 0 1111.2 3 a7 7 0 109.8 9.8z" fill="currentColor"></path>
                        </g>
                     </svg>
                  </button>
               </li>
               <li>
                  <a href="contact.html" class="text-reset text-decoration-none">
                     <svg width="18" height="18" viewBox="0 0 640 640"><path fill="currentColor" d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"></path></svg>
                  </a>
               </li>
               <li>
                  <a href="#" target="_blank" class="text-reset text-decoration-none">
                     <svg width="18" height="18" viewBox="0 0 640 640"><path fill="currentColor" d="M94.7 136.3C101.6 112.4 123.5 96 148.4 96L492.4 96C517.3 96 539.2 112.4 546.2 136.3L569.6 216.5C582.4 260.2 549.5 304 504 304C477.7 304 454.6 289.1 443.2 266.9C431.6 288.8 408.6 304 381.8 304C355.2 304 332.1 289 320.5 267C308.9 289 285.8 304 259.2 304C232.4 304 209.4 288.9 197.8 266.9C186.4 289 163.3 304 137 304C91.4 304 58.6 260.3 71.4 216.5L94.7 136.3zM160.4 416L480.4 416L480.4 349.6C488 351.2 495.9 352 503.9 352C518.2 352 531.9 349.4 544.4 344.8L544.4 496C544.4 522.5 522.9 544 496.4 544L144.4 544C117.9 544 96.4 522.5 96.4 496L96.4 344.8C108.9 349.4 122.5 352 136.9 352C145 352 152.8 351.2 160.4 349.6L160.4 416z"></path></svg>
                  </a>
                  
               </li>
               <li>
                  <a href="#" class="text-reset text-decoration-none">
                     ID
                  </a>
               </li>
            </ul>
            <button class="navbar-toggler rounded-0 p-0 border-0 shadow-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-mobile">
               <span class="navbar-toggler-icon"></span>
            </button>
         </div>
         <nav aria-label="primary navigation (desktop)" class="navbar-collapse collapse order-lg-2">
            <ul class="list-unstyled mb-0 d-flex flex-wrap row-gap-2 column-gap-4 text-capitalize column-gap-xl-5">
               <li><a href="about.html" class="link-hover-underline">tentang kami</a></li>
               <li><a href="product.html" class="link-hover-underline">produk</a></li>
               <li><a href="download.html" class="link-hover-underline">unduh</a></li>
               <li><a href="news.html" class="link-hover-underline">berita & acara</a></li>
               <li><a href="career.html" class="link-hover-underline">karir</a></li>
            </ul>
         </nav>
      </div>
   </nav>
`)