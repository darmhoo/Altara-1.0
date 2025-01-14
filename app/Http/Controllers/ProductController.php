<?php

namespace App\Http\Controllers;

use App\Http\Filters\NewOrderFilter;
use App\Http\Filters\ProductFilter;
use App\Http\Requests\ProductRequest;
use App\Imports\ProductsImport;
use App\Product;
use App\Repositories\NewOrderRepository;
use App\Repositories\ProductRepository;
use App\Services\ProductService;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Request;
use Maatwebsite\Excel\Facades\Excel;

class ProductController extends Controller
{
    private $productRepo;
    private $newOrderRepository;


    public function __construct(ProductRepository $productRepository, NewOrderRepository $newOrderRepository)
    {
        $this->productRepo = $productRepository;
        $this->newOrderRepository = $newOrderRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param ProductFilter $filter
     * @return Response
     */
    public function index(ProductFilter $filter)
    {
        $products = $this->productRepo->getAll($filter);

        return $this->sendSuccess($products->toArray(), 'Products retrieved successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductRequest $request
     * @return Response
     */
    public function store(ProductRequest $request)
    {
        $data = array_merge($request->validated(), ['user_id' => auth()->user()->id]);
        $product = $this->productRepo->store($data);

        return $this->sendSuccess($product->toArray(), 'Product Successfully Created');
    }

    /**
     * Display the specified resource.
     *
     * @param Product $product
     * @return Response
     */
    public function show(Product $product)
    {
        return $this->sendSuccess($product->toArray(), 'Product retrieved successfully');
    }

    /**
     * @param Product $product
     * @param ProductRequest $request
     *
     * @return Response
     */
    public function update(Product $product, ProductRequest $request)
    {
        $data = array_merge($request->validated(), ['user_id' => auth()->user()->id]);
        $product = $this->productRepo->update($product, $data);

        return $this->sendSuccess($product->toArray(), 'Product updated successfully');
    }


    /**
     * @param Product $product
     * @return Response
     * @throws \Exception
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return $this->sendSuccess([], 'Product deleted successfully');
    }

    /**
     * @return Response
     */
    public function uploadSheet()
    {
        Excel::import(new ProductsImport(), Request::file('file'));

        return $this->sendSuccess([], 'Product Uploaded successfully');
    }

    public function fetchLeastAndMostOrderedProduct (NewOrderFilter $filter, ProductService $productService, HttpRequest $request)
    {
        $limit = $request['numberOfProduct'];
        $newOrdersQuery = $this->newOrderRepository->reportQuery($filter)->latest('new_orders.created_at');
        $additional = $productService->getProductByRanks($newOrdersQuery, $limit ?? 3);
        return $this->sendSuccess(["meta" => $additional], 'Products retrieved successfully');
    }
}
