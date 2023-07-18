import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const projectImages = [
  require("../assets/project-1.jpeg"),
  require("../assets/project-2.jpeg"),
  require("../assets/project-3.jpeg"),
  require("../assets/project-4.jpeg"),
  require("../assets/project-5.jpeg"),
  require("../assets/project-6.jpeg"),
  require("../assets/project-7.jpeg"),
];

const projectDescription = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Doloremque cupiditate consequuntur assumenda ex dolor voluptatum reprehenderit",
  "in harum quia aspernatur eaque impedit accusantium",
  "ad molestiae numquam fugiat repellat molestias necessitatibus!",
  "Doloremque cupiditate consequuntur assumenda ex dolor voluptatum reprehenderit",
  "in harum quia aspernatur eaque impedit accusantium",
  "ad molestiae numquam fugiat repellat molestias necessitatibus!"
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const Project = ({ src, subtitle }) => {
  const overlayStyles= `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const alt = src.split("/")[3].split('.')[0];
  const title = alt.charAt(0).toUpperCase() + alt.slice(1);

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img src={src} alt={alt} />
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque omnis minus quia autem nemo tenetur adipisci eos eaque!
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div
            className="flex jusitfy-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            USEFUL USER INTERFACES
          </div>
          <Project src={projectImages[0]} subtitle={projectDescription[0]} />
          <Project src={projectImages[1]} subtitle={projectDescription[1]} />
          <Project src={projectImages[2]} subtitle={projectDescription[2]} />
          <Project src={projectImages[3]} subtitle={projectDescription[3]} />
          <Project src={projectImages[4]} subtitle={projectDescription[4]} />
          <Project src={projectImages[5]} subtitle={projectDescription[5]} />
          <Project src={projectImages[6]} subtitle={projectDescription[6]} />
          <div
            className="flex jusitfy-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects;