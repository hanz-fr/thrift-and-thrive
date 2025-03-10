'use client'

import React from 'react'

export default function ReviewsContent({ reviewers, reviews }: { reviewers: string, reviews: string }) {
    return (
        <div className="w-full p-4">
            <div className="border-b pb-4">
                <h2 className="text-lg font-semibold">Customer Reviews</h2>
            </div>
            <div className="mt-4 space-y-6">
                <div className="p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-md font-medium">{reviewers}</h3>
                        <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                    </div>
                    <p className="mt-2 text-gray-700">
                        "{reviews}"
                    </p>
                </div>
            </div>
        </div>
    )
}
