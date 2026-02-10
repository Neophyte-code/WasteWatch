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

  <main class="h-screen">
    <div class="flex items-center justify-center gap-4 h-screen bg-cover p-10" style="background-image: url('/images/landing.jpg')">
      <div class="h-full max-w-2xl flex justify-center flex-col mr-auto">
        <div class="p-5 text-sm/7">
          <h2 class="text-white font-bold text-5xl">Welcome to Waste<span class="text-green-600">Watch</span></h2>
          <h3 class="text-4xl font-bold mt-2">Earn by reporting <span id="report" class="text-green-600"></span></h3>
          <p class="text-xl mt-5">WasteWatch is a user-friendly system designed to help individuals and communities report waste effectively. Our platform enables users to easily log and track waste, providing valuable insights into waste management practices and identifying areas for improvement. By promoting transparency and accountability, WasteWise aims to contribute to a more sustainable future for our planet.</p>
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