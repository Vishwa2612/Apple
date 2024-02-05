import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion.tsx"

const Footer = () => {
    return(
        <div className="flex flex-col text-xs text-gray-500 ml-[17%] mr-[17%] cus-sm:ml-3 cus-sm:mr-3">
            <div className="m-1">
                <p>*Instant savings, otherwise referred to as instant cashback, is available with the purchase of an <span className="underline text-gray-600 cursor-pointer">eligible product</span> for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. 
                    Minimum transaction value of ₹10001.00 applies. <span className="underline text-gray-600 cursor-pointer">Click here</span> to see instant savings amounts and eligible devices. 
                    Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. 
                    Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. 
                    Offer may be revised or withdrawn at any time without any prior notice. <span className="underline text-gray-600 cursor-pointer">Additional terms apply.</span> Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.</p>
            </div>
            <div className="m-1">
                <p>‡No Cost EMI is available with the purchase of an <span className="underline text-gray-600 cursor-pointer">eligible product</span> made using eligible cards on 3- or 6-month tenures from most leading banks. 
                    Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. 
                    Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. 
                    <span className="underline text-gray-600 cursor-pointer">Additional terms apply.</span></p>
            </div>
            <div className="m-1">
                <p>Representative example: Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.</p>
            </div>
            <div className="m-1">
                <p>A subscription is required for Apple TV+.</p>
            </div>
            <div className="border border-gray-400 min-h-0 border-b-0 mt-5 mb-5"></div>
            <div className="flex flex-row justify-between cus-md:hidden cus-sm:hidden">
                <div className="flex flex-col">
                    <div className="mb-5">
                        <p className="text-gray-800 text-[13px] font-semibold">Shop and Learn</p>
                        <div>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Store</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Mac</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">iPad</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">iPhone</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Watch</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">AirPods</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">TV & Home</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">AirTag</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Accessories</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Gift Cards</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-800 text-[13px]">Apple Wallet</p>
                        <div>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Wallet</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-5">
                        <p className="text-gray-800 text-[13px] font-semibold">Account</p>
                        <div>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Manage Your Apple ID</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Apple Store Account</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">iCloud.com</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-800 text-[13px] font-semibold">Entertainment</p>
                        <div>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Apple One</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Apple TV+</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Apple Music</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Apple Podcasts</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Apple Books</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">App Store</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-800 text-[13px] font-semibold">Apple Store</p>
                    <div>
                        <p className="pt-2 font-normal hover:underline cursor-pointer">Find a Store</p>
                        <p className="pt-2 font-normal hover:underline cursor-pointer">Genius Bar</p>
                        <p className="pt-2 font-normal hover:underline cursor-pointer">Today at Apple</p>
                        <p className="pt-2 font-normal hover:underline cursor-pointer">Apple Camp</p>
                        <p className="pt-2 font-normal hover:underline cursor-pointer">Apple Trade In</p>
                        <p className="pt-2 font-normal hover:underline cursor-pointer">Ways to Buy</p>
                        <p className="pt-2 font-normal hover:underline cursor-pointer">Recycling Programme</p>
                        <p className="pt-2 font-normal hover:underline cursor-pointer">Order Status</p>
                        <p className="pt-2 font-normal hover:underline cursor-pointer">Shopping Help</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-5">
                        <p className="text-gray-800 text-[13px] font-semibold">For Business</p>
                        <div>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Apple and Business</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Shop for Business</p>
                        </div>
                    </div>
                    <div className="mb-5">
                        <p className="text-gray-800 font-semibold">For Education</p>
                        <div>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Apple and Education</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Shop for Education</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Shop for University</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-800 text-[13px] font-semibold">For Healthcare</p>
                        <div>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Apple in Healthcare</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">HEalth on Apple Watch</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-5">
                        <p className="text-gray-800 font-semibold">Apple Values</p>
                        <div>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Accessibility</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Education</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Environment</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Privacy</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Supplier Responsibility</p>
                        </div>
                    </div>
                    <div className="mb-5">
                        <p className="text-gray-800 pt-3 font-semibold">Abount Apple</p>
                        <div>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Newsroom</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Apple Leadership</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Career Opportunities</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Investors</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Ethics & Compliance</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Events</p>
                            <p className="pt-2 font-normal hover:underline cursor-pointer">Contact Apple</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cus-lg:hidden">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-gray-600 hover:no-underline pt-1">Shop and Learn</AccordionTrigger>
                            <AccordionContent className="pl-5 text-xs">Store</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Mac</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">iPad</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">iPhone</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Watch</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">AirPods</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">TV & Home</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">AirTag</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Accessories</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Gift Cards</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-gray-600 hover:no-underline pt-3 border border-gray-400 border-l-0 border-r-0 border-b-0">Apple Wallet</AccordionTrigger>
                            <AccordionContent className="pl-5 text-xs">Wallet</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-gray-600 hover:no-underline pt-3 border border-gray-400 border-l-0 border-r-0 border-b-0">Account</AccordionTrigger>
                            <AccordionContent className="pl-5 text-xs">Manage Your Apple ID</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Apple Store Account</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">iCloud.com</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-gray-600 hover:no-underline pt-3 border border-gray-400 border-l-0 border-r-0 border-b-0">Entertainment</AccordionTrigger>
                            <AccordionContent className="pl-5 text-xs">Apple One</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Apple TV+</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Apple Music</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Apple Arcade</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Apple Podcasts</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Apple Books</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Apple Store</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-gray-600 hover:no-underline pt-3 border border-gray-400 border-l-0 border-r-0 border-b-0">Apple Store</AccordionTrigger>
                            <AccordionContent className="pl-5 text-xs">Find a Store</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Genius Bar</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Today at Apple</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Apple Camp</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Apple Trade in</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Ways to Buy</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Recycling Programme</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Order Status</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Shopping help</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-gray-600 hover:no-underline pt-3 border border-gray-400 border-l-0 border-r-0 border-b-0">For Business</AccordionTrigger>
                            <AccordionContent className="pl-5 text-xs">Apple and Business</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Shop for Business</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="text-gray-600 hover:no-underline pt-3 border border-gray-400 border-l-0 border-r-0 border-b-0">For Education</AccordionTrigger>
                            <AccordionContent className="pl-5 text-xs">Apple and Education</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Shop for Education</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Shop for University</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="text-gray-600 hover:no-underline pt-3 border border-gray-400 border-l-0 border-r-0 border-b-0">For Healthcare</AccordionTrigger>
                            <AccordionContent className="pl-5 text-xs">Apple in Healthcare</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Health on Apple Watch</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="text-gray-600 hover:no-underline pt-3 border border-gray-400 border-l-0 border-r-0 border-b-0">Apple Values</AccordionTrigger>
                            <AccordionContent className="pl-5 text-xs">Accessibility</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Education</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Environment</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Privacy</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Supplier Responsibility</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger className="text-gray-600 hover:no-underline pt-3 border border-gray-400 border-l-0 border-r-0 border-b-0">About Apple</AccordionTrigger>
                            <AccordionContent className="pl-5 text-xs">Newsroom</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Apple Leadership</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Career Opportunities</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Investors</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Ethics & Compliance</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Events</AccordionContent>
                            <AccordionContent className="pl-5 text-xs">Contact Apple</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
                <p>More ways to shop:<span className="underline text-blue-600 hover:cursor-pointer">Find an Apple Store</span> or <span className="underline text-blue-600 hover:cursor-pointer">other retailer</span> near you. Or call 000800 040 1966.</p>
            </div>
            <div className="border border-gray-400 min-h-0 border-b-0 mt-5 mb-5 cus-md:hidden cus-sm:hidden"></div>
            <div className="pt-5 text-xs cus-lg:hidden">India</div>
            <div className="flex flex-row items-center justify-between mb-7">
            <div className="flex cus-md:hidden cus-sm:hidden">
                <div>
                    <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
                </div>
                <div className="flex flex-row pl-10">
                    <p className="cursor-pointer hover:underline">Privacy Policy</p>
                    <p className="pl-2 pr-2">|</p>
                    <p className="cursor-pointer hover:underline">Teams of Use</p>
                    <p className="pl-2 pr-2">|</p>
                    <p className="cursor-pointer hover:underline">Sales Policy</p>
                    <p className="pl-2 pr-2">|</p>
                    <p className="cursor-pointer hover:underline">Legal</p>
                    <p className="pl-2 pr-2">|</p>
                    <p className="cursor-pointer hover:underline">Site Map</p>
                </div>
            </div>
                <div>
                    <p className="cursor-pointer hover:underline cus-md:hidden cus-sm:hidden">India</p>
                </div>
            </div>
            <div className="cus-lg:hidden mb-5">
                <div className="mb-2">
                    <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
                </div>
                <div className="flex">
                    <p className="cursor-pointer hover:underline">Privacy Policy</p>
                    <p className="pl-2 pr-2">|</p>
                    <p className="cursor-pointer hover:underline">Teams of Use</p>
                    <p className="pl-2 pr-2">|</p>
                    <p className="cursor-pointer hover:underline">Sales Policy</p>
                    <p className="pl-2 pr-2">|</p>
                    <p className="cursor-pointer hover:underline">Legal</p>
                    <p className="pl-2 pr-2">|</p>
                    <p className="cursor-pointer hover:underline">Site Map</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;