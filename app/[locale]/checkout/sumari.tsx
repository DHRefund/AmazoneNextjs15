import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductPrice from "@/components/shared/product/product-price";

export const CheckoutSummary = () => (
  <Card>
    <CardContent className="p-4">
      {!isAddressSelected && (
        <div className="border-b mb-4">
          <Button className="rounded-full w-full" onClick={handleSelectShippingAddress}>
            Ship to this address
          </Button>
          <p className="text-xs text-center py-2">
            Choose a shipping address and payment method in order to calculate shipping, handling, and tax.
          </p>
        </div>
      )}
      {isAddressSelected && !isPaymentMethodSelected && (
        <div className=" mb-4">
          <Button className="rounded-full w-full" onClick={handleSelectPaymentMethod}>
            Use this payment method
          </Button>

          <p className="text-xs text-center py-2">
            Choose a payment method to continue checking out. You&apos;ll still have a chance to review and edit your
            order before it&apos;s final.
          </p>
        </div>
      )}
      {isPaymentMethodSelected && isAddressSelected && (
        <div>
          <Button onClick={handlePlaceOrder} className="rounded-full w-full">
            Place Your Order
          </Button>
          <p className="text-xs text-center py-2">
            By placing your order, you agree to {site.name}&apos;s{" "}
            <Link href="/page/privacy-policy">privacy notice</Link> and
            <Link href="/page/conditions-of-use"> conditions of use</Link>.
          </p>
        </div>
      )}

      <div>
        <div className="text-lg font-bold">Order Summary</div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Items:</span>
            <span>
              <ProductPrice price={itemsPrice} plain />
            </span>
          </div>
          <div className="flex justify-between">
            <span>Shipping & Handling:</span>
            <span>
              {shippingPrice === undefined ? (
                "--"
              ) : shippingPrice === 0 ? (
                "FREE"
              ) : (
                <ProductPrice price={shippingPrice} plain />
              )}
            </span>
          </div>
          <div className="flex justify-between">
            <span> Tax:</span>
            <span>{taxPrice === undefined ? "--" : <ProductPrice price={taxPrice} plain />}</span>
          </div>
          <div className="flex justify-between  pt-4 font-bold text-lg">
            <span> Order Total:</span>
            <span>
              <ProductPrice price={totalPrice} plain />
            </span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);
