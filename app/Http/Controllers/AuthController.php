<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //function for login
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect('/home');
        }

        return back()->with('error', 'Invalid email or password');
    }

    //function for signup
    public function signup(Request $request)
    {
        // Validate
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'email|required|unique:users',
            'password' => 'required|min:8|confirmed'
        ]);

        // Create user
        $user = User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        // Login the user
        Auth::login($user);

        // Regenerate session
        $request->session()->regenerate();

        // Redirect
        return redirect('/home')->with('success', 'Account created successfully!');
    }


    //function to show homepage
    public function index()
    {
        return view('pages.home');
    }
}
