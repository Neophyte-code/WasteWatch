<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WasteWise</title>
  @vite([
  'resources/css/app.css',
  'resources/js/auth.js'
  ])
</head>

<body>
  <!-- header -->
  <x-authHeader />

  <main class="">
    <div id="landing" class="flex items-center justify-center gap-4 h-full bg-cover p-10">
      <div class=" h-full flex flex-col-reverse lg:flex-row gap-5 p-2 items-center">

        <div class="p-5 text-sm/7 w-full">
          <h2 class="text-white font-bold text-4xl sm:text-5xl">Welcome to Waste<span class="text-green-600">Watch</span></h2>
          <h3 class="text-3xl sm:text-4xl font-bold mt-2 text-white">Earn by reporting <span id="report" class="text-green-600"></span></h3>
          <p class="text-lg sm:text-xl mt-5 text-white">WasteWatch is a user-friendly system designed to help individuals and communities report waste effectively. Our platform enables users to easily log and track waste, providing valuable insights into waste management practices and identifying areas for improvement. By promoting transparency and accountability, WasteWatch aims to contribute to a more sustainable future for our planet.</p>
          <div class="flex flex-col mt-5 gap-4 sm:flex-row">
            <a href="#" id="reportWasteBtn" class="text-green-50 hover:text-green-500"><button class="w-full border-2 border-green-500 rounded py-2 px-6 text-base bg-green-500 hover:text-green hover:bg-transparent hover:border-2 hover:border-green-500 transition-colors sm:w-auto sm:text-lg md:text-xl">Report Waste</button></a>
            <a href="#" id="reportLittererBtn" class="text-green-500 hover:text-green-50"><button class="w-full border-2 border-green-500 rounded py-2 px-6 text-base text-green hover:bg-green-500 hover:text-green-50 transition-colors sm:w-auto sm:text-lg md:text-xl">Report Litterer</button></a>
          </div>
        </div>

        <div class="p-5 min-h-125 w-full flex justify-center">

          <!-- login form -->
          <form id="login-form" action="/login" method="POST" class="hidden max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
            @csrf
            <h1 class="text-macha-dark text-3xl mt-10 font-bold">Login</h1>
            <p class="text-white text-sm mt-2">Please sign in to continue</p>
            <div class="flex items-center border border-gray-300/60 w-full mt-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 h-12 rounded-md overflow-hidden pl-2 gap-2">
              <x-eva-email-outline class="h-6" />
              <input type="email" name="name" placeholder="email" class="bg-transparent text-white placeholder-amber-50 outline-none text-sm w-full h-full" required>
            </div>

            <div class="flex items-center mt-4 w-full border border-gray-300/60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 h-12 rounded-lg overflow-hidden pl-2 gap-2">
              <x-bi-lock-fill class="h-6" />
              <input type="password" name="password" placeholder="Password" class="bg-transparent text-white placeholder-amber-50 outline-none text-sm w-full h-full" required>
            </div>
            <div class="mt-5 text-left text-macha-medium">
              <a class="text-sm" href="#">Forgot password?</a>
            </div>

            <button type="submit" class="mt-2 w-full h-11 rounded-full text-white bg-macha-dark hover:opacity-90 transition-opacity">
              Login
            </button>
            <p class="text-white text-sm mt-3 mb-11">Don’t have an account? <a class="text-macha-medium" id="toggle-to-signup">Sign up</a></p>
          </form>

          <!-- sign up form -->
          <form id="signup-form" action="/signup" method="POST" class="{{ $errors->any() ? '' : 'hidden' }} max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            @csrf
            <h1 class="text-macha-dark text-3xl mt-10 font-bold">Create an account</h1>
            <p class="text-white text-sm mt-2">create an account to continue</p>

            <!-- full name -->
            <div class="flex items-center mt-4 w-full border border-gray-300/60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 h-12 rounded-lg overflow-hidden pl-2 gap-2">
              <x-feathericon-user class="h-6" />
              <input type="name" name="name" placeholder="Full name" class="bg-transparent text-white placeholder-amber-50 outline-none text-sm w-full h-full" required>
            </div>

            <!-- email -->
            <div class="flex items-center border border-gray-300/60 w-full mt-6 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 h-12 rounded-md overflow-hidden pl-2 gap-2">
              <x-eva-email-outline class="h-6" />
              <input type="email" name="email" placeholder="Email" class="bg-transparent text-white placeholder-amber-50 outline-none text-sm w-full h-full" required>
            </div>

            <!-- password -->
            <div class="flex items-center mt-4 w-full border border-gray-300/60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 h-12 rounded-lg overflow-hidden pl-2 gap-2">
              <x-bi-lock-fill class="h-6" />
              <input type="password" name="password" placeholder="Password" class="bg-transparent text-white placeholder-amber-50 outline-none text-sm w-full h-full" required>
            </div>

            <!-- confirm password -->
            <div class="flex items-center mt-4 w-full border border-gray-300/60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 h-12 rounded-lg overflow-hidden pl-2 gap-2">
              <x-bi-lock-fill class="h-6" />
              <input type="password" name="password_confirmation" placeholder="Confirm Password" class="bg-transparent text-white placeholder-amber-50 outline-none text-sm w-full h-full" required>
            </div>

            <button type="submit" class="mt-5 w-full h-11 rounded-full text-white bg-macha-dark hover:opacity-90 transition-opacity">
              Signup
            </button>

            <p id="to-login" class="text-white text-center text-sm mt-3 mb-5">Already have an account? <a class="text-macha-medium" id="toggle-to-login">Sign in</a></p>
            <x-errorMessage />
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
</body>

</html>