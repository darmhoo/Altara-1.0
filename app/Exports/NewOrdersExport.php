<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;

class NewOrdersExport implements FromCollection, WithMapping,  WithHeadings, WithColumnFormatting, ShouldAutoSize
{
    use Exportable;
    public function __construct($newOrders)
    {
        $this->newOrders = $newOrders;
    }

    public function headings(): array
    {
        return [
            'Showroom',
            'Average Retail Price',
            'Number of Sales',
            'Revenue',
            '% of Total Revenue',
            'Number of AltaraPay Product',
            'Number of AltaraCash Product',
            'Average Down Payment',
            'Forecast' 
        ];
    }
    public function map($newOrder): array
    {
        return [
            $newOrder['branch_name'],
            $newOrder['avg_price_of_prod_per_showroom'] ?: "0",
            $newOrder['number_of_sales'] ?: "0",
            $newOrder['total_potential_revenue_sold_per_showroom'] ?: "0",
            $newOrder['percentage_of_total_revenues'] ?: "0.00",
            $newOrder['no_of_altara_pay'] ?: "0",
            $newOrder['no_of_altara_cash'] ?: "0",
            $newOrder['percentage_downpayment'] ?: "0",
            $newOrder['forecast'] ?: "0",


        ];
    }

    public function collection()
    {
        return $this->newOrders;
    }

    public function columnFormats(): array
    {
        return [
            // 'F' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            // 'J' => NumberFormat::FORMAT_DATE_DDMMYYYY
        ];
    }
}
