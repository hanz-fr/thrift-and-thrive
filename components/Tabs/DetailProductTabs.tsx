'use client'

import React from 'react'

import { Card, CardBody, Tab, Tabs } from '@heroui/react'
import DescriptionContent from './DescriptionContent'


export default function DetailProductTabs() {
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
                                <DescriptionContent />
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="music" title="Reviews">
                        <Card>
                            <CardBody>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>

        </div>
    )
}
