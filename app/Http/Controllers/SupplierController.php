<?php

namespace App\Http\Controllers;

use App\Bank;
use App\Http\Requests\SupplierRequest;
use App\Repositories\SupplierRepository;
use App\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    private $supplierRepository;

    /**
     * SupplierController constructor.
     * @param SupplierRepository $supplierRepository
     */
    public function __construct(SupplierRepository $supplierRepository)
    {
        $this->supplierRepository = $supplierRepository;
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $suppliers = $this->supplierRepository->all();

        return $this->sendSuccess($suppliers->toArray(), 'Suppliers retrieved successfully');
    }

    /**
     * @param SupplierRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(SupplierRequest $request)
    {
        $supplier = $this->supplierRepository->store($request->validated());

        return $this->sendSuccess($supplier->toArray(), 'Supplier Successfully Created');
    }

    /**
     * @param Supplier $supplier
     * @return \Illuminate\Http\Response
     */
    public function show(Supplier $supplier)
    {
        return $this->sendSuccess($supplier->toArray(), 'Brand retrieved successfully');
    }

    /**
     * @param Supplier $supplier
     * @param SupplierRequest $request
     * @return \Illuminate\Http\Response
     */
    public function update(Supplier $supplier, SupplierRequest $request)
    {
        $supplier = $this->supplierRepository->update($supplier, $request->validated());

        return $this->sendSuccess($supplier->toArray(), 'Supplier updated successfully');
    }

    /**
     * @param Supplier $supplier
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Supplier $supplier)
    {
        $supplier->delete();

        return $this->sendSuccess([],'Supplier deleted successfully');
    }

}
