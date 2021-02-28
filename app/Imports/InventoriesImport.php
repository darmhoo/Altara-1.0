<?php

namespace App\Imports;

use App\Branch;
use App\Inventory;
use App\InventoryStatus;
use App\InventoryDictionary;
use App\Product;
use App\Supplier;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithBatchInserts;

class InventoriesImport implements ToCollection, WithHeadingRow
{

    /**
     * @inheritDoc
     */
    public function collection(Collection $collection)
    {
        $branches = Branch::all();
        $supplier_id = Supplier::first()->id;
        $inventory_id = InventoryStatus::where('status', InventoryStatus::AVAILABLE)->first()->id;
        $t = 0;

        foreach ($collection as $row) {
            $t++;
            print_r($t);
            foreach ($branches as $branch) {
                $branchName = Str::snake(str_replace('-', " ", $branch->name));
                if (array_key_exists($branchName, $row->toArray()) && $row[$branchName] > 0){
                    if (!$product = Product::where('name', $row['product_name'])->first()){
                        continue;
                    }

                    $invDic = InventoryDictionary::firstOrCreate(
                        ['product_id' => $product->id, 'branch_id' => $branch->id],
                        ['quantity' => 0]
                    );

                    $target = $row[$branchName] - $invDic->quantity;

                    // $all = [];
                    // for ($i = 0; $i < $target; $i++) {
                    //     $inventory = new Inventory();
                    //     $inventory['price'] = $product->retail_price;
                    //     $inventory['product_id'] = $product->id;
                    //     $inventory['product_name'] = $product->name;
                    //     $inventory['receiver_id'] = auth()->user()->id;
                    //     $inventory['supplier_id'] = $supplier_id;
                    //     $inventory['sku'] = '';
                    //     $inventory['received_date'] = Carbon::today()->toDateString();
                    //     $inventory['inventory_status_id'] = $inventory_id;
                    //     $inventory['branch_id'] = $branch->id;
                    //     $data = $inventory->toArray();
                    //     unset($data['inventory_status']);
                    //     unset($data['transfers']);
                    //     unset($data['sold_date']);
                    //     unset($data['created_at']);
                    //     unset($data['updated_at']);
                    //     unset($data['id']);
                    //     $all[] = $data;
                    // }

                    $array = [
                        'price' => $product->retail_price,
                        'product_id' => $product->id,
                        'product_name' => $product->name,
                        'receiver_id' => auth()->user()->id,
                        'supplier_id' => $supplier_id,
                        'inventory_sku' => Inventory::getInventorySku(),
                        'received_date' => Carbon::today()->toDateString(),
                        'inventory_status_id' => $inventory_id,
                        'branch_id' => $branch->id,
                    ];

                    $all = array_fill(0, $target, $array);
                    if (count($all)) {
                        Inventory::insert($all);

                        $invDic->update(["quantity" => $row[$branchName]]);
                    }
                }
            }
        }
    }
}
