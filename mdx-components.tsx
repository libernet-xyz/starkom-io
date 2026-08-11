import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-lg text-gray-700 dark:text-gray-300">
      {children}
    </ul>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-blue-600 underline hover:text-blue-500 dark:text-blue-400"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900 dark:text-white">
      {children}
    </strong>
  ),
  code: ({ children }) => (
    <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-base text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      {children}
    </code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
