"use client"

import { useState } from "react";
import Modal from "./modal";

export default function Complaint() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center">
            <div className="bg-lime-50 shadow-lg rounded-lg p-8 max-w-6xl w-full">
                {/* Judul dan Deskripsi */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-left">Pengaduan</h1>
                <p className="text-gray-600 mb-8 text-left">
                    Sampaikan keluhan, masalah, atau ketidakpuasan terhadap suatu hal kepada pihak yang berwenang atau yang bertanggung jawab untuk menangani permasalahan tersebut. untuk mencari solusi atau penyelesaian atas masalah yang dihadapi oleh pihak yang mengadukan.
                </p>

                {/* Formulir */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Kelas</label>
                        <input
                            type="text"
                            placeholder="Masukkan Kelas"
                            className="w-full max-w-2xl border border-gray-300 rounded-lg p-3"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Nama</label>
                        <input
                            type="text"
                            placeholder="Masukkan Nama"
                            className="w-full max-w-2xl border border-gray-300 rounded-lg p-3"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">No Absen</label>
                        <input
                            type="text"
                            placeholder="Masukkan Nomor Absen"
                            className="w-full max-w-2xl border border-gray-300 rounded-lg p-3"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Nama Laporan</label>
                        <input
                            type="text"
                            placeholder="Masukkan Nama Laporan"
                            className="w-full max-w-2xl border border-gray-300 rounded-lg p-3"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Bukti (Opsional)</label>
                        <input
                            type="text"
                            placeholder="Masukkan Bukti (Opsional)"
                            className="w-full max-w-2xl border border-gray-300 rounded-lg p-3"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Keterangan</label>
                        <textarea
                            placeholder="Masukkan Keterangan"
                            className="w-full max-w-2xl border border-gray-300 rounded-lg p-3 h-32"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">No Telepon</label>
                        <input
                            type="text"
                            placeholder="Masukkan Nomor Telepon"
                            className="w-full max-w-2xl border border-gray-300 rounded-lg p-3"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full max-w-2xl bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-all"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <h2 className="text-lg font-semibold">Laporan Telah Diterima</h2>
                    <p className="text-gray-600 mt-2">
                        Kami mengapresiasi waktu dan perhatian yang Anda berikan dalam menyampaikan pengaduan.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="mt-4 bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                        Tutup
                    </button>
                </Modal>
            )}
        </div>
    );
}
