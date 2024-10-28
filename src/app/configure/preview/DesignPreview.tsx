"use client";

import Confetti from "react-dom-confetti";
import { useEffect, useState } from "react";
import Phone from "@/components/Phone";
import { Configuration } from "@prisma/client";
import { COLORS, MODELS } from "@/validator/option-validator";
import { cn, formatPrice } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { useMutation } from "@tanstack/react-query";
import { createCheckoutSession } from "./actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import CloseApp from "@/components/CloseApp";

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const [showCloseApp, setShowCloseApp] = useState(false);
  const [showConfetti, SetShowConfetti] = useState(false);
  const router = useRouter();

  const { toast } = useToast();

  useEffect(() => {}, []);

  useEffect(() => {
    SetShowConfetti(true);
  });

  const { color, model, finish, material } = configuration;

  const [sessionButton, setSessionButton] = useState({
    loading: false,
    disable: false,
  });

  const tw = COLORS.find(
    (supportedColor) => supportedColor.value === color
  )?.tw;

  const { label: modelLabel } = MODELS.options.find(
    ({ value }) => value === model
  )!;

  let totalPrice = BASE_PRICE;
  if (material === "armor") totalPrice += PRODUCT_PRICES.meterial.armor;
  if (finish === "textured") totalPrice += PRODUCT_PRICES.finish.textured;

  console.log(tw);

  const { mutate: createPaymentSession } = useMutation({
    mutationKey: ["get-checkout-session"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) {
        router.push(url);
      } else throw new Error("unable to retrive payment url.");
    },
    onError: () => {
      console.log("error");
      setSessionButton({
        loading: false,
        disable: false,
      });
      toast({
        title: "Something went wrong !",
        description: "Error accord at our end. Please try again later.",
        variant: "destructive",
      });
    },
  });

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
      >
        <Confetti
          active={showConfetti}
          config={{
            elementCount: 117,
            spread: 360,
            width: "18px",
            height: "18px",
          }}
        />
      </div>

      <div className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
          <Phone
            phoneColor={cn(`bg-${tw}`, "max-w-[150px] md:max-w-full")}
            imgSrc={configuration.croppedImageUrl!}
          />
        </div>

        <div className="mt-6 sm:col-span-9 md:row-end-1">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            Your {modelLabel} Case
          </h3>
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Check className="h-4 w-4 text-purple-500" />
            In stock and ready to ship
          </div>
        </div>

        <div className="sm:col-span-12 md:col-span-9 text-base">
          <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div>
              <p className="font-medium text-zinc-950">Highlights</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside marker:text-purple-800">
                <li>Wireless charging compatible</li>
                <li>TPU shock absorption</li>
                <li>Packaging made from recycled materials</li>
                <li>5 year print warranty</li>
              </ol>
            </div>
            <div>
              <p className="font-medium text-zinc-950">Materials</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside marker:text-purple-800">
                <li>High-quality, durable material</li>
                <li>Scratch- and fingerprint resistant coating</li>
              </ol>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
              <div className="flow-root text-sm">
                <div className="flex items-center justify-between py-1 mt-2">
                  <p className="text-gray-600">Base price</p>
                  <p className="font-medium text-gray-900">
                    {formatPrice(BASE_PRICE / 100)}
                  </p>
                </div>

                {finish === "textured" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Textured finish</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                    </p>
                  </div>
                ) : null}

                {material === "armor" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">High Strong Armor material</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.meterial.armor / 100)}
                    </p>
                  </div>
                ) : null}

                <div className="my-2 h-px bg-gray-200" />

                <div className="flex items-center justify-between py-2">
                  <p className="font-semibold text-gray-900">Order total</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(totalPrice / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end pb-12">
              <Button
                onClick={() => {
                  setSessionButton({
                    loading: true,
                    disable: true,
                  });
                  setShowCloseApp(true);
                }}
                isLoading={sessionButton.loading}
                disabled={sessionButton.disable}
                loadingText="Loading"
                className="px-4 sm:px-6 lg:px-8"
              >
                Check out <ArrowRight className="h-4 w-4 ml-1.5 inline" />
              </Button>
            </div>

            {showCloseApp && <CloseApp />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPreview;