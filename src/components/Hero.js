import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'I am a front end developer',
        social: {
            linkedin: 'https://www.linkedin.com',
            instagram: 'https://www.instagram.com',
            facebook: 'https://www.facebook.com'
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>Hi, <br/> I'm <span className='text-black'>AK</span> Akash
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                    <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                    <a href={config.social.instagram} className='hover:text-white'><AiOutlineInstagram size={40} /></a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} alt="Hero" />
        </section>
    );
}
