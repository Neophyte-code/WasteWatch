<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    // function to render waste page UI
    public function waste()
    {
        return Inertia::render('report-waste', []);
    }

    //function too render litterer page UI
    public function litterer()
    {
        return Inertia::render('report-litterer', []);
    }
}
