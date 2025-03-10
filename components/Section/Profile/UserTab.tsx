import React from 'react'

export default function UserTabs() {
    return (
        <div className='grid grid-cols-12 w-full p-4'>
            <div className='col-start-1 col-end-4'>
                <div className='flex items-center flex-col gap-4'>
                    <div className='h-52 w-52 border rounded-full'></div>
                    <h1 className='text-xl text-[#16423C] font-semibold'>Hallo Sandy Roadiguez</h1>
                    <p>@sandyroadiguez</p>
                </div>
            </div>
            <div className='col-start-5 col-end-13 flex flex-col gap-2'>
                <div className='grid grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C] '> Nama Lengkap </p>
                    <p className='p-2 col-span-3 '>: Sandy Roadiguez Kulveirt</p>
                </div>
                <div className='grid grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C] '> Email </p>
                    <p className='p-2 col-span-3 '>: sandyroadiguez@gmail.com</p>
                </div>
                <div className='grid grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C] '> No Telp </p>
                    <p className='p-2 col-span-3 '>: 08234734583</p>
                </div>
                <div className='grid grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C] '> Tempat dan tanggal Lahir </p>
                    <p className='p-2 col-span-3 '>: Bandung, 12/12/2000</p>
                </div>
                <div className='grid grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C] '> Jenis Kelamin </p>
                    <p className='p-2 col-span-3 '>: Laki - Laki</p>
                </div>
                <div className='grid grid-cols-4 rounded-md mt-2'>
                    <p className='p-2 col-span-full font-bold flex justify-center text-[#16423C]'>Datail Pengiriman</p>
                </div>
                <div className='grid grid-cols-4 rounded-md border mt-2'>
                    <p className='p-2 font-bold text-[#16423C]'>Penerima</p>
                    <p className='p-2 col-span-3'>: Muhammad Fadli</p>
                </div>
                <div className='grid grid-cols-4 rounded-md border mt-2'>
                    <p className='p-2 font-bold text-[#16423C]'>Nomor Telepon</p>
                    <p className='p-2 col-span-3'>: +62 812-3456-7890</p>
                </div>
                <div className='grid grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C]'>Alamat Pengiriman</p>
                    <p className='p-2 col-span-3'>
                        : Jl. Melati No. 25, RT 03/RW 02, Kel. Sukamaju, Kec. Cibiru, Bandung, Jawa Barat, 40614
                    </p>
                </div>
            </div>
        </div>
    )
}
