<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\ReportController;

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
Route::get('/report-waste', [ReportController::class, 'waste'])->name('report-waste');
Route::get('/report-litterer', [ReportController::class, 'litterer'])->name('report-litterer');
Route::post('/report-waste', [ReportController::class, 'wasteStore'])->name('waste-reports.store');
Route::post('/report-litterer', [ReportController::class, 'littererStore'])->name('litterer-reports.store');
require __DIR__ . '/settings.php';
