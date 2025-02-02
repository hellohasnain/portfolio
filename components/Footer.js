import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="font-fira border-t py-6 text-gray-400">
            <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="flex flex-col items-center sm:items-start">
                    <div className="flex items-center mb-2">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        <h2 className="text-white text-2xl font-semibold">Hasnain</h2>
                    </div>
                    <p className="text-gray-400 text-lg sm:text-xl">hasnainraza1059@gmail.com</p>
                    <p className="mt-2 text-lg text-center sm:text-left">
                        Web designer and front-end developer
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
                    {/* <h3 className="text-white text-base font-semibold mb-2">Media</h3> */}
                    <div className="flex space-x-4">
                        <Link
                            href="https://www.instagram.com/hasnain_r24?igsh=MTR3MmtsdmFsdWQ4dg=="
                            aria-label="Instagram"
                        >
                            <Image
                                src="/instagram.png"
                                alt="Instagram icon"
                                width={40}
                                height={40}
                                className="hover:opacity-75 "
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/hellohraza"
                            aria-label="LinkedIn"
                        >
                            <Image
                                src="/linkedin.png"
                                alt="LinkedIn icon"
                                width={40}
                                height={40}
                                className="hover:opacity-75"
                            />
                        </Link>
                        <Link href="https://github.com/hellohasnain" aria-label="GitHub">
                            <Image
                                src="/github.png"
                                alt="GitHub icon"
                                width={40}
                                height={40}
                                className="hover:opacity-75"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-16 text-sm ">
                © Copyright {new Date().getFullYear()}. Made by Hasnain
            </div>
        </div>
    );
};

export default Footer;
