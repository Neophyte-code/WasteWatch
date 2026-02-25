<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class AnnouncementController extends Controller
{
    //

    public function index()
    {
        $announcements = Announcement::orderBy('date', 'asc')->get()
            ->map(function ($announcement) {
                return [
                    'id' => $announcement->id,
                    'to' => $announcement->to,
                    'what' => $announcement->what,
                    'date' => Carbon::parse($announcement->date)->format('M d, Y'),
                    'time' => Carbon::parse($announcement->time)->format('h:i A'),
                    'location' => $announcement->location,
                    'message' => $announcement->message,
                ];
            });

        return Inertia::render('announcements', [
            'announcements' => $announcements
        ]);
    }
}
