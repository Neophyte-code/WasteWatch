<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WasteWise</title>
  @vite('resources/css/app.css')
</head>

<body>
  <!-- header -->
  <x-authHeader />

  <main class="">
    <div id="landing" class="flex items-center justify-center gap-4 h-full bg-cover p-10" ">
      <div class=" h-full flex flex-col-reverse lg:flex-row gap-5 p-2 items-center">

      <div class="p-5 text-sm/7 w-full">
        <h2 class="text-white font-bold text-4xl sm:text-5xl">Welcome to Waste<span class="text-green-600">Watch</span></h2>
        <h3 class="text-3xl sm:text-4xl font-bold mt-2">Earn by reporting <span id="report" class="text-green-600"></span></h3>
        <p class="text-lg sm:text-xl mt-5">WasteWatch is a user-friendly system designed to help individuals and communities report waste effectively. Our platform enables users to easily log and track waste, providing valuable insights into waste management practices and identifying areas for improvement. By promoting transparency and accountability, WasteWatch aims to contribute to a more sustainable future for our planet.</p>
      </div>

      <div class="p-5 min-h-125 w-full flex justify-center">
        <form class="max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
          <h1 class="text-macha-dark text-3xl mt-10 font-bold">Login</h1>
          <p class="text-white text-sm mt-2">Please sign in to continue</p>
          <div class="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
            </svg>
            <input type="email" placeholder="Email" class="bg-transparent text-white placeholder-gray-500 outline-none text-sm w-full h-full" required>
          </div>

          <div class="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
            </svg>
            <input type="password" placeholder="Password" class="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" required>
          </div>
          <div class="mt-5 text-left text-macha-medium">
            <a class="text-sm" href="#">Forgot password?</a>
          </div>

          <button type="submit" class="mt-2 w-full h-11 rounded-full text-white bg-macha-dark hover:opacity-90 transition-opacity">
            Login
          </button>
          <p class="text-white text-sm mt-3 mb-11">Don’t have an account? <a class="text-macha-medium" href="#">Sign up</a></p>
        </form>
      </div>
    </div>
    </div>
  </main>


  <!-- footer -->
  <x-footer />
  <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
  <script>
    var app = document.getElementById('report');
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 150,
    });
    typewriter
      .typeString('Waste')
      .pauseFor(2000)
      .deleteAll()
      .typeString('Litterer')
      .pauseFor(2000)
      .start();
  </script>
  <script>
    const el = document.getElementById('landing');

    function updateBg() {
      if (window.innerWidth < 640) {
        el.style.backgroundImage = "url('/images/landing-portrait.jpg')";
      } else {
        el.style.backgroundImage = "url('/images/landing.jpg')";
      }
    }

    updateBg();
    window.addEventListener('resize', updateBg);
  </script>
</body>

</html>