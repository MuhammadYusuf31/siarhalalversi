import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function Qrcode(){
  return(
    <>
      <Sidebar/>
      <div className="relative min-h-screen grid place-items-start justify-center gap-2 ">
        {/* <div className="divide-y divide-blue-gray-100"> */}
          <div className="relative grid mt-8 place-items-center justify-center gap-2">
            <Typography placeholder={""} variant="h3" color="blue-gray" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Scan QR code
            </Typography>
            <Typography
                variant="h6"
                className=" text-center mt-4 mb-4 ml-5 mr-5 w-full md:max-w-full lg:max-w-3xl text-blue-gray-700"
                placeholder={""} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
              Silahkan scan QR code <br /> yang tertera pada restoran untuk mengetahui <br /> informasi sertifikasi halal restoran
            </Typography>
            <Image className="w-200  rounded-full" src="/image/qr.png" width={200} height={200} alt="Bonnie image"/>
            <Link href="#" type="button" className="relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Scan Barcode</Link>
          </div>
        {/* </div> */}
      </div>
    </>
  );
}