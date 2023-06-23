import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import { i18next } from "../../../translate/i18n";

import { Container, ContentContainer, Form } from "./styles";
import { Input } from "../../Form/Input";
import { Textarea } from "../../Form/Textarea";
import { Button } from "../../Button";

export function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    toast.info("Enviando mensagem...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Mensagem enviada com sucesso!");
      })
      .catch(() => {
        toast.error("Ocorreu um erro ao enviar a mensagem");
      });
  };

  return (
    <Container>
      <ContentContainer>
        <motion.h2
          id="contactMe"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 1 },
          }}
        >
          {i18next.t("contact.title")}
        </motion.h2>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <section className="row">
            <Input
              name="userName"
              register={register}
              placeholder={i18next.t("contact.form.namePlaceholder")}
              requiredMessage={i18next.t("contact.form.nameRequiredMessage")}
              errors={errors}
              required
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={{
                hidden: { opacity: 1 },
              }}
            />

            <Input
              name="userEmail"
              register={register}
              placeholder={i18next.t("contact.form.emailPlaceholder")}
              requiredMessage={i18next.t("contact.form.emailRequiredMessage")}
              errors={errors}
              required
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 1 },
              }}
            />
          </section>

          <Input
            name="subject"
            register={register}
            placeholder={i18next.t("contact.form.subjectPlaceholder")}
            requiredMessage={i18next.t("contact.form.subjectRequiredMessage")}
            errors={errors}
            required
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 1 },
            }}
          />

          <Textarea
            name="message"
            register={register}
            placeholder={i18next.t("contact.form.messagePlaceholder")}
            requiredMessage={i18next.t("contact.form.messageRequiredMessage")}
            errors={errors}
            required
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={{
              hidden: { opacity: 1 },
            }}
          />

          <Button type="submit" color="green">
            {i18next.t("contact.form.sendButton")}
          </Button>
        </Form>

        <ToastContainer theme="colored" autoClose={3000} />
      </ContentContainer>
    </Container>
  );
}
