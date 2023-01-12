<?php

use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\AuthController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('post', PostController::class)->middleware('auth:sanctum');
Route::apiResource('product', ProductController::class)->middleware('auth:sanctum');

Route::apiResource('user', UserController::class)->only(['store', 'update']);

Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
