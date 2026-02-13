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
    <x-mainHeader />

    <main class="h-full sm:h-screen">
        <div id="landing" class="flex items-center justify-start gap-4 h-full bg-cover p-10">

            <div class="p-5 text-sm/7 w-175">
                <h2 class="text-white font-bold text-4xl sm:text-5xl">Welcome to Waste<span class="text-green-600">Watch</span></h2>
                <h3 class="text-3xl sm:text-4xl font-bold mt-2 text-white">Earn by reporting <span id="report" class="text-green-600"></span></h3>
                <p class="text-lg sm:text-xl mt-5 text-white">WasteWatch is a user-friendly system designed to help individuals and communities report waste effectively. Our platform enables users to easily log and track waste, providing valuable insights into waste management practices and identifying areas for improvement. By promoting transparency and accountability, WasteWatch aims to contribute to a more sustainable future for our planet.</p>
                <div class="flex flex-col mt-5 gap-4 sm:flex-row">
                    <a href="/report-waste" id="reportWasteBtn" class="text-green-50 hover:text-green-500"><button class="w-full border-2 border-green-500 rounded py-2 px-6 text-base bg-green-500 hover:text-green hover:bg-transparent hover:border-2 hover:border-green-500 transition-colors sm:w-auto sm:text-lg md:text-xl">Report Waste</button></a>
                    <a href="/report-litterer" id="reportLittererBtn" class="text-green-500 hover:text-green-50"><button class="w-full border-2 border-green-500 rounded py-2 px-6 text-base text-green hover:bg-green-500 hover:text-green-50 transition-colors sm:w-auto sm:text-lg md:text-xl">Report Litterer</button></a>
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