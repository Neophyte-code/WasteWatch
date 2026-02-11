<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

//landing page
Route::get('/', function () {
    return view('welcome');
});

//login
// Route::get('/login', [AuthController::class, 'login']);
