"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import CalendlyInline from "./CalendlyInline";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  whoYouNeedToHire: z.string().min(1, "Please select an option"),
  howManyPeople: z
    .string()
    .min(1, "This field is required")
    .refine(
      (val) =>
        !isNaN(Number(val)) && Number(val) > 0 && Number.isInteger(Number(val)),
      { message: "Must be a positive integer" }
    ),
  howCanWeHelpYou: z.string().optional(),
});

const HIRE_LABEL: Record<string, string> = {
  developer: "Hire a developer",
  team: "Hire a team",
  "software-development": "Software Development",
};

export function FormCard() {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [contactData, setContactData] = useState<z.infer<
    typeof formSchema
  > | null>(null);
  const [isScheduled, setIsScheduled] = useState(false);
  const isSchedule = currentStep === 2;

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === "https://calendly.com" &&
        event.data.event === "calendly.event_scheduled"
      ) {
        setIsScheduled(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      whoYouNeedToHire: "",
      howManyPeople: "",
      howCanWeHelpYou: "",
    },
  });

  function onContactSubmit(values: z.infer<typeof formSchema>) {
    setContactData(values);
    saveContactData(values);
    setCurrentStep(2);
  }

  async function saveContactData(data: z.infer<typeof formSchema>) {
    try {
      await fetch("/api/contact-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
          status: "form_completed",
        }),
      });
    } catch {}
  }

  const calendlyParams = useMemo(() => {
    const p: Record<string, string | number | boolean | undefined> = {
      hide_event_type_details: 1,
      hide_gdpr_banner: 1,
    };
    if (contactData?.phone) p.a1 = contactData.phone;
    if (contactData?.whoYouNeedToHire)
      p.a2 =
        HIRE_LABEL[contactData.whoYouNeedToHire] ??
        contactData.whoYouNeedToHire;
    if (contactData?.howManyPeople) p.a3 = contactData.howManyPeople;
    if (contactData?.howCanWeHelpYou) p.a4 = contactData.howCanWeHelpYou;
    return p;
  }, [contactData]);

  const calendlyReinitKey = useMemo(() => {
    if (!isSchedule || !contactData) return "preload";
    return JSON.stringify({
      e: contactData.email,
      p: contactData.phone,
      w: contactData.whoYouNeedToHire,
      c: contactData.howManyPeople,
      n: contactData.howCanWeHelpYou,
    });
  }, [isSchedule, contactData]);

  return (
    <div
      className={`
        bg-white/80 backdrop-blur-3xl rounded-2xl p-8 shadow-xl border border-neuronhire-gray-6
        ${isSchedule ? "h-[75vh]" : "h-[50%]"} flex flex-col overflow-hidden
        w-full
        ${
          isSchedule
            ? "xl:w-[560px] 2xl:w-[600px]"
            : "xl:w-[420px] 2xl:w-[460px]"
        }
      `}
    >
      <div className="mb-6 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-lg font-bold transition-all cursor-pointer ${
              currentStep === 1
                ? "text-neuronhire-black-100"
                : "text-neuronhire-gray-64 hover:text-neuronhire-black-100"
            }`}
            onClick={() => contactData && !isScheduled && setCurrentStep(1)}
          >
            Contact
          </span>
          <span
            className={`text-lg font-bold transition-all ${
              isSchedule
                ? "text-neuronhire-black-100"
                : "text-neuronhire-gray-64"
            }`}
          >
            Schedule
          </span>
        </div>
        <div className="relative">
          <div className="w-full h-1 bg-neuronhire-gray-12 rounded-full">
            <div
              className="h-1 bg-neuronhire-black-100 rounded-full transition-all duration-500 ease-out"
              style={{ width: currentStep === 1 ? "50%" : "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 relative flex flex-col">
        {currentStep === 1 && (
          <>
            <div className=" overflow-auto p-2 lg:pt-15">
              <Form {...form}>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Full name"
                            className="w-full px-4 py-3 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white placeholder-neuronhire-gray-40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Email"
                              className="w-full px-4 py-3 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white placeholder-neuronhire-gray-40"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Phone"
                              className="w-full px-4 py-3 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white placeholder-neuronhire-gray-40"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="whoYouNeedToHire"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white text-neuronhire-gray-40">
                              <SelectValue placeholder="Who you need to hire?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="developer">
                              Hire a developer
                            </SelectItem>
                            <SelectItem value="team">Hire a team</SelectItem>
                            <SelectItem value="software-development">
                              Software Development
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="howManyPeople"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="How many people do you need to hire?"
                            min="1"
                            step="1"
                            className="w-full px-4 py-3 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white placeholder-neuronhire-gray-40"
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="howCanWeHelpYou"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you?"
                            rows={4}
                            className="w-full px-4 pt-3 mb-4 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi resize-none bg-white placeholder-neuronhire-gray-40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </div>

            <div className="shrink-0 p-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onContactSubmit)}>
                  <div
                    className="inline-block p-0.5 rounded-full w-full"
                    style={{ background: "var(--neuronhire-gradient-2)" }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-neuronhire-black-100 text-white py-4 text-lg font-semibold rounded-full hover:bg-neuronhire-gray-80 transition-colors body-mackinac border-0"
                    >
                      Continue to Schedule
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </>
        )}

        <div
          className={
            isSchedule
              ? "relative h-full"
              : "absolute w-px h-px opacity-0 pointer-events-none -z-10 overflow-hidden"
          }
        >
          {!isScheduled ? (
            <CalendlyInline
              prefill={{ name: contactData?.name, email: contactData?.email }}
              height="100%"
              className="w-full h-full"
              params={calendlyParams}
              reinitKey={calendlyReinitKey}
            />
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neuronhire-black-100 mb-2">
                  Meeting Scheduled!
                </h3>
                <p className="text-neuronhire-gray-64 body-satoshi">
                  Thank you for scheduling a meeting with us. You&apos;ll
                  receive a confirmation email shortly with all the details.
                </p>
              </div>

              <div className="space-y-3 w-full max-w-sm">
                <Button
                  onClick={() => {
                    setCurrentStep(1);
                    setContactData(null);
                    setIsScheduled(false);
                    form.reset();
                  }}
                  className="w-full bg-neuronhire-black-100 text-white py-3 rounded-full hover:bg-neuronhire-gray-80 transition-colors"
                >
                  Schedule Another Meeting
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {isSchedule && !isScheduled && (
        <div className="pt-3 shrink-0">
          <Button
            onClick={() => setCurrentStep(1)}
            variant="ghost"
            className="px-6 py-3 text-neuronhire-gray-64 border-neuronhire-gray-40 hover:bg-neuronhire-gray-6 rounded-full"
          >
            <ArrowLeft />
            Back to Contact
          </Button>
        </div>
      )}
    </div>
  );
}
