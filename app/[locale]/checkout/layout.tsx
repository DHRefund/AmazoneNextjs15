import { HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Checkout");
  return {
    title: t("meta_title"), // Example: "Thanh toán - Tên cửa hàng của bạn"
    description: t("meta_description"), // Example: "Hoàn tất đơn hàng của bạn tại Tên cửa hàng của bạn."
  };
}

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <header className="bg-card mb-4 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <Image
              // src='/icons/logo.svg'
              src="/new/logo256px.png"
              alt="logo"
              width={70}
              height={70}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
          <div>
            <h1 className="text-3xl">Checkout</h1>
          </div>
          <div>
            <Link href="/page/help">
              <HelpCircle className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
