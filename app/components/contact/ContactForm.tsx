"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import errorIcon from "@/public/images/contact/desktop/icon-error.svg";

type FormData = {
  name: string;
  email: string;
  number: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mwpebnzw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setSubmitError("");
      } else {
        setSubmitError("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <div className="flex justify-between w-full relative">
        <input
          className="w-full"
          {...register("name", { required: "Can't be empty " })}
          placeholder="Name"
          type="text"
        />
        {errors.name && (
          <p className="flex gap-[.8rem] text-[1.2rem] italic text-white absolute right-0 top-1/2 ">
            {errors.name.message}
            <Image
              className="rounded-full bg-white"
              width={20}
              height={20}
              src={errorIcon}
              alt="Warning icon"
            />
          </p>
        )}
      </div>
      <div className="flex justify-between w-full relative">
        <input
          className="w-full"
          {...register("email", { required: "Can't be empty " })}
          placeholder="Email Address"
          type="text"
        />
        {errors.email && (
          <p className="flex gap-[.8rem] text-[1.2rem] italic text-white absolute right-0 top-1/2 ">
            {errors.email.message}
            <Image
              className="rounded-full bg-white"
              width={20}
              height={20}
              src={errorIcon}
              alt="Warning icon"
            />
          </p>
        )}
      </div>
      <div className="flex justify-between w-full relative">
        <input
          className="w-full"
          {...register("number", { required: "Can't be empty" })}
          placeholder="Phone"
          type="text"
        />
        {errors.number && (
          <p className="flex gap-[.8rem] text-[1.2rem] italic text-white absolute right-0 top-1/2 ">
            {errors.number.message}
            <Image
              className="rounded-full bg-white"
              width={20}
              height={20}
              src={errorIcon}
              alt="Warning icon"
            />
          </p>
        )}
      </div>
      <div className="flex justify-between w-full relative">
        <textarea
          className="w-full"
          {...register("message", { required: "Can't be empty" })}
          placeholder="Your message"
          rows={6}
        ></textarea>
        {errors.message && (
          <p className="flex gap-[.8rem] text-[1.2rem] italic text-white absolute right-0 top-[3rem] ">
            {errors.message.message}
            <Image
              className="rounded-full bg-white"
              width={20}
              height={20}
              src={errorIcon}
              alt="Warning icon"
            />
          </p>
        )}
      </div>
      {submitError && (
        <p className="mt-[1rem] text-white body-text italic">
          An unexpected error occurred, try again later.
        </p>
      )}
      {!isSubmitted ? (
        <input
          type="submit"
          className="btn-primary btn-form mt-[3rem] mx-auto lg:mx-0 lg:ml-auto"
        />
      ) : (
        <p className="italic body-text text-white">
          Thank you, submission successful!
        </p>
      )}
    </form>
  );
};

export default ContactForm;
