import './header.css';
import Image from "next/image";
import GitHub from '@/public/assets/github.svg';
import LinkedIn from '@/public/assets/linkedin.svg';
import X from '@/public/assets/x.svg'
import Link from "next/link";


const Header = () => {
    return (
        <header className="border-b-1 border-gray-700 w-full pb-4 pt-16 mb-36 flex justify-between items-center gap-48">
            <Link href="/">
                <h1 className="poppins text-3xl font-extrabold">Amin's Blogs</h1>
            </Link>
            <div className="links flex items-center gap-4">
                <div className="github">
                    <a href="https://github.com/aminesmaeili79" target="_blank">
                        <Image src={GitHub} alt="github link"/>
                    </a>
                </div>
                <div className="linkedin">
                    <a href="https://linkedin.com/in/aminesmaeili79" target="_blank">
                        <Image src={LinkedIn} alt="linkedin link"/>
                    </a>
                </div>
                <div className="x">
                    <a href="https://x.com/aminesmaeili79" target="_blank">
                        <Image src={X} alt="twitter link"/>
                    </a>
                </div>
                <div className="portfolio">
                    <a className="text-xl font-light" href="https://aminesmaeili79.github.io/Portfolio/" target="_blank">My Portfolio</a>
                </div>
            </div>
        </header>
    )
}
export default Header
