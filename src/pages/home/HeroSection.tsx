import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "../../assets/images/macbook-exposed.jpg"
import {motion} from "framer-motion"

const intro ={
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 1
    }},
}

const introChildren = {
    hidden: {opacity: 0, y: -300},
    visible: {opacity: 1, y: 0, transition: {
        duration: 1.3,
        type: "spring",
        bounce: 0.6
    }}
}

const laptop = {
    initial: {y: 0, rotate: 0, scale: 5},
    animate: {y: 20, 
        scale: 1,
        rotate: -30,
        transition: {
            duration: 1.5,
            y: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
    }}
}

const HeroSection = () =>{
    return (
        <Container className="h-screen pt-16 place-content-center grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            <motion.div variants={intro} initial="hidden" animate="visible">
                <motion.h1 variants={introChildren} className="text-5xl lg:text-8xl font-bold text-nowrap">
                    <span className="text-gray">Don't worry,</span> <br />
                    <span>we'll fix it</span>
                </motion.h1>
                <motion.p variants={introChildren} className="text-dark-gray max-w-[50ch] text-lg mt-10 mb-5">Welcome to 
                <span className="text-primary-foreground font-semibold"> iRepair</span> , your one-step place for all kind of  
                <span className="text-primary-foreground font-semibold"> Macbook repair's</span> and diagnostics</motion.p>
                <motion.div variants={introChildren}>
                <Button>Book a Service</Button>
                </motion.div>
            </motion.div>

            <motion.div className="w-3/4 lg:w-4/5 mx-auto" variants={laptop} initial="initial" animate="animate">
                <img className=" object-contain pt-5 rounded-4xl p-10" src={macbook} alt="" />

            </motion.div>
        </Container>
    )
}

export default HeroSection;