<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AnnouncementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $announcements = [
            [
                'what' => 'Community Tree Planting Activity',
                'to' => 'All Barangay Volunteers',
                'date' => Carbon::now()->addDays(5)->format('Y-m-d'),
                'time' => '06:00:00',
                'location' => 'Upland Watershed Area, Brgy. San Jose',
                'message' => 'Join us in our mission to reforest our local watershed. Please bring your own digging tools and gloves. Seedlings will be provided.',
            ],
            [
                'what' => 'International Coastal Clean-up Drive',
                'to' => 'General Public',
                'date' => Carbon::now()->addDays(10)->format('Y-m-d'),
                'time' => '05:30:00',
                'location' => 'Public Beach Front Area',
                'message' => 'Let’s keep our oceans plastic-free! Participants are encouraged to bring reusable water bottles and sacks for waste collection.',
            ],
            [
                'what' => 'Solid Waste Management Seminar',
                'to' => 'Barangay Captains and SK Chairmen',
                'date' => Carbon::now()->addDays(2)->format('Y-m-d'),
                'time' => '09:00:00',
                'location' => 'Municipal Session Hall',
                'message' => 'A mandatory briefing on the strict implementation of "No Segregation, No Collection" policy within the municipality.',
            ],
            [
                'what' => 'Distribution of Free Fruit-Bearing Seedlings',
                'to' => 'Registered Local Farmers',
                'date' => Carbon::now()->addDays(7)->format('Y-m-d'),
                'time' => '08:00:00',
                'location' => 'MENRO Nursery Office',
                'message' => 'The MENRO office will be distributing Mango, Rambutan, and Cacao seedlings. Please bring your Farmer ID for verification.',
            ],
            [
                'what' => 'Climate Change Adaptation Workshop',
                'to' => 'Local Stakeholders and NGOs',
                'date' => Carbon::now()->addDays(14)->format('Y-m-d'),
                'time' => '13:30:00',
                'location' => 'Community Training Center',
                'message' => 'Discussion on local climate risks and developing a 5-year resilience plan for the municipality.',
            ],
            [
                'what' => 'Strict Implementation of Anti-Smoke Belching',
                'to' => 'Public Utility Vehicle Drivers',
                'date' => Carbon::now()->addDays(3)->format('Y-m-d'),
                'time' => '08:00:00',
                'location' => 'Main Highway Checkpoint',
                'message' => 'Random emission testing will be conducted. Ensure your vehicles are well-maintained to avoid penalties and fines.',
            ],
            [
                'what' => 'Riverside Bamboo Planting',
                'to' => 'Eco-Warriors Club',
                'date' => Carbon::now()->addDays(20)->format('Y-m-d'),
                'time' => '07:00:00',
                'location' => 'Riverbank Zone B',
                'message' => 'Bamboo planting to prevent soil erosion along the riverbanks. Breakfast will be served for all volunteers.',
            ],
            [
                'what' => 'Hazardous Waste Collection Day',
                'to' => 'Business Owners and Households',
                'date' => Carbon::now()->addDays(12)->format('Y-m-d'),
                'time' => '09:00:00',
                'location' => 'Municipal Materials Recovery Facility (MRF)',
                'message' => 'Proper disposal of e-waste, batteries, and old paints. Do not mix hazardous waste with regular household trash.',
            ],
            [
                'what' => 'Earth Hour Celebration 2026',
                'to' => 'All Residents',
                'date' => '2026-03-28',
                'time' => '20:30:00',
                'location' => 'Town Plaza / Nationwide',
                'message' => 'Switch off your lights for one hour to show your commitment to the planet. We will have a candle-lit program at the plaza.',
            ],
            [
                'what' => 'Wildlife Conservation Awareness Talk',
                'to' => 'Senior High School Students',
                'date' => Carbon::now()->addDays(18)->format('Y-m-d'),
                'time' => '10:00:00',
                'location' => 'National High School Covered Court',
                'message' => 'An educational session regarding the protected species found within our municipal forests and the laws protecting them.',
            ],
        ];

        foreach ($announcements as $announcement) {
            DB::table('announcements')->insert(array_merge($announcement, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}
