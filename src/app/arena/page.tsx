"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ArenaForceGraphWithSize from "@/components/arena/graph";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { determineType, getBlockConnections } from "@/lib/utils/arena/api";
import { motion } from "framer-motion";
import React from "react";

const FormSchema = z.object({
  link: z.string().url({
    message: "Link must be a valid URL.",
  }),
});

export type Node = {
  id: string;
  name: string;
};

export type Link = {
  source: string;
  target: string;
};

export default function ArenaGraph() {
  const [connections, setConnections] = React.useState<{
    nodes: Node[];
    links: Link[];
  }>({ nodes: [], links: [] });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (determineType(data.link) === "block") {
      getBlockConnections(data.link).then((res) => {
        setConnections(res);
      });
    }
  }

  return (
    // fill the screen with a flex column layout
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <div
        className="w-2/3 h-2/3 rounded-md border border-input bg-transparent shadow-sm"
        style={{ clipPath: "inset(0px 0px 0px 0px round 6px)" }}
      >
        <motion.div
          initial={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
          animate={{
            backgroundColor: connections.nodes.length
              ? "rgba(243, 244, 246, 0)"
              : "rgba(243, 244, 246, 1)",
          }}
          exit={{ backgroundColor: "rgba(243, 244, 246, 0)" }}
          transition={{ duration: 2 }}
          className="w-full h-full  absolute top-0 left-0 z-10 rounded-md border border-input bg-transparent shadow-sm pointer-events-none"
        />
        <ArenaForceGraphWithSize data={connections} />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 inline-block"
        >
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="text-center" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
