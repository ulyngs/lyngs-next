import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/post/2021/12/02/4-steps-to-using-a-latex-template-with-r-markdown",
        destination:
          "/post/2021/12/02/how-to-adapt-any-latex-template-for-use-with-r-markdown-in-four-steps/",
        permanent: true,
      },
      {
        source: "/post/2021/12/02/4-steps-to-using-a-latex-template-with-r-markdown/",
        destination:
          "/post/2021/12/02/how-to-adapt-any-latex-template-for-use-with-r-markdown-in-four-steps/",
        permanent: true,
      },
      {
        source: "/zoom",
        destination: "https://ox-digitalwellbeing.zoom.us/j/92760380442",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
