import img1 from "../../assets/Tourism---4r.jpg";
import img2 from "../../assets/Top-10-Things-to-Do-in-Coxs-Bazar.jpg";
import img3 from "../../assets/Lakkatura-Tea-Garden-Women-Worker.jpg.webp";
import img4 from "../../assets/ev_ert5t_n5-800x450.jpg";
import img5 from "../../assets/52585302949_d63f097d8d_b.jpg";
import { motion } from "motion/react";

const TopDestinations = () => {
  return (
    <div className="mt-24">
      <h2 className="lg:text-5xl md:text-4xl text-3xl mb-10  font-semibold text-center bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">
        Top Picks for Your Next Adventure
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 py-10 w-10/12 mx-auto gap-5">
        <motion.div
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col gap-2 items-center"
        >
          <img
            className="w-52 h-52 rounded-full object-cover"
            src={img1}
            alt=""
          />
          <p className="text-2xl font-bold">Bandarban</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col gap-2 items-center"
        >
          <img
            className="w-52 h-52 rounded-full object-cover"
            src={img2}
            alt=""
          />
          <p className="text-2xl font-bold">Cox's Bazar</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col gap-2 items-center"
        >
          <img
            className="w-52 h-52 rounded-full object-cover"
            src={img3}
            alt=""
          />
          <p className="text-2xl font-bold">Sylhet Tea Garden</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col gap-2 items-center"
        >
          <img
            className="w-52 h-52 rounded-full object-cover"
            src={img4}
            alt=""
          />
          <p className="text-2xl font-bold">Sundarban</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col gap-2 items-center"
        >
          <img
            className="w-52 h-52 rounded-full object-cover"
            src={img5}
            alt=""
          />
          <p className="text-2xl font-bold">Sajek Valley</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TopDestinations;
