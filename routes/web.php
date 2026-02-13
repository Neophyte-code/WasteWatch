<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

//landing page
Route::get('/', function () {
    return view('welcome');
});

//login
Route::post('/login', [AuthController::class, 'login']);

//signup
Route::post('/signup', [AuthController::class, 'signup']);

//home page
Route::get('/home', [AuthController::class, 'index']);
