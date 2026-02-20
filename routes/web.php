<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\AnnouncementController;


Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/about', function () {
    return Inertia::render('about');
})->middleware(['auth', 'verified'])->name('about');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->middleware(['auth', 'verified'])->name('/contact');

Route::get('/announcement', [AnnouncementController::class, 'index'])->name('announcements');

require __DIR__ . '/settings.php';
