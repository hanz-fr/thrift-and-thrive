'use client'

import React from 'react'

import { Card, CardBody, Tab, Tabs } from '@heroui/react'
import DescriptionContent from './DescriptionContent'
import ReviewsContent from './ReviewsContent'


export default function DetailProductTabs({ descriptionContent, reviewers, reviews }: { descriptionContent: string, reviewers: string, reviews: string }) {
    return (
        <div className='w-full h-full'>
            <div className="flex flex-col">
                <Tabs aria-label="Options" size="md" classNames={{
                    cursor: 'w-full bg-[#16423C]',
                    tabContent: 'group-data-[selected=true]:text-white',
                }}>
                    <Tab key="photos" title="Description">
                        <Card>
                            <CardBody>
                                <DescriptionContent descriptionContent={descriptionContent} />
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="music" title="Reviews">
                        <Card>
                            <CardBody>
                                <ReviewsContent reviewers={reviewers} reviews={reviews} />
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>

        </div>
    )
}
