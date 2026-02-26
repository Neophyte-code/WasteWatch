<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    //
    public function waste()
    {
        return Inertia::render('report-waste', []);
    }
}
