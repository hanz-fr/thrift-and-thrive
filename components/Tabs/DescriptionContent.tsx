'use client'

import React from 'react'

export default function DescriptionContent({ descriptionContent }: { descriptionContent: string }) {
    return (


        <div className="w-full p-4">
            <div className="border-b pb-4">
                <h2 className="text-lg font-semibold">Description of Product</h2>
            </div>
            <div className="mt-4 space-y-6">
                <div className=" mt-2 text-gray-700 p-4 rounded-lg shadow-sm">
                    {descriptionContent || "No description available."}
                </div>
            </div>
        </div>
    )
}
