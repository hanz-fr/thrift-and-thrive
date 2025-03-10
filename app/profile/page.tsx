"use client";

import { Card, CardHeader, CardBody, Avatar, Tabs, Tab } from "@heroui/react";
import UserTabs from "@/components/Section/Profile/UserTab";
import MyOrdersTab from "@/components/Section/Profile/MyOrdersTab";

export default function CompanyProfile() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" placement={'start'} >
          <Tab key="user" title="User Profile" className="text-[#16423C] rounded-lg border-b-2 border-[#6A9C89]">
            <Card className="border-none">
              <CardBody className="w-[78vw] max-w-6xl">
                <UserTabs/>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="list_order" title="Pesanan Saya" className="text-[#16423C] rounded-lg border-b-2 border-[#6A9C89]">
            <Card className="border-none">
              <CardBody className="w-[78vw] max-w-6xl">
                <MyOrdersTab/>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="upload" title="Upload Barang" className="text-[#16423C] rounded-lg border-b-2 border-[#6A9C89]">
          <Card style={{ border: "none !important", boxShadow: "none !important" }}>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
