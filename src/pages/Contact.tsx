import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (honeypot || Date.now() - formStartedAt < 3000) {
      setIsSuccess(true);
      form.reset();
      setHoneypot("");
      setFormStartedAt(Date.now());
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/binsalith@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New message from Bhoyee Global website",
          _template: "table",
          _captcha: "true",
          name: values.fullName,
          email: values.email,
          phone: values.phone || "Not provided",
          subject: values.subject,
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      setIsSuccess(true);
      toast.success("Thank you! Your message has been sent successfully.");
      form.reset();
      setHoneypot("");
      setFormStartedAt(Date.now());
    } catch (error) {
      toast.error("Sorry, your message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-4 py-16 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact <span className="text-primary">Us</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a question or want to start a project? Fill out the form below and our team will get back to you shortly.
        </p>
        <a
          href="mailto:hello@bhoyee.com"
          className="inline-flex text-2xl font-bold text-primary transition-colors hover:text-primary/80"
        >
          hello@bhoyee.com
        </a>
      </div>

      <div className="mx-auto max-w-3xl">
        {/* Form */}
        <div>
          <Card className="border-none shadow-2xl shadow-primary/5">
            <CardContent className="pt-6">
              {isSuccess ? (
                <div className="py-12 text-center space-y-6 animate-fade-in">
                  <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground">We've received your inquiry and will respond as soon as possible.</p>
                  </div>
                  <Button variant="outline" onClick={() => setIsSuccess(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="honey">Company website</label>
                      <input
                        id="honey"
                        name="_honey"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(event) => setHoneypot(event.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+234 ..." {...field} className="h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help?" {...field} className="h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your needs..." 
                              className="min-h-[150px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
