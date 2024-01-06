import React from 'react';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
const PolicyPage = () => {
return (
    <>
    <Navbar/>
    <Outlet/> 
        <div className='w-screen h-auto flex flex-col justify-center items-center bg-white p-6 text-lg gap-8 '>
    <h1 className=' text-black font-bold text-8xl p-2  flex flex-row gap-4 justify-center items-center' >WARRANTY POLICY</h1>
    <p>How can I cancel my order?
The cancellation of your order is only possible pre-dispatch, by mailing us or calling the toll no. 011-42700400 and confirming the acceptance of the cancellation request. (During working hour , i.e. Mon-Friday, 10:00am – 4:00pm, and except the Govt. holidays) You can also email at customercare@brandeyes.in
All Refunds/Cancellations are subject to deduction of payment gateway charges.
Order Cancellation is allowed only before Dispatch of the product or within 2 hours of purchase whichever is earlier, if you have already cancelled the order. Please allow us 30 business days to Credit the amount in your account.
In case of non acceptance of Product by customer or product return due to wrong address or non-availability of customer at the said address, the value of freight will be adjusted from initial advance.

CUSTOMER SUPPORT & WARRANTY POLICY

We thank you for purchasing Skullcandy product. The service for the purchased Skullcandy product will be provided by Brand Eyes Distributors Pvt. Ltd in India through its Authorized Service Centre located at Nehru Place, New Delhi-110019. Please contact us on below details for service assistance

Dear Customer, Please report an issue related to Wrong/Damaged/Missing Product or Empty Packing received within 24 hrs from Delivery Time. Complaints reported post 24 hrs will not be accepted for dispute for above issues.</p>
    <h2 className='flex flex-wrap justify-center items-center text-black font-bold text-3xl gap-x-8 p-3  '>Email :- customercare@brand.in</h2>
    <p className='flex flex-wrap justify-center items-center text-black font-bold text-3xl gap-x-8 p-3  '>Phone :- 012-34567890</p>
    <p className='flex flex-wrap justify-center items-center text-black font-bold text-3xl gap-x-8 p-3  '>Mon-Fri, 10 AM – 4 PM</p>
<h2 className=' text-black font-bold text-4xl p-2  flex flex-row gap-4 justify-center items-center'>The replacement of the product will be subject to the following terms and conditions : </h2>
    <p>
1. Product shall be entertained under warranty provided the original Purchase Invoice is presented by the Customer.

2. The product should have been purchased from authorized dealer/retailer. The invoice should have Product code/ Date of purchase/VAT/GST/Seller details/Purchase value. Warranty shall be declined if the invoice does not contain above mentioned details.

3. Any tampering of invoice will result in outright rejection of any claim under warranty.

4. This warranty shall not cover any damages resulting from un-authorized adaptations, improper or reckless use, damage on account of high ampere charging, defined as charging ampere > 1.1A or unattended long duration of charge exceeding 30 mins.

5. Warranty shall be void if the product has been opened or attended at any unauthorized service centre.

6. This warranty does not cover any external accessories (such as any spares, Cushions, battery, cable, carrying bag etc) mentioned in the operating instruction manual supplied with this product or any cosmetic parts.

7. This warranty shall not apply to damages caused to the product by accident, lightening, ingress of water/moisture, exposure to caustic substances, fire, improper ventilation, dropping, mishandling or excessive shock or any external cause beyond Skullcandy’s control and/or any damage caused due to tampering of the product by an unauthorized agent.

8. The terms of warranty contained herein shall prevail to the extent any part thereof is not inconsistent with applicable Indian Laws. Any provision in respect of warranty inconsistent with any applicable law would stand excluded from the warranty terms and such inconsistency would not negate other provisions/terms and conditions of warranty Skullcandy or its Distributor shall not be responsible for any breach of contract or infringement of any provision of law by the dealer/retailer.

9. Brandeyes is not responsible for the items lost or pilferage during transit, we request you to choose caution by the Customer in choosing the right courier and for obtaining correct tracking number while shipping any package.

10. The product send to Brandeyes becomes the possession of Brandeyes and will not be returned.
    </p>
    <h2 className=' text-black font-bold text-4xl p-2  flex flex-row gap-4 justify-center items-center'>
    TERMS AND CONDITIONS
    </h2 >

    <p>

Please allow us at least 14 working days for successful completion of your warranty claim (depending upon stock availability).

If a replacement for the defective product is not in stock, Brandeyes reserves the right to replace the defective product with a similar product of approximately the same value (the same value mentioned in the VAT/GST invoice receipt/ paid value).

Skullcandy regularly changes the models, colorways, and styles of its Products and cannot guarantee the availability of an exact replacement for any Product.</p>
    </div>
    <Footer/>
    </>

);
};

export  {PolicyPage};