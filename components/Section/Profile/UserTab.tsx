import React from 'react';

export default function UserTabs() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 w-full p-4 gap-4'>
            {/* Bagian Profil */}
            <div className='md:col-start-1 md:col-end-4 col-span-full'>
                <div className='flex items-center flex-col gap-4'>
                    <div className='h-32 w-32 md:h-52 md:w-52 border rounded-full'></div>
                    <h1 className='text-xl text-[#16423C] font-semibold text-center'>Hallo Sandy Roadiguez</h1>
                    <p className='text-center'>@sandyroadiguez</p>
                </div>
            </div>

            {/* Bagian Detail Pengguna dan Pengiriman */}
            <div className='md:col-start-5 md:col-end-13 col-span-full flex flex-col gap-2'>
                {/* Detail Pengguna */}
                <div className='grid grid-cols-1 md:grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C]'>Nama Lengkap</p>
                    <p className='p-2 md:col-span-3'>Sandy Roadiguez Kulveirt</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C]'>Email</p>
                    <p className='p-2 md:col-span-3'>sandyroadiguez@gmail.com</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C]'>No Telp</p>
                    <p className='p-2 md:col-span-3'>08234734583</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C]'>Tempat dan Tanggal Lahir</p>
                    <p className='p-2 md:col-span-3'>Bandung, 12/12/2000</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C]'>Jenis Kelamin</p>
                    <p className='p-2 md:col-span-3'>Laki - Laki</p>
                </div>

                {/* Detail Pengiriman */}
                <div className='grid grid-cols-1 md:grid-cols-4 rounded-md mt-2'>
                    <p className='p-2 col-span-full font-bold flex justify-center text-[#16423C]'>Detail Pengiriman</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 rounded-md border mt-2'>
                    <p className='p-2 font-bold text-[#16423C]'>Penerima</p>
                    <p className='p-2 md:col-span-3'> Muhammad Fadli</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 rounded-md border mt-2'>
                    <p className='p-2 font-bold text-[#16423C]'>Nomor Telepon</p>
                    <p className='p-2 md:col-span-3'> +62 812-3456-7890</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 rounded-md border'>
                    <p className='p-2 font-bold text-[#16423C]'>Alamat Pengiriman</p>
                    <p className='p-2 md:col-span-3'>
                        Jl. Melati No. 25, RT 03/RW 02, Kel. Sukamaju, Kec. Cibiru, Bandung, Jawa Barat, 40614
                    </p>
                </div>
            </div>
        </div>
    );
}