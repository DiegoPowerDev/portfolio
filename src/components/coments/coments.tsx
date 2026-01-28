"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface Props {
  data: {
    title: string;
    name: string;
    email: string;
    text: string;
  };
}
const inputVariants = {
  focus: {
    borderColor: "var(--theme)",
    boxShadow: "0 0 15px rgba(var(--theme-rgb), 0.3)",
  },
  idle: { scale: 1, borderColor: "var(--hover)" },
};

const labelVariants = {
  float: { y: -40, x: -5, color: "var(--theme)" },
  idle: { y: 0, x: 0, color: "gray" }, // Color gris base
};
function Comentarios(props: Props) {
  const { title, name, email, text } = props.data;
  const { register, handleSubmit, reset, watch } = useForm();

  const informacionFormulario = watch();

  const Datos = async () => {
    toast
      .promise(
        fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(informacionFormulario),
        }).then(async (res) => {
          if (!res.ok) {
            const error = await res.json();
            throw new Error(error.error || "Error al enviar");
          }
          return res.json();
        }),
        {
          loading: "⏳⏳  ENVIANDO COMENTARIO......",
          success: "GRACIAS POR EL COMENTARIO!!!!🚀",
          error: (err: { message: string }) => `Error: ${err.message}`,
        },
      )
      .then(() => {
        reset();
        console.log("Correo enviado:", informacionFormulario);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const hasValue = (fieldName: string) =>
    informacionFormulario[fieldName]?.length > 0;
  return (
    <div className="h-full w-full">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full font-bold text-Theme text-2xl md:text-4xl text-center md:text-start mb-10"
      >
        {title}
      </motion.p>

      <form className="flex flex-col gap-10" onSubmit={handleSubmit(Datos)}>
        {/* Input Nombre */}
        <div className="relative flex flex-col">
          <motion.label
            htmlFor="nombre"
            variants={labelVariants}
            animate={hasValue("nombre") ? "float" : "idle"}
            className="absolute left-4 top-3 font-bold pointer-events-none z-10 "
          >
            {name}
          </motion.label>
          <motion.input
            id="nombre"
            {...register("nombre", { required: true })}
            variants={inputVariants}
            whileFocus="focus"
            className="w-full px-4 h-12 bg-transparent rounded-xl outline-none border-2 border-Hover z-0"
            type="text"
          />
        </div>

        {/* Input Correo */}
        <div className="relative flex flex-col">
          <motion.label
            htmlFor="correo"
            variants={labelVariants}
            animate={hasValue("correo") ? "float" : "idle"}
            className="absolute left-4 top-3 font-bold pointer-events-none z-10"
          >
            {email}
          </motion.label>
          <motion.input
            id="correo"
            {...register("correo", { required: true })}
            variants={inputVariants}
            whileFocus="focus"
            className="w-full px-4 h-12 bg-transparent rounded-xl outline-none border-2 border-Hover z-0"
            type="email"
          />
        </div>

        {/* Textarea Comentarios */}
        <div className="relative flex flex-col">
          <motion.label
            htmlFor="comentario"
            variants={labelVariants}
            animate={hasValue("comentario") ? "float" : "idle"}
            className="absolute left-4 top-3 font-bold pointer-events-none z-10"
          >
            {text}
          </motion.label>
          <motion.textarea
            id="comentario"
            {...register("comentario", { required: true })}
            variants={inputVariants}
            whileFocus="focus"
            className="w-full h-40 rounded-xl p-4 resize-none outline-none bg-transparent border-2 border-Hover z-0"
          />
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button className="w-full bg-Theme h-12 rounded-xl hover:bg-Hover text-white font-bold transition-colors">
            ENVIAR CORREO
          </Button>
        </motion.div>
      </form>
    </div>
  );
}
export default Comentarios;
