// Content "database" for the site.
// Every product, service and post is one Markdown file in src/content/<collection>/.
// Add a file, push to main, and the site rebuilds with a new page.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Products and research: the things we build.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one or two sentences, used on cards and as the meta description
    status: z.enum(['live', 'prototype', 'in-progress', 'research']),
    statusNote: z.string().optional(), // e.g. "simulation running"
    area: z.string(), // e.g. "security · ed-tech"
    stack: z.array(z.string()).default([]),
    order: z.number().default(100), // lower shows first
    featured: z.boolean().default(false),
    link: z.string().url().optional(),
    updated: z.coerce.date(),
  }),
});

// What we offer to companies.
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(100),
    deliverables: z.array(z.string()).default([]),
    proof: z.array(z.string()).default([]), // slugs from the work collection
  }),
});

// Notes, write-ups and announcements.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Vaibhav Bansal'),
    draft: z.boolean().default(false),
  }),
});

// Experience certificates issued to Lint Lab members, checked on /verify.
const certificates = defineCollection({
  loader: file('./src/data/certificates.json'),
  schema: z.object({
    name: z.string(),
    program: z.string(),
    project: z.string(),
    from: z.string(),
    to: z.string(),
  }),
});

export const collections = { work, services, posts, certificates };
