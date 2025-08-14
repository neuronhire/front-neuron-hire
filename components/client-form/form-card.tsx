"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
      {
        message: "Must be a positive integer",
      }
    ),
  howCanWeHelpYou: z.string().optional(),
});

export function FormCard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [contactData, setContactData] = useState<z.infer<
    typeof formSchema
  > | null>(null);

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
    setCurrentStep(2);
  }

  function onScheduleSubmit() {
    console.log("Final submission:", contactData);
  }

  function goBackToContact() {
    setCurrentStep(1);
  }

  return (
    <div className="bg-white/80 backdrop-blur-3xl rounded-2xl p-8 shadow-xl border border-neuronhire-gray-6 h-auto">
      {/* Linear Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-lg font-bold transition-all cursor-pointer ${
              currentStep === 1
                ? "text-neuronhire-black-100"
                : "text-neuronhire-gray-64 hover:text-neuronhire-black-100"
            }`}
            onClick={() => contactData && setCurrentStep(1)}
          >
            Contact
          </span>
          <span
            className={`text-lg font-bold transition-all ${
              currentStep === 2
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
            ></div>
          </div>
        </div>
      </div>

      {currentStep === 1 && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onContactSubmit)}
            className="space-y-4"
          >
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
                        // Remove caracteres não numéricos e garantir que seja inteiro
                        const value = e.target.value.replace(/[^0-9]/g, "");
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
                      className="w-full px-4 pt-3 mb-7 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi resize-none bg-white placeholder-neuronhire-gray-40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
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
            </div>
          </form>
        </Form>
      )}

      {/* Step 2: Schedule */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-neuronhire-black-100 mb-2">
              Schedule Your Call
            </h3>
            <p className="text-neuronhire-gray-64 body-satoshi">
              Thanks {contactData?.name}! Now let's schedule your consultation
              call.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neuronhire-gray-6 to-neuronhire-gray-12 rounded-lg p-8 text-center">
            <p className="text-neuronhire-gray-64 mb-4">
              Calendar integration will be implemented here
            </p>
            <p className="text-sm text-neuronhire-gray-40">
              (Calendly, Google Calendar, or custom booking system)
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={goBackToContact}
              variant="ghost"
              className="flex-1 rounded-full py-3 text-neuronhire-gray-64 border-neuronhire-gray-40 hover:bg-neuronhire-gray-6"
            >
              Back to Contact
            </Button>

            <div className="flex-1">
              <div
                className="inline-block p-0.5 rounded-full w-full"
                style={{ background: "var(--neuronhire-gradient-2)" }}
              >
                <Button
                  onClick={onScheduleSubmit}
                  className="w-full bg-neuronhire-black-100 text-white py-3 text-lg font-semibold rounded-full hover:bg-neuronhire-gray-80 transition-colors body-mackinac border-0"
                >
                  Book Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
