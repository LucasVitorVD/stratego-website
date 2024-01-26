import * as z from "zod"

export const formSchema = z.object({
  name: z.string({ required_error: "Nome ou empresa obriatórios." }),
  email: z.string({ required_error: "Email obriatório." }).email({ message: "Email inválido." }),
  message: z.string({ required_error: "Mensagem obigatória." }).min(2, {  message: "Precisa conter no mínimo 2 caracteres" }).max(300, { message: "Limite de 300 caracteres atingido." })
})

export type FormSchema = z.infer<typeof formSchema>