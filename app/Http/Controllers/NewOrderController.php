<?php

namespace App\Http\Controllers;

use App\Http\Filters\NewOrderFilter;
use App\Http\Requests\NewOrderRequest;
use App\NewOrder;
use App\Repositories\NewOrderRepository;
use Illuminate\Http\Response;

class NewOrderController extends Controller
{

    private $newOrderRepository;

    public function __construct(NewOrderRepository $newOrderRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param NewOrderFilter $newOrderFilter
     * @return Response
     */
    public function index(NewOrderFilter $newOrderFilter)
    {
        $orders = $this->newOrderRepository->query($newOrderFilter);

        return $this->sendSuccess($orders->toArray(), 'Orders retrieved successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NewOrderRequest $request
     * @return Response
     */
    public function store(NewOrderRequest $request)
    {
        $order = $this->newOrderRepository->store($request->validated());

        return $this->sendSuccess($order->toArray(), 'Order Successfully Created');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NewOrder $new_order
     * @param NewOrderRequest $request
     * @return Response
     */
    public function update(NewOrder $new_order, NewOrderRequest $request)
    {
        $order = $this->newOrderRepository->update($new_order, $request->validated());

        return $this->sendSuccess($order->toArray(), 'Order updated successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param NewOrder $new_order
     * @return Response
     */
    public function show(NewOrder $new_order)
    {
        return $this->sendSuccess($new_order->toArray(), 'Order retrieved successfully');
    }

    public function repossess(NewOrder $new_order)
    {

        $result = $this->newOrderRepository->repossess($new_order);
        return $this->sendSuccess($result, 'Order repossessed successfully');
    }
    public function report(NewOrderFilter $filter)
    {
        $newOrdersQuery = $this->newOrderRepository->query($filter)->latest();
        $newOrders = clone $newOrdersQuery->get();
        $orders =  $newOrders->groupBy('branch.name');
        $additional =  $orders->map(function ($item, $key) {
            return [
                'branch_name' => $item[0]->branch->name,
                'avg_price_of_prod_per_show_room' => number_format($item->avg('product_price'), 2),
                'total_potential_revenue_sold_per_showroom' => number_format($item->avg('product_price') * count($item), 2),
                'number_of_sales' => count($item),
            ];
        });
        $additional = $additional->put('total_no_sales', count($newOrders));
        return $this->sendSuccess([$newOrdersQuery->paginate((int)request('limit', 10)), "meta" => $additional], 'Orders retrieved successfully');
    }
}
