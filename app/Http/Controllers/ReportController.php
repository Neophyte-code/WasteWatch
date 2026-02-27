<?php

namespace App\Http\Controllers;

use App\Models\LittererReport;
use App\Models\WasteReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;

class ReportController extends Controller
{
    // function to render waste page UI
    public function waste()
    {
        return Inertia::render('report-waste', []);
    }

    public function wasteStore(Request $request)
    {
        try {
            // Validate inputs
            $data = $request->validate(
                [
                    'wasteType' => 'required|string|max:255',
                    'estimatedWeight' => 'required|string',
                    'latitude' => 'required|numeric',
                    'longitude' => 'required|numeric',
                    'images' => 'required|array|min:1|max:3',
                    'images.*' => 'image|mimes:jpeg,png,jpg|max:5120'
                ],
                [
                    // Custom messages
                    'latitude.required' => 'You must pin the location on the map before submitting.',
                    'longitude.required' => 'Location coordinates are missing.',
                ]
            );

            // Store data
            $report = WasteReport::create([
                'waste_type' => $data['wasteType'],
                'weight' => $data['estimatedWeight'],
                'latitude' => $data['latitude'],
                'longitude' => $data['longitude'],
                'user_id' => Auth::id(),
            ]);

            // Store Images
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $file) {
                    $path = $file->store('waste_reports', 'public');
                    $report->images()->create([
                        'file_path' => $path,
                    ]);
                }
            }

            return redirect()->back()->with('success', 'Waste report submitted successfully!');
        } catch (ValidationException $e) {
            throw $e;
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong on the server.');
        }
    }

    //function too render litterer page UI
    public function litterer()
    {
        return Inertia::render('report-litterer', []);
    }

    //function to submit litterer report
    public function littererStore(Request $request)
    {

        try {

            //validate inputs
            $data = $request->validate(
                [
                    'name' => 'nullable|string|max:255',
                    'estimatedAge' => 'required|integer|min:0|max:150',
                    'gender' => 'required|string|in:male,female',
                    'distinguishingFeatures' => 'required|string|max:1000',
                    'latitude' => 'required|numeric',
                    'longitude' => 'required|numeric',
                    'images' => 'required|array|min:1|max:3',
                    'images.*' => 'image|mimes:jpeg,png,jpg|max:5120'
                ],
                [
                    // Custom messages
                    'latitude.required' => 'You must pin the location on the map before submitting.',
                    'longitude.required' => 'Location coordinates are missing.',
                ]
            );

            $report = LittererReport::create([
                'name' => $data['name'],
                'estimated_age' => $data['estimatedAge'],
                'gender' => $data['gender'],
                'distinguishing_features' => $data['distinguishingFeatures'],
                'latitude' => $data['latitude'],
                'longitude' => $data['longitude'],
                'user_id' => Auth::id(),
            ]);

            // Store Images
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $file) {
                    $path = $file->store('litterer_reports', 'public');
                    $report->images()->create([
                        'file_path' => $path,
                    ]);
                }
            }
            return redirect()->back()->with('success', 'Litterer report submitted successfully!');
        } catch (ValidationException $e) {
            throw $e;
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong on the server.');
        }
    }
}
