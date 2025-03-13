"use client";

import { Card, CardBody, Tabs, Tab } from "@heroui/react";
import UserTabs from "@/components/Section/Profile/UserTab";
import MyOrdersTab from "@/components/Section/Profile/MyOrdersTab";
import UploadFashionForm from "@/components/Section/Profile/UploadFashionForm";

export default function CompanyProfile() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" className="md:tabs-vertical tabs-horizontal">
          <Tab key="user" title="User Profile" className="text-[#16423C] rounded-lg border-b-2 border-[#6A9C89]">
            <Card className="border-none">
              <CardBody className="md:w-[78vw] max-w-6xl">
                <UserTabs />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="list_order" title="Pesanan Saya" className="text-[#16423C] rounded-lg border-b-2 border-[#6A9C89]">
            <Card className="border-none">
              <CardBody className=" lg:w-[78vw] max-w-6xl">
                <MyOrdersTab />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="upload" title="Upload Barang" className="text-[#16423C] rounded-lg border-b-2 border-[#6A9C89]">
            <Card style={{ border: "none !important", boxShadow: "none !important" }}>
              <CardBody className=" lg:w-[78vw] max-w-6xl">
                <UploadFashionForm />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
