"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";
import { useThemeStore } from "@/store/themeStore";

interface Props {
  data: {
    title: string;
    name: string;
    email: string;
    text: string;
  };
}

function Comentarios(props: Props) {
  const theme = useThemeStore((s) => s.theme);
  const { title, name, email, text } = props.data;
  const { register, handleSubmit, reset, watch } = useForm();

  const informacionFormulario = watch();
  const inputVariants: Variants = {
    focus: {
      border: `2px solid ${theme.theme}`,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    idle: {
      border: `2px solid ${theme.textColor}`,
      transition: { duration: 0.2 },
    },
  };

  const labelVariants = {
    float: {
      y: -40,
      x: -5,
      scale: 0.9, // Añadir un poco de escala lo hace ver más Pro
      color: theme.theme,
    },
    idle: {
      y: 0,
      x: 0,
      scale: 1,
      color: theme.textColor,
    },
  };
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
          loading: "ENVIANDO MENSAJE......",
          success: "¡MENSAJE ENVIADO, ME CONTACTARÉ LO MAS PRONTO CONTIGO!",
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
    <div className="h-full w-4/6">
      <motion.p
        style={{ color: theme.theme }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full font-bold text-4xl text-center md:text-start mb-10"
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
            className="absolute left-4 top-3 font-bold pointer-events-none text-lg z-10 "
          >
            {name}
          </motion.label>
          <motion.input
            id="nombre"
            {...register("nombre", { required: true })}
            initial="idle" // Importante definir el estado inicial
            animate="idle" // Mantiene el color del tema actual aunque no tenga foco
            variants={inputVariants}
            whileFocus="focus"
            className="w-full px-4 h-12 bg-transparent rounded-xl text-lg outline-none z-0"
            type="text"
          />
        </div>

        {/* Input Correo */}
        <div className="relative flex flex-col">
          <motion.label
            htmlFor="correo"
            variants={labelVariants}
            animate={hasValue("correo") ? "float" : "idle"}
            className="absolute left-4 top-3 font-bold text-lg pointer-events-none z-10"
          >
            {email}
          </motion.label>
          <motion.input
            id="correo"
            initial="idle" // Importante definir el estado inicial
            animate="idle" // Mantiene el color del tema actual aunque no tenga foco
            whileFocus="focus"
            {...register("correo", { required: true })}
            variants={inputVariants}
            className="w-full px-4 h-12 bg-transparent text-lg rounded-xl outline-none  z-0"
            type="email"
          />
        </div>

        {/* Textarea Comentarios */}
        <div className="relative flex flex-col">
          <motion.label
            htmlFor="comentario"
            variants={labelVariants}
            animate={hasValue("comentario") ? "float" : "idle"}
            className="absolute left-4 top-3 text-lg  font-bold pointer-events-none z-10"
          >
            {text}
          </motion.label>
          <motion.textarea
            id="comentario"
            {...register("comentario", { required: true })}
            variants={inputVariants}
            initial="idle" // Importante definir el estado inicial
            animate="idle" // Mantiene el color del tema actual aunque no tenga foco
            whileFocus="focus"
            className="w-full h-40 text-lg rounded-xl p-4 resize-none outline-none bg-transparent z-0"
          />
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            style={{ background: theme.theme }}
            className="w-full  h-12 rounded-xl  text-white font-bold"
          >
            ENVIAR CORREO
          </Button>
        </motion.div>
      </form>
    </div>
  );
}
export default Comentarios;
