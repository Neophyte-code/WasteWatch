<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    //

    public function index()
    {
        $announcements = Announcement::orderBy('date', 'asc')->get();

        return Inertia::render('announcements', [
            'announcements' => $announcements
        ]);
    }
}
