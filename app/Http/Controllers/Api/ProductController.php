<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return response([
            'status' => true,
            'Products' => $products
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'image|required',
            'price' => 'integer|required',
            'offer' => 'integer|nullable'
        ]);
        $image = $request->image->store('image');
        $data = [
            'title' => $request->title,
            'image' => 'storage/'.$image,
            'price' => $request->price,
            'offer' => $request->offer,
        ];
        $product = Product::create($data);
        return response([
            'status' => true,
            'message' => 'Product created successfully.',
            'post' => $product
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response([
           'status' => true,
           'Product' => $product,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'image|required',
            'price' => 'integer|required',
            'offer' => 'integer|nullable'
        ]);
        $image = $request->image->store('image');
        $data = [
            'title' => $request->title,
            'image' => 'storage/'.$image,
            'price' => $request->price,
            'offer' => $request->offer,
        ];
        $product->update($data);

        return response([
            'status' => true,
            'message' => 'Product updated successfully.',
            'post' => $product
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response([
            'status' => true,
            'message' => 'Post deleted.'
        ], 200);
    }
}
