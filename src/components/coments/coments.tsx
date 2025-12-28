"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "../ui/button";

interface Props {
  data: {
    title: string;
    name: string;
    email: string;
    text: string;
  };
}

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
          error: (err: any) => `Error: ${err.message}`,
        }
      )
      .then(() => {
        reset();
        console.log("Correo enviado:", informacionFormulario);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form
      className="h-full w-full grid grid-cols-1 grid-rows-[auto,auto,auto,auto,auto] gap-y-10 justify-center"
      onSubmit={handleSubmit(Datos)}
    >
      <div className="h-16 w-full flex">
        <p className="font-bold text-Theme text-4xl">{title}:</p>
      </div>
      <div className="h-16 w-full flex">
        <input
          id="nombre"
          type="text"
          className="w-full px-4 h-12 bg-transparent rounded-xl outline-none z-50 formulario border-Hover border-2"
          {...register("nombre", { required: true })}
          required
        />
        <div className="font-bold absolute pl-4 pt-3 commentsLabel">{name}</div>
      </div>

      <div className="h-16 w-full flex">
        <input
          id="correo"
          type="email"
          className="w-full px-4 h-12 bg-transparent rounded-xl outline-none z-50 formulario border-Hover border-2"
          {...register("correo", {
            required: { value: true, message: "ingresa correo" },
          })}
          required
        />
        <div className="font-bold absolute pl-4 pt-3 commentsLabel">
          {email}
        </div>
      </div>

      <div className="h-48 w-full flex">
        <textarea
          autoCorrect="false"
          id="comentarios"
          className="w-full h-40 rounded-xl p-4 resize-none outline-none bg-transparent textarea focus:border-Theme z-50 border-Hover border-2"
          required
          {...register("comentario", { required: true })}
        ></textarea>
        <div className="font-bold absolute pl-4 pt-3 commentsLabel">{text}</div>
      </div>
      <Button className="bg-Theme h-10 rounded-xl hover:bg-Hover hover:scale-105 transition-all duration-300">
        ENVIAR CORREO
      </Button>

      <div className="w-full overflow-hidden relative"></div>
    </form>
  );
}

export default Comentarios;
