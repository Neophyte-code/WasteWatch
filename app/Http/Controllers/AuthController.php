<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //function for login
    public function login()
    {
        dd('login controller is reach');
    }

    //function for signup
    public function signup(Request $request)
    {
        //validate
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'email|required|unique:users',
            'password' => 'required|min:8|confirmed'
        ]);

        //create user
        $user = User::create([
            'name' => $data['fullname'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        //auto login
        Auth::login($user);

        return redirect('/home');
    }
}
